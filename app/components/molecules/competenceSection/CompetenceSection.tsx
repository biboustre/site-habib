import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";
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
  return (
    <section
      id="competences"
      className="relative flex scroll-mt-[100px] flex-col gap-10 bg-black pb-36"
    >
      <DuplicatedText
        text="Compétences"
        className=" "
        duplicatedClassName="text-white"
      />
      <h2 className="mb-5 text-center text-xl tracking-wide text-white">
        Voici mes compétences principales
      </h2>
      <section className="flex flex-col items-center justify-center gap-10 px-4 md:grid md:grid-cols-2 lg:grid-cols-3">
        {competenceIcon.map((icon) => (
          <CompetenceCard key={icon.id} text={icon.text} icon={icon.icon} />
        ))}
      </section>
    </section>
  );
}
