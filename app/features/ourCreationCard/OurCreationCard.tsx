import React from "react";
import Image from "next/image";

interface ourCreationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  classNameImg?: string;
  isReversed?: boolean;
}

export default function OurCreationCard({
  title,
  description,
  imageUrl,
  imageAlt,
  className,
  classNameImg,
  isReversed = false,
}: ourCreationCardProps) {
  return (
    <>
      <section
        className={`mx-auto flex h-auto max-w-[600px] flex-col gap-10 rounded-lg px-1 lg:max-w-[1500px] lg:flex-row lg:items-center 2xl:h-[550px] ${
          isReversed ? "lg:flex-row-reverse" : ""
        }  ${className}`}
      >
        <figure className="relative my-auto h-72 lg:h-[300px] lg:w-1/2 lg:max-w-[800px]">
          <Image
            src={imageUrl}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
            className={`rounded-t-lg  md:rounded-lg  ${classNameImg}`}
            quality={100}
            loading="lazy"
          />
        </figure>
        <figcaption className="flex flex-col items-center gap-5 pt-6 lg:w-1/2 lg:pt-0">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="px-3 text-center text-base tracking-wide text-white md:text-center md:text-lg lg:px-0 lg:text-[16px] xl:px-10">
            {description}
          </p>
        </figcaption>
      </section>
      <hr className="m-auto w-4/5" />
    </>
  );
}
