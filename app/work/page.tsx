import Link from 'next/link';

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">my work</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Todo</p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Digikala</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Senior Software Engineer, 2024 — Present
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Zoomit</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Technical Lead, 2021 - 2023
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">iGap</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2020
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Mine Taxi</h2>
        <p className="text-neutral-600 dark:text-neutral-400 text-sm">
          Software Engineer, 2019
        </p>
      </div>
    </section>
  );
}
