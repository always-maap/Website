import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export default function Container(props: Props) {
  return (
    <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
      {props.children}
    </div>
  );
}
