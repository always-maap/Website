import { useLayoutEffect, useState } from "react";
import type { ButtonHTMLAttributes } from "react";
import cn from "classnames";

const chars = ["چجحخهعغفقثصض", "گکمنتالبیسش", "وپدذرزطظ"];

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="no-tap-highlight text-lg basis-8 flex-1 flex justify-center items-center rounded-md h-12 hover:opacity-80 touch-none shadow active:shadow-none active:translate-y-px bg-slate-100 dark:bg-slate-300 font-medium"
      {...props}
    >
      {props.children}
    </button>
  );
}

const WORD = "جمشیدی";
const init = () => Array.from({ length: WORD.length }).fill("") as string[];

export default function Puzzle() {
  const [guesses, setGuesses] = useState<string[][]>(() => {
    const initial = init();
    return [initial];
  });

  useLayoutEffect(() => {
    document.documentElement.style.height = "100%";
    document.body.style.height = "100%";
  }, []);

  function onSelectChar(char: string) {
    const guessesCopy = [...guesses];
    const currGuess = guessesCopy[guesses.length - 1];
    const firstEmpty = currGuess.findIndex((g) => g === "");
    if (firstEmpty === -1) {
      return;
    } else {
      currGuess[firstEmpty] = char;
    }
    setGuesses(guessesCopy);
  }

  function onSubmit() {
    const curr = guesses[guesses.length - 1];
    if (curr.findIndex((c) => c === "") !== -1) {
      return;
    }
    const correct = WORD === curr.join("");
    if (!correct) {
      const initial = init();
      setGuesses((prev) => [...prev, initial]);
    }
  }

  function onDelete() {
    const guessesCopy = [...guesses];
    const currGuess = guessesCopy[guesses.length - 1];
    const firstEmpty = currGuess.findIndex((g) => g === "");
    if (firstEmpty === -1) {
      currGuess[currGuess.length - 1] = "";
    } else {
      currGuess[firstEmpty - 1] = "";
    }
    setGuesses(guessesCopy);
  }

  const isCorrectChar = (i: number, j: number) => {
    const currGuess = guesses.length - 1;
    if (currGuess === i && guesses[currGuess].join("") !== WORD) {
      return false;
    }
    return WORD[j] === guesses[i][j];
  };

  return (
    <main className="container mx-auto max-w-md flex-grow px-4 sm:px-0 flex flex-col h-full">
      <div className="flex-grow flex flex-col relative gap-4 py-4" dir="rtl">
        <div className="grid gap-2 relative text-3xl sm:text-4xl font-semibold mb-8">
          {guesses.map((guess, i) => (
            <div key={i} className="grid grid-cols-6 gap-2 relative w-full">
              {guess.map((c, j) => (
                <div
                  key={`${i}-${j}`}
                  className={cn(
                    isCorrectChar(i, j)
                      ? "bg-green-300 border-green-400 dark:border-green-300 dark:bg-green-500"
                      : "bg-slate-300 border-slate-400 dark:border-slate-300 dark:bg-slate-500",
                    "aspect-square flex items-center justify-center overflow-hidden rounded-[28%] border-2"
                  )}
                >
                  {c}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-auto sticky bottom-16 shadow-md flex flex-col gap-1 text-gray-800 select-none bg-slate-300 dark:bg-slate-600 p-1 rounded-lg">
        <div className="flex gap-1 justify-center">
          {chars[0].split("").map((ch) => (
            <Button key={ch} onClick={() => onSelectChar(ch)}>
              {ch}
            </Button>
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          {chars[1].split("").map((ch) => (
            <Button key={ch} onClick={() => onSelectChar(ch)}>
              {ch}
            </Button>
          ))}
        </div>
        <div className="flex gap-1 justify-center">
          <Button onClick={onDelete}>🔙</Button>
          {chars[2].split("").map((ch) => (
            <Button key={ch} onClick={() => onSelectChar(ch)}>
              {ch}
            </Button>
          ))}
          <Button onClick={onSubmit}>✅</Button>
        </div>
      </div>
    </main>
  );
}
