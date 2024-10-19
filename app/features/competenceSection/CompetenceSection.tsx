import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";
import CompetenceCard from "@/app/components/molecules/competenceCard/CompetenceCard";
import React from "react";
import { FaReact } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
];

export default function CompetenceSection() {
  return (
    <section
      id="competences"
      className="relative flex scroll-mt-[100px] flex-col gap-20 bg-black py-20"
    >
      <DuplicatedText
        text="Compétences"
        className="text-center text-[45px] font-bold text-white"
        duplicatedClassName=" font-bold text-white opacity-10"
      />
      <section className="flex flex-col items-center justify-center gap-10 px-4">
        {competenceIcon.map((icon) => (
          <CompetenceCard key={icon.id} text={icon.text} icon={icon.icon} />
        ))}
      </section>
    </section>
  );
}
