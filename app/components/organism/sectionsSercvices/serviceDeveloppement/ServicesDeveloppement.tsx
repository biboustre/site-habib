import React from "react";
import ChildServiceDeveloppement from "./ChildServiceDeveloppement";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

const servicesDev = [
  {
    number: 1,
    title: "Analyse",
    text: "Nous analysons vos besoins pour créer des solutions adaptées.",
  },
  {
    number: 2,
    title: "Conception",
    text: "Nous concevons des interfaces modernes et intuitives.",
  },
  {
    number: 3,
    title: "Développement",
    text: "Nous développons des applications performantes et sécurisées.",
  },
  {
    number: 4,
    title: "Tests",
    text: "Nous effectuons des tests rigoureux pour garantir la qualité.",
  },
  {
    number: 5,
    title: "Déploiement",
    text: "Nous déployons vos projets avec un suivi personnalisé.",
  },
  {
    number: 6,
    title: "Maintenance",
    text: "Nous assurons la maintenance et l'évolution de vos projets.",
  },
];

function ServicesDeveloppement() {
  return (
    <section className="animate-gravel  parallaxe relative flex h-auto flex-col items-center justify-center gap-32 py-20 text-white sm:px-0 lg:px-10">
      <TitleAnimeGradient title="Développement sur Mesure : Sites Web, Applications Web et Mobiles" classNameH1="lg:text-6xl max-w-[1400px] text-4xl font-extrabold mx-auto max-w-[1000px] tracking-wide" />

      <ChildServiceDeveloppement
        services={servicesDev.slice(0, 3)} // Mapper les services de l'index 0 à 2
        imageSrc="/images/pexel5.webp"
        imageAlt="Développement"
      />

      <ChildServiceDeveloppement
        className="md:flex-row-reverse"
        services={servicesDev.slice(3)} // Mapper les services de l'index 3 à la fin
        justifyLogic={(index) =>
          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
        } // Logique inversée
        imageSrc="/images/photo_ordinateur_1.webp"
        imageAlt="Maintenance"
      />
    </section>
  );
}

export default ServicesDeveloppement;
