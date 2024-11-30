import React from "react";
import OurCreationCard from "../../../../features/ourCreationCard/OurCreationCard";
import { cardNosCreation } from "@/app/data/cardCreationData";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";

export default function NosCreationSection() {
  return (
    <section
      id="creations"
      className="bgFooter flex scroll-mt-[100px] flex-col gap-32 pb-40 pt-20 lg:px-16 2xl:px-[350px]"
    >
      <DuplicatedText
        className="pt-3  text-[35px] text-white  sm:text-[65px]"
        text="Nos créations"
      />
      <section className="flex flex-col gap-24 md:gap-40">
        {cardNosCreation.map((card, index) => (
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
