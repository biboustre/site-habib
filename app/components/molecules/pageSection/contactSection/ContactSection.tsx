"use client";

import React from "react";
import ContactItem from "./ContactItem";
import DuplicatedText from "../../../atoms/duplicatedText/DuplicatedText";
import { itemsContact } from "@/app/data/itemsContactData";
import { usePathname } from "next/navigation";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

export default function ContactSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.2 } },
  };

  const pathname = usePathname();

  return (
    <AnimatedSection>
      <motion.section
        id="contact"
        className="flex scroll-mt-[100px] flex-col items-center gap-16 pt-20 text-white "
        variants={itemVariants}
      >
        <motion.section className="mb-12 space-y-16 text-center" variants={itemVariants}>
          <DuplicatedText
            text="Contact"
            className="text-center text-5xl font-extrabold text-white"
          />
          {pathname === "/" && (
            <p className="mx-auto mt-4 w-[70%] text-gray-400 text-2xl sm:text-xl">
              Besoin d&apos;informations ou d&apos;un devis ? N&apos;hésitez pas
              à nous contacter pour discuter de vos projets et découvrir comment
              nous pouvons vous aider à concrétiser vos idées.
            </p>
          )}
        </motion.section>

        <motion.section
          className="flex flex-col gap-20 md:w-full md:flex-row md:justify-around "
          variants={itemVariants}
        >
          {itemsContact.map((item) => (
            <ContactItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </motion.section>
      </motion.section>
    </AnimatedSection>
  );
}

// MODIFIER LA HAUTEUR DU FORMULAIRE
