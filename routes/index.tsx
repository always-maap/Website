/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Container from "../components/Container.tsx";
import Navigation from "../components/Navigation.tsx";
import features from "../content/features.json" assert { type: "json" };

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
        <Navigation active="/" />
        <Me />
        <Features features={features.blog} />
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
        <p class={tw`text-gray-600 dark:text-gray-400 mb-16`}>
          Collecting my learnings about software engineering, computer science,
          web development, and system design.
        </p>
      </div>
      <div class={tw`w-[80px] sm:w-[176px] relative mb-8 sm:mb-0 `}>
        <img
          alt="Mohammad ali Ali panah"
          src="/me.jpeg"
          width={176}
          height={176}
          class={tw`rounded-full`}
        />
      </div>
    </div>
  );
}

type FeaturesProps = {
  features: Feature[];
};

function Features(props: FeaturesProps) {
  return (
    <>
      <h3
        class={tw`font-bold text-2xl md:text-4xl tracking-tight mb-6 text-black dark:text-white`}
      >
        Featured Blogs
      </h3>
      <div class={tw`flex gap-6 flex-col md:flex-row`}>
        {props.features.map((feature) => (
          <FeatureCard
            key={feature.title}
            title={feature.title}
            link={feature.link}
          />
        ))}
      </div>
    </>
  );
}

type Feature = {
  title: string;
  link: string;
};

function FeatureCard(props: Feature) {
  return (
    <a
      href={props.link}
      class={tw`transform hover:scale-[1.01] transition-all rounded-xl w-full md:w-1/3 bg-gradient-to-r p-1 from-[#D8B4FE] to-[#818CF8]`}
    >
      <div
        class={tw`flex flex-col justify-between h-full bg-white dark:bg-gray-900 rounded-lg p-4`}
      >
        <div class={tw`flex flex-col md:flex-row justify-between`}>
          <h4
            class={tw`text-lg md:text-lg font-medium mb-6 sm:mb-10 w-full text-gray-900 dark:text-gray-100 tracking-tight`}
          >
            {props.title}
          </h4>
        </div>
        <div
          class={tw`flex items-center text-gray-800 dark:text-gray-200 capsize`}
        >
          ???
        </div>
      </div>
    </a>
  );
}
