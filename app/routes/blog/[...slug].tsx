import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import { frontMatter, gfm } from "../../../utils/markdown";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { readFile, readdir } from "node:fs";

interface Data {
  content: FrontMatter["content"];
  page: FrontMatter["data"];
}

interface FrontMatter {
  content: string;
  data: {
    title: string;
    desc: string;
  };
}

const BLOGS = "../../content/blog";

// export const loader: LoaderFunction = async ({ context: ctx }) => {
//   const slug = ctx.params.slug;
//   const filename = slug + ".md";
//   const blogDir = new URL(BLOGS, import.meta.url);

//   let isFound = false;
//   for await (const dirEntry of readdir(blogDir)) {
//     if (dirEntry.name === filename) {
//       isFound = true;
//       break;
//     }
//   }

//   if (!isFound) {
//     return new Response("404 page not found", { status: 404 });
//   }

//   const url = new URL(`${BLOGS}/${filename}`, import.meta.url);
//   const fileContent = await readFile(url);
//   const { content, data } = frontMatter(fileContent) as FrontMatter;

//   return json({ content, page: data });
// };

export default function Blog() {
  const {} = useLoaderData();

  return (
    <Container>
      <Navigation active="/blog" />
      <div
        className="prose dark:prose-invert prose-blue"
        // dangerouslySetInnerHTML={{ __html: gfm.render(props.data.content) }}
      />
    </Container>
  );
}
