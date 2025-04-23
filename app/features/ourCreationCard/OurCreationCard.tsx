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
      {/* <section
        className={`flex h-auto w-full flex-col items-center gap-10 rounded-lg px-1 lg:flex-row lg:items-center 2xl:h-[550px] ${
          isReversed ? "lg:flex-row-reverse" : ""
        }  ${className}`}
      >
        <figure className=" flex-1 ">
          <Image
            src={imageUrl}
            alt={imageAlt}
            width={600}
            height={600}
            className={`size-full rounded-t-lg object-cover md:rounded-lg ${classNameImg}`}
            quality={100}
            loading="lazy"
          />
        </figure>
        <figcaption className="flex flex-1 flex-col items-center gap-5 pt-6  lg:pt-0">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:text-4xl">
            {title}
          </h2>
          <p className="px-3 text-center text-base tracking-wide text-white md:text-center md:text-lg  lg:px-0 lg:text-justify lg:text-[16px] xl:px-5">
            {description}
          </p>
        </figcaption>
      </section>
      <hr className="m-auto w-4/5" /> */}
    </>
  );
}
