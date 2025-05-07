import React from "react";
import { CardsServiceGraphique } from "./CardsServiceGraphique";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";
import { CardsServicesGraphique, sliderServiceGraphique } from "@/app/data/service-graphique-data";



function SectionServicesGraphique() {
  return (
    <section id="graphique" className="bg-gradient-black flex h-auto flex-col items-center justify-center gap-14 px-2 py-28 text-white sm:px-3 md:px-0 lg:flex-row lg:items-stretch">
      {/* Conteneur gauche (Texte + Cartes) */}
      <section className="flex flex-col gap-16 lg:w-2/3">
        <TitleAnimeGradient
          title="Nous proposons une gamme de services de design graphique. Que ce
            soit pour la création de flyers, logos, ou de cartes visite/restaurant."
          classNameH1="lg:text-3xl xl:text-4xl font-extrabold md:text-start text-3xl 2xl:text-5xl 2xl:max-w-[1300px] btn-gradient hover-text-white"
        />

        {/* Cartes de services */}
        <section className="flex w-full flex-wrap justify-center gap-14 md:flex-nowrap md:justify-normal md:gap-5 xl:gap-14 ">
          {CardsServicesGraphique.map((service, index) => (
            <CardsServiceGraphique key={index} service={service} />
          ))}
        </section>
      </section>

      {/* Image à droite */}
      <section className="h-[400px] w-full cursor-pointer rounded-lg shadow-lg shadow-slate-700 lg:h-auto  lg:w-1/4">
        <CarouselEmbla
          items={sliderServiceGraphique}
          loop={true}
          autoplayDelay={2500}
          classContentFigure=""
        />
      </section>
    </section>
  );
}

export default SectionServicesGraphique;
