import React from "react";
import ChildServiceDeveloppement from "./ChildServiceDeveloppement";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

const cardsServices = [
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

const servicesDeveloppement2 = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Création de sites web modernes, performants et optimisés pour tous les appareils. Nous utilisons les dernières technologies pour garantir une expérience utilisateur exceptionnelle.",
    imageSrc: "/images/ordi-violet.jpg",
    alt: "Développement Web",
  },
  {
    id: 2,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et hybrides, conçues pour offrir des performances optimales et une expérience utilisateur fluide sur iOS et Android.",
    imageSrc: "/images/pexel5.webp",
    alt: "Développement Mobile",
  },
  {
    id: 3,
    title: "SEO & Performance",
    description:
      "Optimisation de votre site pour les moteurs de recherche et amélioration des performances pour un chargement rapide et une meilleure visibilité.",
    imageSrc: "/images/seo2.jpg",
    alt: "SEO & Performance",
  },
];

const servicesDeveloppement = [
  {
    id: 4,
    title: "Accessibilité",
    description:
      "Conception de sites accessibles à tous, respectant les normes WCAG pour garantir une expérience inclusive.",
    imageSrc: "/images/2-pc.jpg",
    alt: "Accessibilité",
  },
  {
    id: 5,
    title: "Bonnes Pratiques",
    description:
      "Code propre, maintenable et respectant les standards de l'industrie pour garantir la qualité et la pérennité de vos projets.",
    imageSrc: "/images/ligne-de-code-2.jpg",
    alt: "Bonnes Pratiques",
  },
  {
    id: 6,
    title: "Design UI/UX",
    description:
      "Création d'interfaces utilisateur intuitives et esthétiques, centrées sur l'utilisateur pour une navigation fluide et agréable.",
    imageSrc: "/images/pc-large.jpg",
    alt: "Design UI/UX",
  },
];

function ServicesDeveloppement() {
  return (
    <section className="animate-gravel  parallaxe relative flex h-auto flex-col items-center justify-center gap-32 py-20 text-white sm:px-0 lg:px-10">
      <TitleAnimeGradient
        title="Développement sur Mesure : Sites Web, Applications Web et Mobiles"
        classNameH1="lg:text-6xl max-w-[1400px] text-4xl font-extrabold mx-auto max-w-[1000px] tracking-wide"
      />
      <ChildServiceDeveloppement
        services={cardsServices.slice(0, 3)} // Mapper les services de l'index 0 à 2
        imageSrc="/images/pexel5.webp"
        imageAlt="Développement"
        carouselItems={servicesDeveloppement2} // Passer le tableau dynamique pour le carousel
      />

      <ChildServiceDeveloppement
        className="lg:flex-row-reverse"
        services={cardsServices.slice(3)} // Mapper les services de l'index 3 à la fin
        justifyLogic={(index) =>
          index % 2 === 0 ? "md:justify-end" : "md:justify-start"
        } // Logique inversée
        imageSrc="/images/photo_ordinateur_1.webp"
        imageAlt="Maintenance"
        carouselItems={servicesDeveloppement} // Passer le tableau dynamique pour le carousel
      />
    </section>
  );
}

export default ServicesDeveloppement;
