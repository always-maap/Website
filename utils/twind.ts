import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, setup } from "twind";
import typographyPlugin from "./typography.ts";

export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  plugins: {
    ...typographyPlugin({ className: "prose" }),
  },
};

if (IS_BROWSER) setup(config);
