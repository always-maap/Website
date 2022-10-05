import { bundleMDX } from "mdx-bundler";

export async function compileMdx<
  FrontmatterType extends Record<string, unknown>
>(slug: string, githubFiles: Array<GitHubFile>) {
  const { default: remarkAutolinkHeadings } = await import(
    "remark-autolink-headings"
  );
  const { default: remarkSlug } = await import("remark-slug");
  const { default: gfm } = await import("remark-gfm");

  const indexRegex = new RegExp(`${slug}\\/index.mdx?$`);
  const indexFile = githubFiles.find(({ path }) => indexRegex.test(path));
  if (!indexFile) return null;

  const rootDir = indexFile.path.replace(/index.mdx?$/, "");
  const relativeFiles: Array<GitHubFile> = githubFiles.map(
    ({ path, content }) => ({
      path: path.replace(rootDir, "./"),
      content,
    })
  );
  const files = arrayToObj(relativeFiles, {
    keyName: "path",
    valueName: "content",
  });

  try {
    const { frontmatter, code } = await bundleMDX({
      source: indexFile.content,
      files,
      mdxOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          remarkSlug,
          [remarkAutolinkHeadings, { behavior: "wrap" }],
          gfm,
          ...remarkPlugins,
        ];
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
        ];
        return options;
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
