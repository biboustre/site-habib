import React from "react";
import Image from "next/image";
import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";
import BtnRounded from "@/app/components/atoms/button/BtnRounded";
import CardStats from "@/app/components/molecules/cards/cardStats/CardStats";
import { cardRecruteur } from "@/app/data/cardRecruteurData";

export default function AboutSection() {
  return (
    <section id="a-propos" className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black py-0 text-white sm:gap-40">
      <DuplicatedText
        className="mt-10 pt-10 text-[35px]  md:text-[45px]"
        duplicatedClassName="-top-4 pt-10"
        text="Nous créons et améliorons les <br /> produits Web et mobiles"
      />
      {/*  <Image> avec layout="fill" nécessite que son parent soit en relative et dimensions explicites. */}
      <section className="relative h-3/5 w-full">
        <Image
          src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
          alt="photo de profil"
          layout="fill"
          objectFit="cover"
        />

        <section className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 space-y-8 text-center sm:mt-5">
          <h2 className="text-2xl font-extrabold md:text-4xl">
            Vous avez un{" "}
            <span className="colorPrimaryStack ">PROJET AMBITIEUX ?</span> Je
            suis prêt à vous accompagner dans votre transformation digitale
          </h2>
          <p className="mx-auto max-w-md text-[17px] font-bold md:text-lg">
            Ma mission est de vous aider à développer des outils performants,
            adaptés à vos besoins, et à garantir la réussite de vos projets dans
            le domaine du web et du mobile.
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
