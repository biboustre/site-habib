import React from "react";
import Image from "next/image";
import { CardsServiceGraphique } from "./CardsServiceGraphique";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

const services = [
  {
    title: "Flyer",
    description:
      "Nous proposons une gamme complète de services de design graphique pour répondre à vos besoins. Que ce soit pour la création de flyers, de logos, ou de cartes de restaurant.",
  },
  {
    title: "Logo",
    description:
      "Nous concevons des logos uniques et professionnels pour renforcer votre identité visuelle.",
  },
  {
    title: "Carte de restaurant",
    description:
      "Nous créons des designs attractifs pour vos cartes de restaurant et snack.",
  },
];

function SectionServicesGraphique() {
  return (
    <section className="flex h-auto flex-col items-center justify-center gap-14 bg-neutral-950 px-2 py-28 text-white sm:px-3 md:px-0 lg:flex-row lg:items-stretch">
      {/* Conteneur gauche (Texte + Cartes) */}
      <section className="flex flex-col gap-16 lg:w-2/3">
        <TitleAnimeGradient
          title="Nous proposons une gamme de services de design graphique. Que ce
            soit pour la création de flyers, logos, ou de cartes de restaurant."
          className="md:justify-start"
        />

        {/* Cartes de services */}
        <section className="flex w-full flex-wrap justify-center gap-14 md:flex-nowrap md:justify-normal md:gap-5 xl:gap-14 ">
          {services.map((service, index) => (
            <CardsServiceGraphique key={index} service={service} />
          ))}
        </section>
      </section>

      {/* Image à droite */}
      <figure className="h-auto w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-300 hover:scale-105 lg:w-1/5">
        <Image
          src="/images/photo_ordinateur_1.webp"
          alt="Graphique"
          width={350}
          height={500}
          quality={100}
          className="h-[400px] w-full object-cover md:h-full lg:w-full"
          loading="lazy"
        />
      </figure>
    </section>
  );
}

export default SectionServicesGraphique;
