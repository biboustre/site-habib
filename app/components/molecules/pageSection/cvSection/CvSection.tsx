import React from "react";
import CvCard from "@/app/components/molecules/cards/cvCard/CvCard"; // Chemin vers ton composant
import { cvData } from "@/app/data/cvData"; // Chemin vers ton fichier de données
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";

export default function CvSection() {
  return (
    <section
      id="cv"
      className="flex scroll-mt-[100px] flex-col items-center bg-black py-16"
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

      <div className="mt-12 grid max-w-5xl grid-cols-1 gap-8 px-4 md:grid-cols-2">
        {cvData.map((item) => (
          <CvCard
            key={item.id}
            year={item.year}
            title={item.title}
            institution={item.institution}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
