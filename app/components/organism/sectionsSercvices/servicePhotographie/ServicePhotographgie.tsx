"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";

const services = [
  {
    id: 1,
    title: "Photographie Professionnelle",
    description:
      "Capturez vos moments précieux avec des clichés de haute qualité. Nous réalisons des séances photo pour événements, portraits, produits et bien plus.",
    imageSrc: "/images/photographie1.jpg",
  },
  {
    id: 2,
    title: "Vidéo Créative",
    description:
      "Réalisez des vidéos captivantes pour vos projets personnels ou professionnels. Nous mettons en valeur vos idées avec des prises de vue dynamiques.",
    imageSrc: "/images/video1.jpg",
  },
  {
    id: 3,
    title: "Montage Vidéo",
    description:
      "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
    imageSrc: "/images/montage1.jpg",
  },
];

export default function ServicePhotographie() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-10 bg-neutral-950 px-5 py-20 text-white sm:px-10 lg:px-20 2xl:h-[80vh] 2xl:justify-start 2xl:gap-16">
      {/* Titre principal */}
      <motion.section
        className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl"
        initial={{ opacity: 0, y: 150 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        // animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <TitleAnimeGradient
          title="Photographie et Vidéo : Sublimez Vos Moments"
          className="text-center"
          classNameH1="2xl:text-5xl max-w-[1200px]"
        />
      </motion.section>

      {/* Texte d'introduction */}
      <motion.p
        className="max-w-4xl text-center text-lg text-gray-300 sm:text-xl 2xl:text-2xl 2xl:font-semibold"
        initial={{ opacity: 0, y: 150 }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Nous vous proposons des services de photographie et de vidéo
        professionnels pour capturer vos moments les plus précieux. Que ce soit
        pour des événements, des projets personnels ou professionnels, notre
        équipe met son expertise à votre service pour créer des contenus visuels
        uniques et mémorables. Faites confiance à notre savoir-faire pour
        sublimer vos idées.
      </motion.p>

      {/* Cards des services */}
      <section className="grid w-full grid-cols-1 gap-10 pt-16 sm:grid-cols-2 lg:grid-cols-3 2xl:pt-20">
        {services.map((service) => (
          <motion.section
            key={service.id}
            className="group relative cursor-pointer overflow-hidden rounded-lg bg-zinc-800/40 shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: service.id * 0.2,
            }}
          >
            {/* Image */}
            <figure className="relative h-64 w-full">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>

            {/* Contenu */}
            <aside className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-5 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 2xl:gap-5">
              <h2 className="text-xl font-bold 2xl:text-3xl">
                {service.title}
              </h2>
              <p className="mt-2 text-sm text-gray-300 2xl:text-xl">
                {service.description}
              </p>
            </aside>
          </motion.section>
        ))}
      </section>
    </section>
  );
}
