"use client";

import React from "react";
import OurCreationCard from "../../../../features/ourCreationCard/OurCreationCard";
import { cardNosCreation } from "@/app/data/cardCreationData";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

export default function NosCreationSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };
  return (
    <AnimatedSection>
      <motion.section
        id="creations"
        className="bgFooter relative flex scroll-mt-[100px] flex-col gap-32 pb-40 pt-20 lg:px-16 2xl:px-[350px]"
        variants={itemVariants}
      >
        <DuplicatedText
          className="pt-3  text-[35px] text-white  sm:text-[65px]"
          text="Nos créations"
        />
        <motion.section variants={itemVariants} className="flex flex-col gap-24 md:gap-40">
          {cardNosCreation.map((card, index) => (
            <motion.section
            key={card.id} 
            className="flex flex-col gap-24 md:gap-40"
            variants={itemVariants}
          >
            <OurCreationCard
              title={card.title}
              imageUrl={card.imageSrc}
              imageAlt={card.title}
              description={card.description}
              isReversed={index % 2 === 1}
            />
          </motion.section>))}
        </motion.section>
          
      </motion.section>
    </AnimatedSection>
  );
}
