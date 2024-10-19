import React from "react";
import ServiceDescription from "../../components/atoms/serviceDescription/ServiceDescription";
import { serviceDescriptions } from "../../data/data";

export default function ServiceSection() {
  return (
    // j'ai mis en h-screen mais faut redisposter les elements
    <section
      id="services"
      className="bgFooter flex scroll-mt-[100px] flex-col gap-32 py-20 lg:h-screen"
    >
      <h2 className="text-center text-5xl font-bold text-white underline md:text-6xl">
        Ce que nous proposons
      </h2>
      <section className="flex flex-col gap-20 px-5 pb-20 text-justify text-lg font-semibold text-white lg:flex-row lg:gap-5  xl:px-20 ">
        {serviceDescriptions.map((description) => (
          <ServiceDescription
            key={description.id}
            title={description.title}
            text={description.text}
          />
        ))}
      </section>
    </section>
  );
}
