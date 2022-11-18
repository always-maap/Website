import * as mdxBundler from "mdx-bundler/client";
import React from "react";

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

export { useMdxComponent };
