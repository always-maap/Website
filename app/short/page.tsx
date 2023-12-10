import Link from "next/link";
import { allShorts } from "contentlayer/generated";

export const metadata = {
  title: "Short",
  description: "Read my thoughts on software development, design, and more.",
};

export default async function ShortsPage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif mb-5">Short</h1>
      {allShorts
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link key={post.slug} className="flex flex-col space-y-1 mb-4" href={`/short/${post.slug}`}>
            <div className="w-full flex flex-col">
              <p>{post.title}</p>
            </div>
          </Link>
        ))}
    </section>
  );
}
