'use client';

import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import CompetenceCard from "@/app/components/molecules/cards/competenceCard/CompetenceCard";
import React from "react";
import { FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiWordpress,
} from "react-icons/si";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

const competenceIcon = [
  {
    id: 1,
    text: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    text: "Typescript",
    icon: <SiTypescript />,
  },
  {
    id: 3,
    text: "Next",
    icon: <SiNextdotjs />,
  },
  {
    id: 4,
    text: "Tailwind",
    icon: <SiTailwindcss />,
  },
  {
    id: 5,
    text: "Redux ToolKit",
    icon: <SiRedux />,
  },
  {
    id: 6,
    text: "Wordpress",
    icon: <SiWordpress />,
  },
];

export default function CompetenceSection() {

  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
  };

  return (
    <AnimatedSection>
    <motion.section
      id="competences"
      className="relative flex scroll-mt-[100px] flex-col gap-10 bg-black pb-36 md:px-20"
      variants={itemVariants}
    >
      <DuplicatedText
        text="Compétences"
        className=" "
        duplicatedClassName="text-white"
      />
      <h2 className="mb-5 text-center text-xl tracking-wide text-white">
        Voici mes compétences principales
      </h2>
      <motion.section className="flex flex-col items-center justify-center gap-10 px-4 md:grid md:grid-cols-2 lg:grid-cols-3"
      variants={itemVariants}>
        {competenceIcon.map((icon) => (
          <CompetenceCard key={icon.id} text={icon.text} icon={icon.icon} />
        ))}
      </motion.section>
    </motion.section>
    </AnimatedSection>
  );
}
