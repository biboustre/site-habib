import React from 'react';
import Image from 'next/image';

export default function AboutSection () {
  return (
    <section id="a-propos" className="relative h-screen scroll-mt-[100px]">
      <h1 className="absolute z-10 w-full pt-10 text-center text-3xl font-bold tracking-wider text-white md:text-5xl">
        Nous créons et améliorons les <br /> produits Web et mobiles
      </h1>
      <Image
        className="z-0 size-full"
        src="/images/photo_ordinateur_1.webp"
        alt="hero"
        height={500}
        width={500}
        objectFit="cover"
      />
    </section>
  );
};

