import Image from "next/image";
import React from "react";

interface BannerMainProps {
  title?: string;
  text?: string;
  src: string;
  alt: string;
  classNameImage?: string;
  classNameTitle?: string;
  classNameText?: string;
  width?: number;
  height?: number;
}

export default function BannerMain({
  title,
  text,
  src,
  alt,
  classNameTitle,
  classNameText,
  classNameImage,
  width = 500,
  height = 300,
}: BannerMainProps) {
  return (
    <section className="flex flex-col-reverse md:flex-row">
      <section className="md:w-1/2 space-y-20">
        <h1 className={`p-10 ${classNameTitle}`}>{title}</h1>
        {text && <h2 className={`${classNameText}`} dangerouslySetInnerHTML={{ __html: text }} />}
      </section>
      <section className="md:w-1/2">
        <Image
          className={classNameImage}
          src={src}
          alt={alt}
          width={width}
          height={height}
          layout="responsive"
          objectFit="cover"
        />
      </section>
    </section>
  );
}
