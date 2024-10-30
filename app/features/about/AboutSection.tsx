import React from "react";
import Image from "next/image";
import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";
import BtnRounded from "@/app/components/atoms/button/BtnRounded";
import CardStats from "@/app/components/molecules/cards/cardStats/CardStats";
import { cardRecruteur } from "@/app/data/cardRecruteurData";

export default function AboutSection() {
  return (
    <section
      id="a-propos"
      className="flex h-auto scroll-mt-[100px] flex-col  gap-20 bg-black py-0 text-white sm:gap-40"
    >
      <DuplicatedText
        className="mt-10 pt-11 text-[35px]  sm:text-[44px] md:pt-[55px] md:text-[50px]  
        "
        duplicatedClassName="-top-4 pt-12 sm:text-[40px]"
        text="Nous créons et améliorons les <br /> produits Web et mobiles"
      />
      {/*  <Image> avec layout="fill" nécessite que son parent soit en relative et dimensions explicites. */}
      <section className="relative h-[500px] w-full">
        <Image
          src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
          alt="photo de profil"
          layout="fill"
          objectFit="cover"
        />

        <section className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 space-y-8 text-center sm:mt-5">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Vous avez un{" "}
            <span className="colorPrimaryStack ">PROJET AMBITIEUX ?</span> Nous
            sommes prêts à vous accompagner dans votre transformation digitale
          </h2>
          <p className="mx-auto max-w-md text-[17px] font-bold md:text-lg">
          Notre mission est de vous aider à développer des outils performants, parfaitement adaptés à vos besoins, et de vous accompagner vers la réussite de vos projets web et mobile.
          </p>
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

        <div className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center  ">
          {cardRecruteur.map((card, id) => (
            <CardStats key={id} value={card.value} label={card.label} />
          ))}
        </div>
      </section>
    </section>
  );
}
