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
  onClick?: () => void; // Ajout de la prop onClick
}

export default function CardProjet({
  title,
  category,
  description,
  imageSrc,
  videoSrc, // Utilisation de la prop videoSrc
  alt,
  className,
  onClick, // Utilisation de la prop onClick
}: CardProjet) {
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // État pour gérer la rotation

  return (
    <section
      className={`relative mb-24 h-auto w-[90vw] cursor-pointer sm:w-[480px] 2xl:w-[600px] ${className}`}
    >
      <div
        className="relative h-[400px] 2xl:h-[500px]"
        style={{
          perspective: "800px", // Perspective pour l'effet 3D
        }}
        onMouseEnter={() => setIsFlipped(true)} // Retourne la carte au survol
        onMouseLeave={() => setIsFlipped(false)} // Remet la carte à l'état initial
      >
        {/* Conteneur des deux faces */}
        <motion.div
          className="relative size-full"
          style={{
            transformStyle: "preserve-3d", // Permet de gérer les faces en 3D
          }}
          animate={{ rotateY: isFlipped ? 180 : 0 }} // Animation contrôlée par l'état
          transition={{ duration: 0.4, ease: "easeInOut" }} // Animation fluide
        >
          {/* Face avant */}
          <div
            className="absolute inset-0 flex flex-col justify-between bg-gray-800/55 text-xl font-bold text-white"
            style={{
              backfaceVisibility: "hidden", // Cache la face arrière
            }}
          >
            {/* Vidéo ou image */}
            <div className="flex grow items-center justify-center">
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
            </div>

            {/* Titre et catégorie en bas */}
            <div className="z-10 bg-black/50 p-4 text-center md:py-10">
              <p className="text-sm font-semibold uppercase md:text-xl">
                {category}
              </p>
              <h2 className="text-lg font-bold text-white md:text-2xl">
                {title}
              </h2>
            </div>
          </div>

          {/* Face arrière */}
          <div
            className="absolute inset-0 flex flex-col gap-5 bg-gray-800/90 p-5 text-center text-white"
            style={{
              backfaceVisibility: "hidden", // Cache la face avant
              transform: "rotateY(180deg)", // Face arrière tournée à 180°
            }}
          >
            <p className="text-lg font-bold">{category}</p>
            <h2 className="text-4xl font-bold">{title}</h2>
            {description && <p className="text-sm">{description}</p>}
          </div>
        </motion.div>
      </div>

      <button
        onClick={onClick} // Déclenche la fonction onClick passée en prop
        className="mt-4 w-full  bg-slate-800/50 py-2 text-center font-semibold uppercase tracking-wider text-white transition duration-200"
      >
        Survolez l&apos;image !!
      </button>
    </section>
  );
}
