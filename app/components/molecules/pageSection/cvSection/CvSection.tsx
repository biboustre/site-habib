'use client';

import React from "react";
import CvCard from "@/app/components/molecules/cards/cvCard/CvCard"; // Chemin vers ton composant
import { cvData } from "@/app/data/cvData"; // Chemin vers ton fichier de données
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

export default function CvSection() {

  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
  };
  return (
    <AnimatedSection>
    <motion.section
      id="cv"
      className="flex scroll-mt-[100px] flex-col items-center bg-black py-16"
      variants={itemVariants}
    >
      <DuplicatedText
        text="CV"
        className="text-center  text-white"
        duplicatedClassName=" font-bold text-white opacity-10"
      />
      <p className="mt-4 max-w-xl text-center text-gray-400">
        Découvrez mon parcours et mon expérience en développement web et mobile.
        Diplômé d&apos;un Bac+2, j&apos;ai travaillé sur divers projets en tant
        que développeur front-end, avec un focus sur la création
        d&apos;interfaces modernes et fonctionnelles.
      </p>

      <motion.section className="mt-12 grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2"
      variants={itemVariants}>
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
