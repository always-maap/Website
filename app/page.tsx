function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Mohammad ali 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a senior software engineer, researcher, and oss contributor based in{' '}
        <span className="not-prose">
          <Badge href="https://en.wikipedia.org/wiki/Tehran">🇮🇷 Tehran</Badge>
        </span>
        .
      </p>
      <p className="prose prose-neutral dark:prose-invert">
        I currently work at{' '}
        <span className="not-prose">
          <Badge href="https://www.digikala.com">
            <svg
              width="13"
              height="13"
              role="img"
              aria-label="Digikala logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#digikala" />
            </svg>
            Digikala
          </Badge>
        </span>
        . Recently graduated from the{' '}
        <span className="not-prose">
          <Badge href="https://nit.ac.ir/en">
            <svg
              width="13"
              height="13"
              role="img"
              aria-label="Noshirvani logo"
              className="mr-1 inline-flex"
            >
              <use href="/sprite.svg#noshirvani" />
            </svg>
            Noshirvani
          </Badge>
        </span>{' '}
        with a bachelor's degree in computer engineering.
      </p>
    </section>
  );
}
