/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Container from "../components/Container.tsx";
import Navigation from "../components/Navigation.tsx";

const TITLE = "Mohammad ali Ali panah";
const DESCRIPTION = "Mohammad ali Ali panah - Front-end lead at Zoomit";

export default function Snippets() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Container>
        <Navigation active="" />
      </Container>
    </>
  );
}
