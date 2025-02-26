import React from "react";
import ServiceCard from "../../cards/serviceCard/ServiceCard";
import { cardService } from "@/app/data/cardServiceData";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

export default function ServiceSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };
  return (
    // j'ai mis en h-screen mais faut redisposter les elements
    <AnimatedSection>
      <motion.section
        id="services"
        className="flex  scroll-mt-[100px] flex-col gap-32 bg-black pb-32 pt-20 2xl:h-screen 2xl:gap-44"
        variants={itemVariants}
      >
        <DuplicatedText
          text="Ce que nous proposons"
          className="pt-3  text-[35px] text-white  sm:text-[65px]"
        />
        <motion.section
          className="flex flex-col gap-20  px-5 pb-20 text-justify text-lg font-semibold text-white lg:flex-row lg:gap-5  xl:px-20 "
          variants={itemVariants}
        >
          {cardService.map((description) => (
            <ServiceCard
              key={description.id}
              text={description.text}
              icon={description.icon}
              title={description.title}
            />
          ))}
        </motion.section>
      </motion.section>
    </AnimatedSection>
  );
}
