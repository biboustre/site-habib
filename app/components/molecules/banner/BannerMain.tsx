import React from "react";
import { BannerMainProps } from "../../../types";
import BtnRounded from "../../atoms/button/BtnRounded";
// import Image from "next/image";

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
      className="parallaxe relative flex h-screen flex-col justify-center overflow-hidden md:pl-[10%]"
      style={{
        backgroundImage: "url('/images/pc-large.jpg')",
      }}
    >
      {/* Vidéo en arrière-plan */}
      {/* <video
        className="absolute inset-0 -z-10 size-full object-cover will-change-transform"
        src="/video/video17.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
      </video> */}
      {/* <figure>
        <Image
          src="/images/pc-large.jpg"
          alt="Image de fond"
          fill
          className=" object-cover"
          priority
          quality={80}
        />
      </figure> */}

      <section className="z-10">
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
        <section className={`lg:mt-20`}>
          <h1 className="mb-5 text-center text-6xl font-extrabold text-white md:text-start md:text-7xl lg:text-7xl 2xl:text-9xl">
            {title}
          </h1>
          {text && (
            <h2 className="mb-10 text-center text-3xl font-extrabold tracking-wider text-white md:text-start md:text-4xl lg:text-5xl 2xl:text-7xl">
              {text}
            </h2>
          )}
          <section className="flex justify-center md:justify-start">
            <BtnRounded
              href="#contact"
              className="btn-gradient  hover-text-white mt-10 bg-slate-700/80 py-6 text-center text-black shadow-2xl shadow-slate-900 duration-300 hover:scale-95 hover:shadow-none"
              text="Contactez-nous"
            />
          </section>
        </section>
      </section>
    </section>
  );
}
