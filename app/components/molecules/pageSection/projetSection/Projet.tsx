import React from "react";
import cardCreation from "@/app/data/cardCreationData";
import CardProjet from "../../cards/cardProjet/CardProjet";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

interface ProjetSectionProps {
  className?: string;
}

export default function Projet({ className }: ProjetSectionProps) {
  return (
    <section
      id="projets"
      className={`flex scroll-mt-[100px] flex-col gap-20 bg-black pb-20 ${className}`}
    >
      <section className="flex justify-center">
        <TitleAnimeGradient
          classNameH1="lg:text-6xl text-5xl font-extrabold btn-gradient hover-text-white"
          title="Projets"
        />
      </section>
      <section className="flex flex-col gap-10 px-2 md:grid md:grid-cols-2 lg:grid-cols-3">
        {cardCreation.map((card) => (
          <CardProjet
            key={card.id}
            id={card.id}
            title={card.title}
            category={card.category}
            imageSrc={card.imageSrc}
            description={card.description}
            alt={card.description}
          />
        ))}
      </section>
    </section>
  );
}
