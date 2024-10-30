'use client';

import React from "react";
import ContactItem from "./ContactItem";
import DuplicatedText from "../../atoms/duplicateText/DuplicateText";
import { itemsContact } from "@/app/data/itemsContactData";
import { usePathname } from "next/navigation";

export default function ContactSection() {

  const pathname = usePathname();

  return (
    <section
      id="contact"
      className="flex scroll-mt-[100px] flex-col items-center gap-16 bg-black text-white sm:pt-16 "
    >
      <section className="mb-12 text-center">
        <DuplicatedText
          text="Contacte"
          className="pt-3  text-[35px] text-white  sm:text-[65px]"
          duplicatedClassName=" font-bold text-white opacity-10"
        />
        {pathname === "/" && (
          <p className="mx-auto mt-4 w-[70%] text-gray-400 sm:text-xl">
            Besoin d&apos;informations ou d&apos;un devis ? N&apos;hésitez pas à
            nous contacter pour discuter de vos projets et découvrir comment nous
            pouvons vous aider à concrétiser vos idées.
          </p>
        )}
      </section>

      <section className="flex flex-col gap-20 md:w-full md:flex-row md:justify-around ">
        {itemsContact.map((item) => (
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
