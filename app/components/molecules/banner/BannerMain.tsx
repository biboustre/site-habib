import Image from "next/image";
import React from "react";
import BtnMain from "../../atoms/btnMain/BtnMain";
import { BannerMainProps } from "../../../types";


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
    <section className="relative bg-slate-50">
      {/* Section contenant les h1 et h2 */}
      <section className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:left-96">
        <h1 className={`pt-10 mb-5 text-5xl md:text-7xl lg:text-8xl text-white font-bold text-center md:text-start ${classNameTitle}`}>{title}</h1>
        {text && (
          <h2
            className={`text-2xl mb-16 md:text-4xl lg:text-5xl text-white font-semibold tracking-wider text-center md:text-start ${classNameText}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <BtnMain
          href="#contact"
          classNameBtn=" mb-14 "
          label="Contactez-nous"
        />
      </section>

      {/* Section contenant l'image */}
      <section className="">
        <Image
          className={`w-full h-[calc(100vh-6rem)] ${classNameImage}`}
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
