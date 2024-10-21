import React from "react";
import ContactItem from "./ContactItem";
import DuplicatedText from "../../atoms/duplicateText/DuplicateText";
import { arrayItemsContact } from "@/app/data/data";

export default function ContactSection() {
  return (
    <section id="contact" className="flex scroll-mt-[100px] flex-col items-center gap-16 bg-black pt-16 text-white ">
      <section className="mb-12 text-center">
        <DuplicatedText
          text="Contacte"
          className="text-center  text-white"
          duplicatedClassName=" font-bold text-white opacity-10"
        />
        <p className="mt-4 text-gray-400">
          Loin, très loin, derrière les montagnes des mots, loin des pays de
          Vokalia et de Consonantia
        </p>
      </section>

      <section className="flex flex-col gap-20 md:w-full md:flex-row md:justify-around ">
        {arrayItemsContact.map((item) => (
          <ContactItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </section>
    </section>
  );
}
