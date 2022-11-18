import { readdir, readFile } from "fs/promises";
import path from "path";
import matter from "gray-matter";

export interface BlogMatter {
  title: string;
  berief: string;
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  isPublished: boolean;
  isComplete: boolean;
  date: string;
}

const BLOGS_DIR = path.resolve(__dirname, "../content/blogs");

async function getRecentBlogs() {
  const blogs = await readdir(BLOGS_DIR);

  const allBlogs = await Promise.all(
    blogs.map(async (blog) => {
      const x = await readFile(path.join(BLOGS_DIR, blog, "index.mdx"), "utf8");
      const { data } = matter(x);
      return data as BlogMatter;
    })
  );

  return allBlogs.slice(0, 19).map((blog) => ({
    title: blog.title,
    berief: blog.berief,
    slug: blog.slug,
  }));
}

export { getRecentBlogs };
export type RecentBlogType = Awaited<ReturnType<typeof getRecentBlogs>>[0];
