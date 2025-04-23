"use client";

import React from "react";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import Carousel from "@/app/features/carrousel/Carrousel";
import cardCreation from "@/app/data/cardCreationData";
import CardProjet from "../../cards/cardProjet/CardProjet";

export default function NosCreationSection() {
  // const customSettings = {
  //   dots: false,
  //   slidesToShow: 3,
  //   centerPadding: "10%",
  //   autoplaySpeed: 0,
  //   speed: 3000,
  //   cssEase: "linear",
  //   infinite: true,
  // };

  
  return (
    <AnimatedSection>
      <section
        id="creations"
        className="bgFooter relative flex scroll-mt-[100px] flex-col gap-32 pb-40 pt-20 "
      >
        <DuplicatedText
          className="pt-3  text-[35px] text-white  sm:text-[65px]"
          text="Nos créations"
        />
        <Carousel>
          {cardCreation.map((card) => (
            <CardProjet
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.category}
              imageSrc={card.imageSrc}
              description={card.description}
              alt={card.description}
              className="border-none"
            />
          ))}
        </Carousel>
      </section>
    </AnimatedSection>
  );
}
