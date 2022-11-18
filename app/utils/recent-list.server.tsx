import matter from "gray-matter";
import { downloadDirectory } from "./github.server";

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

async function getRecentBlogs() {
  const blogDir = await downloadDirectory("content/blogs");

  return blogDir.slice(0, 19).map((blog) => {
    const { content } = blog;
    const { data } = matter(content);
    const { title, berief, slug } = data;
    return { title, berief, slug };
  });
}

export { getRecentBlogs };
export type RecentBlogType = Awaited<ReturnType<typeof getRecentBlogs>>[0];
