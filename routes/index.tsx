/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import Container from "../components/Container.tsx";
import { tw } from "@twind";

const TITLE = "Mohammad ali Ali panah";
const DESCRIPTION = "Mohammad ali Ali panah - Front-end lead at Zoomit";

export default function Home() {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Head>
      <Container>
        <Me />
      </Container>
    </>
  );
}

function Me() {
  return (
    <div class={tw`flex flex-col-reverse sm:flex-row items-start`}>
      <div class={tw`flex flex-col pr-8`}>
        <h1
          class={tw`font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white`}
        >
          Mohammad ali Ali panah
        </h1>
        <h2 class={tw`text-gray-700 dark:text-gray-200 mb-4`}>
          Front-end lead at{" "}
          <a
            href="https://www.zoomit.ir"
            target="_blank"
            class={tw`font-semibold`}
          >
            Zoomit
          </a>
        </h2>
      </div>
      <div class={tw`w-[80px] sm:w-[121px] relative mb-8 sm:mb-0 mr-auto`}>
        <img
          alt="Mohammad ali Ali panah"
          src="/me.jpeg"
          width={121}
          height={121}
          class={tw`rounded-full`}
        />
      </div>
    </div>
  );
}
