import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getMdxPage, useMdxComponent } from "../../utils/mdx";

export const loader: LoaderFunction = async ({ params }) => {
  const slug = params.slug as string;

  const fileContent = await getMdxPage("blogs", slug);

  return json(
    { content: fileContent.code },
    { headers: { "Cache-Control": "public, max-age=3600" } }
  );
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
