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
    </section>
  );
}
