import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { cwd } from "process";

const BLOGS = path.resolve(cwd(), "./content/blog");

export const blogExists = async (slug: string) => {
  const filename = slug + ".md";
  const blogDir = BLOGS;

  let isFound = false;
  for (const dirEntry of await readdir(blogDir)) {
    if (dirEntry === filename) {
      isFound = true;
      break;
    }
  }
  return isFound;
};

export const readBlogData = async (slug: string) => {
  const filename = slug + ".md";
  const blogDir = BLOGS;

  return await readFile(`${blogDir}/${filename}`, "utf8");
};
