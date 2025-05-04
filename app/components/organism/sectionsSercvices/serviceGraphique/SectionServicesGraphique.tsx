import React from "react";
import { CardsServiceGraphique } from "./CardsServiceGraphique";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";

const CardsServicesGraphique = [
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
    title: "Carte de Visite/Restaurant",
    description:
      "Nous créons des designs attractifs pour vos cartes de restaurant et snack.",
  },
];

const sliderServiceGraphique = [
  {
    id: 1,
    title: "Flyer",
    // description:
    //   "Capturez vos moments précieux avec des clichés de haute qualité. Nous réalisons des séances photo pour événements, portraits, produits et bien plus.",
    imageSrc: "/images/pexel1.webp",
    alt: "flyer",
  },
  {
    id: 2,
    title: "Logo",
    // description:
    //   "Réalisez des vidéos captivantes pour vos projets personnels ou professionnels. Nous mettons en valeur vos idées avec des prises de vue dynamiques.",
    imageSrc: "/images/pexel2.webp",
    alt: "logo",
  },
  {
    id: 3,
    title: "Carte de restaurant",
    // description:
    //   "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
    imageSrc: "/images/pexel3.webp",
    alt: "carte de restaurant",
  },
  {
    id: 4,
    title: "Carte de visite",
    // description:
    //   "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
    imageSrc: "/images/pexel3.webp",
    alt: "carte de visite",
  },
];

function SectionServicesGraphique() {
  return (
    <section className="flex h-auto flex-col items-center justify-center gap-14 bg-neutral-950 px-2 py-28 text-white sm:px-3 md:px-0 lg:flex-row lg:items-stretch">
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
      <section className="h-[400px] w-full cursor-pointer rounded-lg shadow-lg shadow-slate-700 lg:h-auto  lg:w-1/5">
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
