import React from "react";
import Image from "next/image";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import DuplicatedText from "../../../atoms/duplicatedText/DuplicatedText";
import CardStats from "../../cards/cardStats/CardStats";
import BtnRounded from "../../../atoms/button/BtnRounded";

const RecruteurSection: React.FC = () => {
  return (
    <section className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black text-white sm:gap-40">
      <DuplicatedText
        className="mt-10 pt-3  text-[35px] text-white  sm:text-[65px]"
        text="Vous êtes recruteur ?"
      />
      {/*  <Image> avec layout="fill" nécessite que son parent soit en relative et dimensions explicites. */}
      <section className="relative h-3/5 w-full">
        <Image
          src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
          alt="photo de profil"
          layout="fill"
          objectFit="cover"
        />

        <section className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 space-y-8 text-center">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Je suis <span className="colorPrimaryStack">Disponible</span> en
            freelance/CDI
          </h2>
          <p className="mx-auto max-w-md font-semibold md:text-lg">
          Que ce soit en CDI ou en freelance, je serais ravi de collaborer avec une entreprise pour apporter mes compétences en développement web. Passionné et engagé, je suis prêt à relever de nouveaux défis et à contribuer activement à vos projets.
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

        <section className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center  ">
          {cardRecruteur.map((card, id) => (
            <CardStats key={id} value={card.value} label={card.label} />
          ))}
        </section>
      </section>
    </section>
  );
};

export default RecruteurSection;
