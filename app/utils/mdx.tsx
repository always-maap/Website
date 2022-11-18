import * as mdxBundler from "mdx-bundler/client";
import React from "react";
import { compileMdx } from "./compile-mdx.server";
import { downloadMdxFileOrDirectory } from "./github.server";

function getMdxComponent(code: string) {
  const Component = mdxBundler.getMDXComponent(code);
  function MdxComponent({
    components,
    ...rest
  }: Parameters<typeof Component>["0"]) {
    return <Component components={{ ...components }} {...rest} />;
  }
  return MdxComponent;
}

function useMdxComponent(code: string) {
  return React.useMemo(() => getMdxComponent(code), [code]);
}

async function getMdxPage(contentDir: string, slug: string) {
  const pageFiles = await downloadMdxFileOrDirectory(`${contentDir}/${slug}`);

  const compiledPage = await compileMdx(slug, pageFiles.files);

  if (!compiledPage) {
    throw new Error(`Page not found: ${slug}`);
  }

  return compiledPage;
}

export { useMdxComponent, getMdxPage };
