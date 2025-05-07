import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "@/app/components/organism/sectionsSercvices/servicePhotographie/CardsPhotographie";
import CarouselPhotographie from "@/app/components/organism/sectionsSercvices/servicePhotographie/CarouselPhotographie";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
import BtnRounded from "@/app/components/atoms/button/BtnRounded";

const sliderServicesPhotographie = [
  {
    id: 1,
    title: "Photographie Professionnelle",
    description:
      "Capturez vos moments précieux avec des clichés de haute qualité. Nous réalisons des séances photo pour événements, portraits, produits et bien plus.",
    imageSrc: "/images/pexel1.webp",
    alt: "photographie",
  },
  {
    id: 2,
    title: "Vidéo Créative",
    description:
      "Réalisez des vidéos captivantes pour vos projets personnels ou professionnels. Nous mettons en valeur vos idées avec des prises de vue dynamiques.",
    videoSrc: "/video/video4.MP4",
    alt: "vidéo",
  },
  {
    id: 3,
    title: "Montage Vidéo",
    description:
      "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
    imageSrc: "/images/montage-video-3.jpg",
    alt: "montage vidéo",
  },
];

const portraitServices = [
  {
    id: 1,
    title: "Portraits Individuels",
    description:
      "Des portraits élégants et professionnels pour capturer votre personnalité unique.",
    imageSrc: "/images/appareil-photo/appareil-photo-3.jpg",
    alt: "Portraits Individuels",
  },
  {
    id: 2,
    title: "Portraits de Famille",
    description:
      "Capturez vos moments en famille avec des clichés chaleureux et authentiques.",
    imageSrc: "/images/appareil-photo/appareil-photo-2.jpg",
    alt: "Portraits de Famille",
  },
  {
    id: 3,
    title: "Portraits Corporate",
    description:
      "Mettez en avant votre image professionnelle avec des portraits d'entreprise de qualité.",
    imageSrc: "/images/appareil-photo/appareil-photo-6.jpg",
    alt: "Portraits Corporate",
  },
];

export default function ServicePhotographie() {
  return (
    <section className="bg-gradient-black relative flex flex-col gap-20 px-6 pb-20">
      {/* Titre principal */}
      <section>
        <motion.section
          className=" flex flex-col gap-5 pt-10 text-center"
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <TitleAnimeGradient
            title="Sublimez Vos Moments avec Nos Services"
            classNameH1=" text-4xl mx-auto max-w-[1000px] lg:text-6xl tracking-wide"
          />
          <p className="mx-auto mt-4 max-w-4xl text-center  text-xl text-white md:text-2xl">
            Découvrez l&apos;excellence en photographie, vidéo créative et
            montage professionnel. Nous transformons vos idées en œuvres
            visuelles uniques et mémorables.
          </p>
        </motion.section>

        {/* Services principaux */}
        <section className="mx-auto mt-16 grid max-w-[1900px] grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {sliderServicesPhotographie.map((service, index) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageSrc={service.imageSrc}
              videoSrc={service.videoSrc}
              delay={index * 0.2}
            />
          ))}
        </section>
      </section>

      {/* Section Portraits */}
      <motion.section>
        <TitleAnimeGradient
          title="Portraits Professionnels"
          classNameH1="text-start mx-[0px] text-4xl font-extrabold lg:text-6xl "
        />
        <CarouselPhotographie
          title="Portrait"
          description="Capturez vos moments précieux avec des portraits uniques et mémorables."
          items={portraitServices}
        />
      </motion.section>

      {/* Call to Action */}
      <motion.div
        className="mt-10 flex justify-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <BtnRounded
          href="#contact"
          text="Contact"
          className="btn-gradient animate-pulse bg-zinc-500  2xl:py-4 2xl:font-extrabold
        "
        />
      </motion.div>
    </section>
  );
}
