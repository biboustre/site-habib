import React from "react";
import ServiceDescription from "../../components/molecules/serviceDescription/ServiceDescription";
import { serviceDescriptions } from "@/app/data/data";
import DuplicatedText from "@/app/components/atoms/duplicateText/DuplicateText";

export default function ServiceSection() {
  return (
    // j'ai mis en h-screen mais faut redisposter les elements
    <section
      id="services"
      className="flex scroll-mt-[100px] flex-col gap-32 bg-black pb-32 pt-20"
    >
      <DuplicatedText text="Ce que nous proposons" className="text-white" />
      <section className="flex flex-col gap-20  px-5 pb-20 text-justify text-lg font-semibold text-white lg:flex-row lg:gap-5  xl:px-20 ">
        {serviceDescriptions.map((description) => (
          <ServiceDescription
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
