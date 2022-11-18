import { readFile } from "fs/promises";
import { bundleMDX } from "mdx-bundler";
import path from "path";

const BLOGS = path.resolve(process.cwd(), "./content/blogs");

export async function compileMdx<
  FrontmatterType extends Record<string, unknown>
>(slug: string) {
  const mdxSource = await readFile(`${BLOGS}/${slug}/index.mdx`, "utf-8");

  try {
    const { frontmatter, code } = await bundleMDX({
      source: mdxSource,
      files: {
        "../../app/components/Footer.tsx": `
import * as React from 'react'

function Demo() {
  return <div>Neat demo!</div>
}

export default Demo
    `,
      },
    });

    return {
      code,
      frontmatter: frontmatter as FrontmatterType,
    };
  } catch (error: unknown) {
    console.error(`Compilation error for slug: `, slug);
    throw error;
  }
}
