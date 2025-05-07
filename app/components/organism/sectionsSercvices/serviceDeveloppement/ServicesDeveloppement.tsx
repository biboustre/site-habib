import React from "react";
import ChildServiceDeveloppement from "./ChildServiceDeveloppement";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
import {
  cardsServices,
  servicesDeveloppement,
  servicesDeveloppement2,
} from "@/app/data/service-development-data";
import { motion } from "framer-motion";

function ServicesDeveloppement() {
  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 150 }, // Position initiale (invisible et décalée vers le bas)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Durée de l'animation
        ease: "easeOut", // Courbe d'animation
      },
    },
  };

  return (
    <motion.section
    id="developpement"
      className="animate-gravel parallaxe relative flex h-auto flex-col items-center justify-center gap-32 py-20 text-white sm:px-0 lg:px-10"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // L'animation se déclenche lorsque l'élément est visible
    >
      {/* Titre animé */}
      <TitleAnimeGradient
        title="Développement sur Mesure : Sites Web, Applications Web et Mobiles"
        classNameH1="lg:text-6xl max-w-[1400px] text-4xl font-extrabold mx-auto max-w-[1000px] tracking-wide"
      />

      {/* Premier bloc de services */}
      <ChildServiceDeveloppement
        services={cardsServices.slice(0, 3)} // Mapper les services de l'index 0 à 2
        imageSrc="/images/pexel5.webp"
        imageAlt="Développement"
        carouselItems={servicesDeveloppement2} // Passer le tableau dynamique pour le carousel
      />

      {/* Deuxième bloc de services */}
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
    </motion.section>
  );
}

export default ServicesDeveloppement;
