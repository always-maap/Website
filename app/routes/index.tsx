import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Container from "../components/Container";
import Navigation from "../components/Navigation";
import { getRecentBlogs } from "../utils/recent-list.server";
import type { RecentBlogType } from "../utils/recent-list.server";

export function meta() {
  return {
    title: "Mohammad ali Ali panah",
    description: "Mohammad ali Ali panah - Software engineer",
  };
}

export const loader: LoaderFunction = async () => {
  const recentBlogs = await getRecentBlogs();

  return json(
    { recentBlogs },
    { headers: { "Cache-Control": "max-age=3600" } }
  );
};

export default function Home() {
  const { recentBlogs } = useLoaderData();

  return (
    <Container>
      <Navigation active="/" />
      <Me />
      <RecentBlogs blogs={recentBlogs} />
    </Container>
  );
}

function Me() {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start">
      <div className="flex flex-col pr-8">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
          Mohammad ali Ali panah
        </h1>
        <h2 className="text-gray-700 dark:text-gray-200 mb-4">
          Front-end lead at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.zoomit.ir"
            className="font-semibold"
          >
            Zoomit
          </a>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-16">
          Collecting my learnings about software engineering, computer science,
          web development, and system design.
        </p>
      </div>
    </div>
  );
}

interface RecentBlogsProps {
  blogs: RecentBlogType[];
}

function RecentBlogs(props: RecentBlogsProps) {
  return (
    <>
      <h3 className="font-medium tracking-tight mb-6 text-black dark:text-white uppercase tracking-wide">
        Recently published
      </h3>
      <div>
        {props.blogs.map((article) => (
          <ArticleCard
            key={article.title}
            title={article.title}
            berief={article.berief}
            slug={article.slug}
          />
        ))}
      </div>
    </>
  );
}

function ArticleCard(props: RecentBlogType) {
  return (
    <a
      href={`/blog/${props.slug}`}
      className="[&:not(:first-of-type)]:mt-12 block"
    >
      <article className="dark:bg-gray-900 ">
        <h4 className="text-xl font-semibold w-full text-gray-900 dark:text-gray-100 tracking-tight">
          {props.title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400 my-6">{props.berief}</p>
        <div>Read more</div>
      </article>
    </a>
  );
}
