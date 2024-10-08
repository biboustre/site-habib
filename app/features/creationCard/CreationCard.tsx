import React from "react";
import Image from "next/image";

interface CreationCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  className?: string;
  isReversed?: boolean;
}

export default function CreationCard({
  title,
  description,
  imageUrl,
  imageAlt,
  className,
  isReversed = false,
}: CreationCardProps) {
  return (
    <section className={`flex flex-col rounded-lg shadow-lg md:flex-row ${isReversed ? 'md:flex-row-reverse' : ''}  ${className}`}>
      <figure className="md:w-1/2 ">
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={500}
          height={500}
          className="size-full rounded-lg object-cover"
        />
      </figure>
      <figcaption className="flex flex-col justify-center p-6 md:w-1/2">
        <h2 className="mb-4 text-2xl font-bold">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </figcaption>
    </section>
  );
}
