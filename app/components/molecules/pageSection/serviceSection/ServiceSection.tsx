import React from "react";
import ServiceCard from "../../cards/serviceCard/ServiceCard";
import { cardService } from "@/app/data/cardServiceData";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";

export default function ServiceSection() {
  return (
    // j'ai mis en h-screen mais faut redisposter les elements
    <section
      id="services"
      className="flex  scroll-mt-[100px] flex-col gap-32 bg-black pb-32 pt-20 2xl:h-screen 2xl:gap-44"
    >
      <DuplicatedText
        text="Ce que nous proposons"
        className="pt-3  text-[35px] text-white  sm:text-[65px]"
      />
      <section className="flex flex-col gap-20  px-5 pb-20 text-justify text-lg font-semibold text-white lg:flex-row lg:gap-5  xl:px-20 ">
        {cardService.map((description) => (
          <ServiceCard
            key={description.id}
            text={description.text}
            icon={description.icon}
            title={description.title}
          />
        ))}
      </section>
    </section>
  );
}
