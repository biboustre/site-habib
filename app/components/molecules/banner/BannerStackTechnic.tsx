import React from "react";
import BtnRounded from "../../atoms/button/BtnRounded";

export default function BannerStackTechnic() {
  const textBtn = [
    { id: 1, text: "Projets", href: "#projets" },
    { id: 2, text: "Compétences", href: "#competences" },
  ];

  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-20  text-white lg:items-start lg:gap-14  lg:px-[15%] 2xl:gap-28">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 size-full object-cover"
      >
        <source src="/video/video7.mp4" type="video/mp4" />
      </video>
      <section className="space-y-10 2xl:space-y-14">
        <h1 className="text-center text-5xl font-bold md:text-start md:text-[66px] 2xl:text-8xl">
          Je suis{" "}
          <span className="animate-text-gradient">
            Habib <br /> de Web&apos;
          </span>{" "}
          <span className="text-white">ibou</span>
        </h1>
        <p className="text-center text-3xl font-semibold tracking-wide lg:text-start 2xl:text-5xl">
          Développeur <span className="animate-text-gradient">front-end</span>{" "}
          <br />
          React, <span className="animate-text-gradient">NextJS</span> &
          Typescript
        </p>
      </section>

      <section className="space-x-4">
        {textBtn.map((btn, index) => (
          <BtnRounded
            key={btn.id}
            text={btn.text}
            href={btn.href}
            className={
              index === 0
                ? "animate-bg-gradient"
                : "btn-gradient border text-white"
            }
          />
        ))}
      </section>
    </section>
  );
}
