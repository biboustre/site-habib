import React from "react";
import PortfolioCard from "../../cards/portfolioCard/PortfolioCard";
import { cardNosCreation } from "@/app/data/cardCreationData";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";

interface PortfolioSectionProps {
  className?: string;
}

export default function PortfolioSection({ className }: PortfolioSectionProps) {
  return (
    <section
      id="projets"
      className={`flex scroll-mt-[100px] flex-col gap-20 bg-black pb-20 ${className}`}
    >
      <DuplicatedText
        text="Projets"
        className="text-center text-white"
        duplicatedClassName=" font-bold text-white opacity-10"
      />
      <section className="flex flex-col gap-10 px-2 md:grid md:grid-cols-2 lg:grid-cols-3">
        {cardNosCreation.map((card) => (
          <PortfolioCard
            key={card.id}
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
