/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { AppProps } from "$fresh/src/server/types.ts";
import { Head } from "$fresh/runtime.ts";

const initialTheme = `
if (
  localStorage.getItem('color-theme') === 'dark' ||
  (!('color-theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}
`;

export default function App({ Component }: AppProps) {
  return (
    <>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: initialTheme }} />
      </Head>
      <Component />
    </>
  );
}
