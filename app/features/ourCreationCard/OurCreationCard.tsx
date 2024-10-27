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
      className={`flex flex-col rounded-lg px-1 md:h-[400px] md:flex-row 2xl:h-[550px] ${
        isReversed ? "md:flex-row-reverse" : ""
      }  ${className}`}
    >
      <figure className="relative h-72 md:size-full md:w-1/2 ">
        <Image
          src={imageUrl}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className={`rounded-t-lg  md:rounded-lg ${classNameImg}`}
        />
      </figure>
      <figcaption className="flex flex-col items-center pt-6 md:w-1/2 md:px-3 lg:px-10">
        <h2 className="mb-4 text-2xl text-center font-bold text-white md:text-4xl">
          {title}
        </h2>
        <p className=" text-center text-base tracking-wide text-white md:text-center">
          {description}
        </p>
      </figcaption>
    </section>
  );
}
