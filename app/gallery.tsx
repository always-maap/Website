'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const photos = [
  {
    src: '/images/home/peanut.webp',
    alt: "Kiarash's lovely dog, Peanut",
    rotate: 5,
    tall: true,
  },
  {
    src: '/images/home/kiddo.jpg',
    alt: 'Back when things were good',
    rotate: -4,
    tall: false,
  },
  {
    src: '/images/home/coco.jpg',
    alt: 'My cat Coco, the most adorable creature on the planet',
    rotate: 6,
    tall: true,
  },
  {
    src: '/images/home/kiarash-graduation.jpg',
    alt: 'With Kiarash at our graduation ceremony',
    rotate: 4,
    tall: false,
  },
  {
    src: '/images/home/digikala.jpg',
    alt: 'Digikala entrance, the company I currently work at',
    rotate: -6,
    tall: false,
  },
  {
    src: '/images/home/mother.jpg',
    alt: "My mother and I at my grandfather's garden",
    rotate: -5,
    tall: true,
  },
];

export function Gallery() {
  return (
    <div className="my-10 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      <div className="relative inline-flex min-w-full items-start gap-5 px-3 pb-2">
        <div className="pointer-events-none absolute left-0 right-0 top-3 h-[2px] rounded-full bg-neutral-400 shadow-sm dark:bg-neutral-600" />
        {photos.map((photo, i) => (
          <div
            key={photo.src}
            className="relative flex shrink-0 flex-col items-center pt-6"
          >
            <span className="absolute top-2 z-10 h-5 w-2.5 rounded-[1px] bg-amber-800 shadow-sm dark:bg-amber-600" />
            <motion.div
              className="relative cursor-pointer bg-white p-1.5 pb-4 shadow-[0_10px_20px_-8px_rgba(0,0,0,0.45)]"
              style={{ transformOrigin: 'top center' }}
              initial={{ opacity: 0, rotate: photo.rotate * 2.2, y: -12 }}
              whileInView={{ opacity: 1, rotate: photo.rotate, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{
                rotate: 0,
                scale: 1.1,
                y: -4,
                zIndex: 30,
                transition: { type: 'spring', stiffness: 300, damping: 18 },
              }}
            >
              <div
                className={`relative w-24 sm:w-32 ${
                  photo.tall ? 'h-32 sm:h-44' : 'h-24 sm:h-32'
                }`}
              >
                <Image
                  alt={photo.alt}
                  src={photo.src}
                  fill
                  sizes="(max-width: 640px) 96px, 128px"
                  priority={i === 0}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
