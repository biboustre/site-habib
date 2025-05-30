"use client";

import React from "react";
import CvCard from "@/app/components/molecules/cards/cvCard/CvCard"; // Chemin vers ton composant
import { cvData } from "@/app/data/cvData"; // Chemin vers ton fichier de données
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

export default function CvSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };
  return (
    <AnimatedSection>
      <motion.section
        id="cv"
        className="flex scroll-mt-[100px] flex-col items-center bg-black bg-gradient-to-b from-black via-neutral-800 to-black  pb-16"
        variants={itemVariants}
      >
        <section className="flex justify-center">
          <TitleAnimeGradient
            classNameH1="lg:text-6xl text-5xl font-extrabold btn-gradient hover-text-white"
            title="Mon CV"
          />
        </section>
        <p className="mt-4 max-w-3xl px-2 text-center text-gray-400">
          Découvrez mon parcours et mon expérience en développement web et
          mobile. Diplômé d&apos;un Bac+2, j&apos;ai travaillé sur divers
          projets en tant que développeur front-end, avec un focus sur la
          création d&apos;interfaces modernes et fonctionnelles.
        </p>

        <motion.section
          className="md:grid-auto-row mx-auto mt-12 grid max-w-5xl  grid-cols-1 gap-8 px-4 md:grid-cols-2 md:justify-items-center"
          variants={itemVariants}
        >
          {cvData.map((item) => (
            <CvCard
              key={item.id}
              year={item.year}
              title={item.title}
              institution={item.institution}
              description={item.description}
            />
          ))}
        </motion.section>
      </motion.section>
    </AnimatedSection>
  );
}
