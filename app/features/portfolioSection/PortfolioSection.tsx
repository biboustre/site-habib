import React from "react";
import PortfolioCard from "../portfolioCard/PortfolioCard";
import { card } from "@/app/data/data";
import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";

interface PortfolioSectionProps {
  className?: string;
}

export default function PortfolioSection({ className }: PortfolioSectionProps) {
  return (
    <section
      id="projets"
      className={`flex scroll-mt-[100px] flex-col gap-20 bg-black py-20 ${className}`}
    >
      <DuplicatedText
        text="Projets"
        className="text-center text-[45px] font-bold text-white"
        duplicatedClassName=" font-bold text-white opacity-10"
      />
      <section className="space-y-10 px-2">
        {card.map((card) => (
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
