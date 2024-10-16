import React from "react";
import CreationCard from "../../../features/creationCard/CreationCard";
import { card } from "@/app/data/data";

export default function NosCreationSection() {
  return (
    <section id="creations" className="flex flex-col gap-40 bg-[#e3d7cd] py-32">
      <h1 className="text-center text-4xl font-bold text-gray-800 underline md:text-7xl">
        Nos Créations
      </h1>
      <section className="flex flex-col gap-64">
        {card.map((card, index) => (
          <CreationCard
            key={card.id}
            title={card.title}
            imageUrl={card.imageSrc}
            imageAlt={card.title}
            description={card.description}
            isReversed={index % 2 === 1}
            className="md:h-[650px]"
            classNameImg="md:h-full"
          />
        ))}
      </section>
    </section>
  );
}
