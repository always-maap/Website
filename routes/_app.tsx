/** @jsx h */
import { h } from "preact";
import { AppProps } from "$fresh/src/server/types.ts";

export default function App({ Component }: AppProps) {
  return <Component />;
}
