import matter from "gray-matter";
import {
  CLOUDFLARE_BASE,
  CLOUDFLARE_ACCOUNT,
  CLOUDFLARE_NAMESPACE,
} from "~/constants/cloudflare";
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

async function getRecentBlogsCache() {
  const res = await fetch(
    `${CLOUDFLARE_BASE}/accounts/${CLOUDFLARE_ACCOUNT}/storage/kv/namespaces/${CLOUDFLARE_NAMESPACE}/values/recent-blogs`,
    {
      headers: {
        AUTHORIZATION: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
      },
    }
  );

  const data = await res.json();

  return data;
}

async function setRecentBlogsCache(recentBlogs: RecentBlogType[]) {
  const res = await fetch(
    `${CLOUDFLARE_BASE}/accounts/${CLOUDFLARE_ACCOUNT}/storage/kv/namespaces/${CLOUDFLARE_NAMESPACE}/values/recent-blogs`,
    {
      method: "PUT",
      headers: {
        AUTHORIZATION: `Bearer ${process.env.CLOUDFLARE_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(recentBlogs),
    }
  );

  const data = await res.json();

  return data;
}

async function getRecentBlogs() {
  const cached = await getRecentBlogsCache();

  if (cached) {
    console.log("cached");
    return cached;
  }
  console.log("not cached");

  const blogDir = await downloadDirectory("content/blogs");

  const recentBlogs = blogDir.slice(0, 19).map((blog) => {
    const { content } = blog;
    const { data } = matter(content);
    const { title, berief, slug } = data;
    return { title, berief, slug };
  });

  await setRecentBlogsCache(recentBlogs);

  return recentBlogs;
}

export { getRecentBlogs };
export type RecentBlogType = Awaited<ReturnType<typeof getRecentBlogs>>[0];
