import React from "react";
import ServiceCard from "../../cards/cardsNousProposons/CardsNousProposons";
import { cardService } from "@/app/data/cardServiceData";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";
import Carousel from "@/app/features/carrousel/Carrousel";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

export default function NousProposons() {
  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 150 }, // Position initiale (invisible et décalée vers le bas)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Durée de l'animation
        ease: "easeOut", // Courbe d'animation
        staggerChildren: 0.2, // Décalage entre les enfants
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 }, // Position initiale des enfants
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const customSettings = {
    autoplaySpeed: 2500,
  };

  return (
    <AnimatedSection>
      <motion.section
        id="services"
        className="bg-gradient-black flex scroll-mt-[100px] flex-col gap-20 px-3 pb-32 pt-20 2xl:gap-44"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0 }} // L'animation se déclenche lorsque l'élément est visible
      >
        {/* Titre animé */}
        <motion.div variants={childVariants}>
          <TitleAnimeGradient
            classNameH1="lg:text-6xl text-5xl mx-auto font-extrabold"
            title="Ce que nous proposons"
          />
        </motion.div>

        {/* Carousel animé */}
        <motion.div variants={childVariants}>
          <Carousel
            settings={customSettings}
            classNameContainer="carousel-service"
          >
            {cardService.map((description) => (
              <ServiceCard
                key={description.id}
                text={description.text}
                icon={description.icon}
                title={description.title}
              />
            ))}
          </Carousel>
        </motion.div>
      </motion.section>

      {/* Style global pour le carousel */}
      <style jsx global>{`
        .carousel-service .slick-track {
          padding-bottom: 60px !important;
        }
      `}</style>
    </AnimatedSection>
  );
}
