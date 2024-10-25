import React from "react";
import Image from "next/image";
import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";
import BtnRounded from "@/app/components/atoms/button/BtnRounded";
import CardStats from "@/app/components/molecules/cards/cardStats/CardStats";
import { cardRecruteur } from "@/app/data/cardRecruteurData";

export default function AboutSection() {
  return (
    // <section id="a-propos" className="relative h-screen scroll-mt-[100px]">
    //   <h1 className="absolute z-10 w-full pt-10 text-center text-3xl font-bold tracking-wider text-white md:text-5xl">
    //     Nous créons et améliorons les <br /> produits Web et mobiles
    //   </h1>
    //   <Image
    //     className="z-0 size-full"
    //     src="/images/photo_ordinateur_1.webp"
    //     alt="hero"
    //     height={500}
    //     width={500}
    //     objectFit="cover"
    //   />
    // </section>
    <section className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black py-10 text-white md:gap-40">
      <DuplicatedText
        className="mt-10 md:text-5xl"
        duplicatedClassName="-top-6"
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

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 space-y-8 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Je suis <span className="colorPrimaryStack">Disponible</span> en
            freelance/CDI
          </h2>
          <p className="mx-auto max-w-md font-semibold md:text-lg">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia.
          </p>
          <section className="space-x-10">
            <BtnRounded
              className="bgPrimaryStack"
              text="Contactez-moi"
              href="#contact"
            />
            <BtnRounded
              className="bgPrimaryStack"
              text="Portolio"
              href="/stackTechnic"
            />
          </section>
        </div>

        <div className="absolute top-[-70px] mb-16 hidden w-full gap-8 md:flex md:justify-center  ">
          {cardRecruteur.map((card, id) => (
            <CardStats key={id} value={card.value} label={card.label} />
          ))}
        </div>
      </section>
    </section>
  );
}
