import Image from 'next/image';
import digikala from 'public/images/home/digikala.jpg';
import peanut from 'public/images/home/peanut.webp';
import university from 'public/images/home/university.jpg';
import coco from 'public/images/home/coco.jpg';
import mother from 'public/images/home/mother.jpg';
import spirited_away from 'public/images/home/spirited_away.jpg';
import { PreloadResources } from 'app/preload';

function Badge(props) {
  return (
    <a
      {...props}
      target="_blank"
      className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
    />
  );
}

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

function BlogLink({ slug, name }) {
  return (
    <div className="group">
      <a
        // href={`/blog/${slug}`}
        className="flex w-full items-center justify-between rounded border border-neutral-200 bg-neutral-50 px-3 py-4 dark:border-neutral-700 dark:bg-neutral-800"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-neutral-100">
            {name}
          </p>
        </div>
        <div className="transform text-neutral-700 transition-transform duration-300 group-hover:-rotate-12 dark:text-neutral-300">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}

function Gallery() {
  return (
    <div className="grid grid-cols-2 grid-rows-4 sm:grid-rows-3 sm:grid-cols-3 gap-4 my-8">
      <div className="relative h-40">
        <Image
          alt="Digikala entrance, the company I currently work at"
          src={digikala}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative sm:row-span-2 row-span-1">
        <Image
          alt="Me and Peanut, my friend's lovely dog"
          src={peanut}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative">
        <Image
          alt="Me and my friends at the university graduation ceremony"
          src={university}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="My cat Coco, the most adorable creature on the planet"
          src={coco}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover sm:object-center"
        />
      </div>
      <div className="relative row-span-2">
        <Image
          alt="My mother and I at my grandfather's garden"
          src={mother}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40">
        <Image
          alt="My favorite anime, Spirited Away by Hayao Miyazaki"
          src={spirited_away}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <section>
      <PreloadResources />
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
      <Gallery />
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I write about engineering, travel, and life on my blog. Sometimes very
          technical, sometimes very personal. It's a way for me to express my
          thoughts and share my experiences. You can read some of my favorites
          below.
        </p>
      </div>
      <div className="my-8 flex w-full flex-col space-y-4">
        <BlogLink
          name="Building Iran's largest tech media"
          slug="story-of-zoomit"
        />
        <BlogLink
          name="Five years of working full-time"
          slug="five-years-full-time"
        />
        <BlogLink name="My engineering degree" slug="my-engineering-degree" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I tought and mentored hundreds of students in the past few years. I
          love helping people and will always answer to emails. So feel free to
          reach out.
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/always_maap"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">follow me on x</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:mohammadali.ap.2000@gmail.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">send me an email</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/tur1ng/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">connect on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/always-maap/resume"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">resume & cv</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
