// import Image from "next/image";
import React from "react";
// import { BannerMainProps } from "../../../types";
import BtnRounded from "../../atoms/button/BtnRounded";

export interface BannerMainProps {
  title?: React.ReactNode;
  text?: React.ReactNode;
  src: string;
  alt: string;
  classNameImage?: string;
  classNameTitle?: string;
  classNameBanner?: string;
  classNameInfo?: string;
  classNameParentImage?: string;
  width?: number;
  height?: number;
  videoSrc?: string;
}

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
      className="relative flex h-screen flex-col justify-center md:pl-[15%]"
    >
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute inset-0 -z-10 size-full object-cover"
        src="/video/video11.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>
      {/* Effet lumineux */}
      <div className="moving-light">
        <div className="sparkle-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <section className={``}>
        <h1 className="mb-5 text-center text-6xl font-bold text-white md:text-start md:text-7xl lg:text-8xl 2xl:text-[150px]">
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
            className=" btn-gradient mt-10 animate-pulse bg-zinc-700 py-6 text-center"
            text="Contactez-nous"
          />
        </section>
      </section>
    </section>
  );
}
