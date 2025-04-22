"use client";

import React from "react";
import Image from "next/image";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import DuplicatedText from "../../../atoms/duplicatedText/DuplicatedText";
import CardStats from "../../cards/cardStats/CardStats";
import BtnRounded from "../../../atoms/button/BtnRounded";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";

const RecruteurSection: React.FC = () => {
  

  // en faire un composant reutilisable !!!!!!!!!
  return (
    <AnimatedSection className="min-h-auto space-y-36">
      <section>
        <DuplicatedText
          className="mt-10 pt-10 text-[35px] text-white sm:text-[65px]"
          duplicatedClassName="pt-10"
          text="Vous êtes recruteur ?"
        />
      </section>
      <section
        className="relative h-[550px]  w-full"
      >
        <Image
          src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
          alt="photo de profil"
          fill
          className="object-cover"
          quality={100}
          loading="lazy"
        />

        <section
          className="absolute inset-0 z-10 flex w-full flex-col justify-center gap-10 text-center"
        >
          <section className="space-y-10 pt-10 text-white">
            <h2 className="mx-auto max-w-[900px] text-2xl font-extrabold tracking-wide md:text-4xl">
              Vous avez un{" "}
              <span className="colorPrimaryStack ">PROJET AMBITIEUX ?</span>{" "}
              Nous sommes prêts à vous accompagner dans votre transformation
              digitale
            </h2>
            <p className="mx-auto max-w-md rounded-lg bg-slate-700/55 p-4 font-semibold md:text-lg">
              Notre mission est de vous aider à développer des outils
              performants, parfaitement adaptés à vos besoins, et de vous
              accompagner vers la réussite de vos projets web et mobile.
            </p>
          </section>

          <section className="flex justify-center md:space-x-10">
            <BtnRounded
              className="bgPrimaryStack text-sm"
              text="Contactez-moi"
              href="#contact"
            />
            <BtnRounded
              className="bgPrimaryStack text-sm"
              text="Portolio"
              href="/stackTechnic"
            />
          </section>
        </section>

        <section
          className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center"
        >
          {cardRecruteur.map((card, id) => (
            <CardStats key={id} value={card.value} label={card.label} />
          ))}
        </section>
      </section>
    </AnimatedSection>
  );
};

export default RecruteurSection;
