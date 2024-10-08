import Image from "next/image";
import React from "react";
import BtnMain from "../../atoms/button/BtnMain";
import { BannerMainProps } from "../../../types";

export default function BannerMain({
  title,
  text,
  src,
  alt,
  classNameTitle,
  classNameText,
  classNameImage,
  classNameBanner,
  classNameInfo,
  classNameParentImage,
  width = 500,
  height = 300,
}: BannerMainProps) {
  return (
    <section id="top" className={` ${classNameBanner}`}>
      <section className={` ${classNameInfo}`}>
        <h1 className={` ${classNameTitle}`}>{title}</h1>
        {text && (
          <h2
            className={`mb-16  text-center text-3xl font-semibold tracking-wider text-white md:text-start md:text-4xl lg:text-5xl ${classNameText}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <BtnMain
          href="#contact"
          classNameBtn="mt-10 bgPrimary"
          label="Contactez-nous"
        />
      </section>
      <section className={`${classNameParentImage}`}>
        <Image
          className={`h-[calc(100vh-6rem)] w-full ${classNameImage}`}
          src={src}
          alt={alt}
          width={width}
          height={height}
          objectFit="cover"
        />
      </section>
    </section>
  );
}
