/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import type { ComponentChildren } from "preact";

type Props = {
  children?: ComponentChildren;
};

export default function Container(props: Props) {
  return (
    <div
      class={tw`flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16`}
    >
      {props.children}
    </div>
  );
}
