"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion"; // Import Framer Motion

interface CardProjet {
  id: number;
  title?: string;
  category: string;
  description?: string;
  imageSrc?: string;
  videoSrc?: string; // Ajout de la prop videoSrc
  alt: string;
  className?: string;
}

export default function CardProjet({
  title,
  category,
  description,
  imageSrc,
  videoSrc, // Utilisation de la prop videoSrc
  alt,
  className,
}: CardProjet) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // État pour gérer la rotation

  // Fonction pour gérer le clic (utile pour les écrans tactiles)
  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Inverse l'état actuel
  };

  return (
    <section
      className={`relative mb-24 h-auto w-[90vw] cursor-pointer sm:w-[480px] 2xl:w-[600px] ${className}`}
    >
      <section
        className="relative h-[500px] overflow-hidden rounded-2xl sm:h-[400px] 2xl:h-[500px]"
        style={{
          perspective: "800px", // Perspective pour l'effet 3D
        }}
        onMouseEnter={() => setIsFlipped(true)} // Retourne la carte au survol
        onMouseLeave={() => setIsFlipped(false)} // Remet la carte à l'état initial
        onClick={handleCardClick} // Gère le clic pour les écrans tactiles
      >
        {/* Conteneur des deux faces */}
        <motion.section
          className="relative size-full"
          style={{
            transformStyle: "preserve-3d", // Permet de gérer les faces en 3D
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }} // Animation contrôlée par l'état
          transition={{ duration: 0.4, ease: "easeInOut" }} // Animation fluide
        >
          {/* Face avant */}
          <section
            className="absolute inset-0 flex flex-col justify-between bg-gray-800/55 text-xl font-bold text-white"
            style={{
              backfaceVisibility: "hidden", // Cache la face arrière
            }}
          >
            {/* Vidéo ou image */}
            <section className="flex grow items-center justify-center">
              {videoSrc ? (
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="size-full object-cover"
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              ) : (
                <figure>
                  {imageSrc && (
                    <Image
                      src={imageSrc}
                      alt={alt}
                      fill
                      quality={100}
                      className="object-cover"
                      priority
                    />
                  )}
                </figure>
              )}
            </section>

            {/* Titre et catégorie en bas */}
            <aside className="z-10 bg-black/50 p-4 text-center md:py-10">
              <p className="text-sm font-semibold uppercase md:text-xl">
                {category}
              </p>
              <h2 className="text-lg font-bold text-white md:text-2xl">
                {title}
              </h2>
            </aside>
          </section>

          {/* Face arrière */}
          <aside
            className="absolute inset-0 flex flex-col gap-8 bg-zinc-700/30 px-3 py-5 text-center text-white 2xl:px-10 "
            style={{
              backfaceVisibility: "hidden", // Cache la face avant
              transform: "rotateY(180deg)", // Face arrière tournée à 180°
            }}
          >
            {/* <p className="text-lg font-bold">{category}</p> */}
            <h2 className="text-3xl font-bold lg:text-4xl">{title}</h2>
            {description && <p className="text-base 2xl:text-xl ">{description}</p>}
          </aside>
        </motion.section>
      </section>
    </section>
  );
}
