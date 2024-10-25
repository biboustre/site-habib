import Image from "next/image";
import React from "react";
import BtnMain from "../../atoms/button/BtnMain";
import { BannerMainProps } from "../../../types";

export default function BannerMain({
  title,
  text,
  src,
  alt,
  width = 500,
  height = 300,
}: BannerMainProps) {
  return (
    <section id="top" className="relative bg-slate-50 ">
      <section
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-96 2xl:left-[700px]`}
      >
        <h1 className="mb-5 pt-10  text-center text-6xl font-bold text-white md:text-start md:text-7xl lg:text-8xl 2xl:text-[150px]">
          {title}
        </h1>
        {text && (
          <h2
            className="mb-16 text-center text-3xl font-semibold tracking-wider text-white md:text-start md:text-4xl lg:text-5xl 2xl:text-7xl"
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <BtnMain
          href="#contact"
          classNameBtn="mt-10 bgPrimary"
          label="Contactez-nous"
        />
      </section>
      <section>
        <Image
          className="h-[calc(100vh-6rem)] w-full"
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
