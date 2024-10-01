import Image from "next/image";
import React from "react";
import BtnMain from "../../atoms/btnMain/BtnMain";

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
    <section className="flex flex-col-reverse bg-orange-50 md:flex-row md:h-[720px]">
      {/* Section contenant les h1 et h2 */}
      <section className="flex flex-col items-center justify-center  md:w-1/2 md:items-start md:justify-end md:pl-20 md:pb-10">
        <h1 className={`pt-10 mb-5 text-5xl md:text-7xl lg:text-8xl text-gray-800 font-bold text-center md:text-start ${classNameTitle}`}>{title}</h1>
        {text && (
          <h2
            className={`text-2xl mb-16 md:text-4xl lg:text-5xl text-gray-800 font-semibold tracking-wider text-center md:text-start ${classNameText}`}
            dangerouslySetInnerHTML={{ __html: text }}
          />
        )}
        <BtnMain
          href="#contactFooter"
          classNameBtn="mb-14"
          label="Contactez-nous"
        />
      </section>

      {/* Section contenant l'image */}
      <section className="md:w-1/2 ">
        <Image
          className={`h-full w-full ${classNameImage}`}
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
