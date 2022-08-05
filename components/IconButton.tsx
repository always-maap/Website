/** @jsx h */
import { h, JSX } from "preact";
import { tw } from "@twind";

type Props = JSX.HTMLAttributes<HTMLButtonElement>;

export default function IconButton(props: Props) {
  return (
    <button
      type="button"
      class={tw`w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center hover:ring-2 ring-gray-300 transition-all`}
      {...props}
    >
      {props.children}
    </button>
  );
}
