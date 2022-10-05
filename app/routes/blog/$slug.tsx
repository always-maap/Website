import Container from "../../components/Container";
import Navigation from "../../components/Navigation";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { blogExists, readBlogData } from "utils/db.server";
import { useLoaderData } from "@remix-run/react";

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

  const isFound = await blogExists(slug);

  if (!isFound) {
    return new Response("404 page not found", { status: 404 });
  }

  const fileContent = await readBlogData(slug);
  console.log(fileContent);

  return json({ content: fileContent });
};

export default function Blog() {
  const { content } = useLoaderData();

  console.log(content);

  return (
    <Container>
      <Navigation active="/blog" />
      dasda
      <div
        className="prose dark:prose-invert prose-blue"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Container>
  );
}
