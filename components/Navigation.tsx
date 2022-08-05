/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ThemeButton from "../islands/ThemeButton.tsx";
import cn from "classnames";

const items = [
  { name: "Home", url: "/", routes: ["/"] },
  { name: "Blog", url: "/blog", routes: ["/blog", "/blog/:slug*"] },
  {
    name: "Snippets",
    url: "/snippets",
    routes: ["/snippets", "/snippets/:slug*"],
  },
  { name: "About", url: "/about", routes: ["/about"] },
];

type Props = {
  active: string;
};

export default function Navigation(props: Props) {
  function isActive(routes: string[]) {
    return routes.findIndex((route) => route === props.active) !== -1;
  }

  return (
    <nav
      class={tw`flex items-center justify-between w-full relative max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pt-8 pb-8 sm:pb-16 text-gray-900 bg-gray-50 dark:bg-gray-900 bg-opacity-60 dark:text-gray-100`}
    >
      <div>
        {items.map((item) => (
          <a
            href={item.url}
            class={cn(
              isActive(item.routes)
                ? tw`font-semibold text-gray-800 dark:text-gray-200`
                : tw`font-normal text-gray-600 dark:text-gray-400`,
              tw`hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-all`
            )}
          >
            {item.name}
          </a>
        ))}
      </div>
      <ThemeButton />
    </nav>
  );
}
