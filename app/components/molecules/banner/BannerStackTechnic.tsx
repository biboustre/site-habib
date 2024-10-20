import React from "react";
import BtnRounded from "../../atoms/button/BtnRounded";


export default function BannerStackTechnic() {

  const textBtn = [
    { id: 1, text: "Projets", href: "#projets" },
    { id: 2, text: "Compétences", href: "#competences" },
  ];

  return (
    <section className="flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-20 bg-black text-white md:items-start md:justify-start md:gap-14 md:pt-32">
      <section className="space-y-10">
        <h1 className="text-center text-5xl font-bold md:text-start md:text-[66px]">
          Je suis{" "}
          <span className="colorPrimaryStack">
            Habib <br /> Maamar
          </span>
        </h1>
        <p className="text-center text-3xl font-semibold tracking-wide md:text-start">
          Développeur front-end <span className="my-2 block"></span>
          React, Next & Typescript
        </p>
      </section>

      <section className="space-x-4">
        {textBtn.map((btn, index) => (
          <BtnRounded
            key={btn.id}
            text={btn.text}
            href={btn.href}
            className={
              index === 0 ? "bgPrimaryStack" : "border bg-black text-white"
            }
          />
        ))}
      </section>
    </section>
  );
}
