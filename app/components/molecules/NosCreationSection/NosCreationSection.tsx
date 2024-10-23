import React from "react";
import OurCreationCard from "../../../features/ourCreationCard/OurCreationCard";
import { card } from "@/app/data/data";
import DuplicatedText from "../../atoms/duplicateText/DuplicateText";

export default function NosCreationSection() {
  return (
    <section
      id="creations"
      className="bgFooter flex scroll-mt-[100px] flex-col gap-32 pb-40 pt-20 lg:px-16 xl:px-96"
    >
      <DuplicatedText className="text-white" text="Nos créations" />
      <section className="flex flex-col gap-40">
        {card.map((card, index) => (
          <OurCreationCard
            key={card.id}
            title={card.title}
            imageUrl={card.imageSrc}
            imageAlt={card.title}
            description={card.description}
            isReversed={index % 2 === 1}
          />
        ))}
      </section>
    </section>
  );
}
