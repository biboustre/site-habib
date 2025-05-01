// import Image from "next/image";
import React from "react";
import { BannerMainProps } from "../../../types";
import BtnRounded from "../../atoms/button/BtnRounded";

export default function BannerMain({
  title,
  text,
}: // src,
// alt,
// width = 500,
// height = 300,
BannerMainProps) {
  return (
    <section
      id="top"
      className="relative flex h-[calc(100vh-90px)] flex-col justify-center bg-black md:pl-[15%]"
    >
      <section className={``}>
        <h1 className="mb-5   text-center text-6xl font-bold text-white md:text-start md:text-7xl lg:text-8xl 2xl:text-[150px]">
          {title}
        </h1>
        {text && (
          <h2 className="mb-16 text-center text-3xl font-semibold tracking-wider text-white md:text-start md:text-4xl lg:text-5xl 2xl:text-7xl">
            {text}
          </h2>
        )}
        <section className="flex justify-center md:justify-start">
          <BtnRounded
            href="#contact"
            className=" mt-10 py-6 text-center opacity-80 bg-slate-800 btn-gradient"
            text="Contactez-nous"
          />
        </section>
      </section>
      {/* <section className="h-screen ">
        <Image
          className="h-[calc(100vh-6rem)] w-full object-cover"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </section> */}
    </section>
  );
}
