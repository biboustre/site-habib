import React from "react";
import Image from "next/image";
import { cardRecruteur } from "../../../data/cardRecruteurData";
import DuplicatedText from "../../atoms/duplicateText/DuplicateText";
import CardStats from "../cards/cardStats/CardStats";
import BtnRounded from "../../atoms/button/BtnRounded";

const RecruteurSection: React.FC = () => {
  return (
    <section className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black text-white md:gap-40">
      <DuplicatedText className="mt-10" text="Vous êtes recruteur ?" />
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
              href="/StackTechnic"
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
};

export default RecruteurSection;
