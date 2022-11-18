import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { compileMdx } from "../../utils/compile-mdx.server";
import { useMdxComponent } from "../../utils/mdx";

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

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;

  const fileContent = await compileMdx(slug);

  return json({ content: fileContent.code });
};

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <p>The stack trace is:</p>
      <pre>{error.stack}</pre>
    </div>
  );
}

export default function Blog() {
  const { content } = useLoaderData();

  const Component = useMdxComponent(content);

  return (
    <Container>
      <Navigation active="/blog" />
      <article className="prose">
        <Component />
      </article>
    </Container>
  );
}
