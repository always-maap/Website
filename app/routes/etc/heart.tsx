import { useState } from "react";
import type { FormEvent } from "react";

function createHeart(n: number) {
  let res = "";

  for (let i = n / 2; i < n; i += 2) {
    // print first spaces
    for (let j = 1; j < n - i; j += 2) {
      res += " ";
    }
    // print first stars
    for (let j = 1; j < i + 1; j++) {
      res += "*";
    }
    // print second spaces
    for (let j = 1; j < n - i + 1; j++) {
      res += " ";
    }
    // print second stars
    for (let j = 1; j < i + 1; j++) {
      res += "*";
    }
    res += "\n";
  }
  // lower part
  // inverted pyramid
  for (let i = n; i > 0; i--) {
    for (let j = 0; j < n - i; j++) {
      res += " ";
    }
    for (let j = 1; j < i * 2; j++) {
      res += "*";
    }
    res += "\n";
  }

  return res;
}

export function meta() {
  return {
    title: "Heart",
  };
}

export default function Heart() {
  const [heart, setHeart] = useState("");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    const formData = new FormData(e.currentTarget);
    e.preventDefault();
    const count = formData.get("count");
    if (count) {
      setHeart(createHeart(+count));
    }
  }

  return (
    <form onSubmit={onSubmit} className="w-full md:max-w-xs py-4 space-y-4">
      <input
        type="number"
        id="count"
        name="count"
        placeholder="an even number between 6 and 10"
        required
        min={4}
        max={10}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Submit
      </button>
      <div
        style={{ fontFamily: "'emoji', 'Apple Color Emoji', monospace" }}
        className="text-black dark:text-white flex justify-center whitespace-pre text-xs"
      >
        {heart}
      </div>
    </form>
  );
}
