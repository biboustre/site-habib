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
    <section
      className={`flex flex-col rounded-lg px-1 md:h-[400px] md:flex-row ${
        isReversed ? "md:flex-row-reverse" : ""
      }  ${className}`}
    >
      <figure className="md:w-1/2 ">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={200}
          height={200}
          className={` size-full rounded-t-lg  object-cover md:rounded-lg ${classNameImg}`}
        />
      </figure>
      <figcaption className="flex flex-col  pl-2 pt-6 md:w-1/2 md:items-center md:px-20">
        <h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className="text-lg tracking-wide text-white">{description}</p>
      </figcaption>
    </section>
  );
}
