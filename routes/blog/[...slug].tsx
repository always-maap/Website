/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Container from "../../components/Container.tsx";
import Navigation from "../../components/Navigation.tsx";
import { frontMatter, gfm } from "../../utils/markdown.ts";

interface Data {
  content: string;
  data: Record<string, unknown>;
}

const BLOGS = "../../content/blog";

export const handler: Handlers<Data> = {
  async GET(_req, ctx) {
    const slug = ctx.params.slug;
    const filename = slug + ".md";
    const blogDir = new URL(BLOGS, import.meta.url);

    let isFound = false;
    for await (const dirEntry of Deno.readDir(blogDir)) {
      if (dirEntry.name === filename) {
        isFound = true;
        break;
      }
    }

    if (!isFound) {
      return new Response("404 page not found", { status: 404 });
    }

    const url = new URL(`${BLOGS}/${filename}`, import.meta.url);
    const fileContent = await Deno.readTextFile(url);
    const { content, data } = frontMatter(fileContent) as Data;

    const res = await ctx.render({ content, data });
    res.headers.set("Cache-Control", `max-age=${60 * 5}`);
    return res;
  },
};

const TITLE = "Mohammad ali Ali panah";
const DESCRIPTION = "Mohammad ali Ali panah - Front-end lead at Zoomit";

export default function Blog(props: PageProps<Data>) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Container>
        <Navigation active="" />
        <div
          dangerouslySetInnerHTML={{ __html: gfm.render(props.data.content) }}
        />
      </Container>
    </>
  );
}
