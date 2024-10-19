import React from "react";
import BtnRounded from "../../atoms/button/BtnRounded";

export default function BannerStackTechnic() {
  const textBtn = [
    { id: 1, text: "Projets", href: "#projets" },
    { id: 2, text: "Compétences", href: "#competences" },
  ];

  return (
    <section className="flex h-[calc(100vh-6rem)] flex-col items-center justify-center gap-20 bg-black text-white">
      <section className="space-y-10">
        <h1 className="text-center text-5xl font-bold">
          Je suis{" "}
          <span className="text-amber-400">
            Habib <br /> Maamar
          </span>
        </h1>
        <p className="text-center text-3xl font-semibold tracking-wide">
          Développeur front-end React <br />
          Next <br />
          Typescript
        </p>
      </section>

      <section className="pt-30 space-x-4">
        {textBtn.map((btn) => (
          <BtnRounded key={btn.id} text={btn.text} href={btn.href} />
        ))}
      </section>
    </section>
  );
}
