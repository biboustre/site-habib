"use client";

import React, { useState } from "react";
import Image from "next/image";

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
  imageSrc,
  videoSrc, // Utilisation de la prop videoSrc
  alt,
  // description,
  className,
  onClick, // Utilisation de la prop onClick
}: CardProjet) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className={`relative w-[90vw] cursor-pointer border sm:h-[550px] sm:w-[480px] ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section
        className={`duration-400 relative h-[400px] transition-opacity 
          ${isHovered ? "opacity-90" : "opacity-100"}
          `}
      >
       
        {/* Image ou vidéo de fond */}
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
          {/* Image de fond desktop */}
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={alt}
              fill
              quality={100}
              className={`object-cover`}
              priority
            />
          )}
          {/* Image de fond mobile */}
        </figure>
      )}
        <aside className="absolute inset-x-0 bottom-0 z-20 flex h-[190px] flex-col justify-center gap-5 bg-gray-800/55 pl-8">
          <p className="text-lg font-bold text-white">{category}</p>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
        </aside>
      </section>
      <button
        onClick={onClick} // Déclenche la fonction onClick passée en prop
        className="mt-4 w-full bg-slate-50 py-2 text-center font-semibold text-slate-800 transition duration-200 hover:bg-slate-800/50 hover:text-white"
      >
        Voir plus
      </button>
    </section>
  );
}
