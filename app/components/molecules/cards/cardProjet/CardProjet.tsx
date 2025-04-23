"use client";

import React, { useState } from "react";
import Image from "next/image";

interface CardProjet {
  id: number;
  title?: string;
  category: string;
  description?: string;
  imageSrc: string;
  alt: string;
  className?: string;
  onClick?: () => void; // Ajout de la prop onClick
}

export default function CardProjet({
  title,
  category,
  imageSrc,
  alt,
  description,
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
      className={`relative cursor-pointer border ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section
        className={`duration-400 relative h-[400px] transition-opacity 
          ${isHovered ? "opacity-90" : "opacity-100"}
          `}
      >
        <Image
          src={imageSrc}
          alt={alt}
          layout="fill"
          objectFit="cover"
          priority
          quality={100}
        />
        <aside className="absolute inset-x-0 bottom-0 z-20 flex h-[190px] flex-col justify-center gap-5 bg-gray-800/55 pl-8">
          <p className="text-lg font-bold text-white">{category}</p>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
        </aside>
      </section>
      <button
        onClick={onClick} // Déclenche la fonction onClick passée en prop
        className="mt-4 w-full bg-gray-800/55 py-2 text-center text-white font-semibold hover:bg-slate-800"
      >
        Voir plus
      </button>
    </section>
  );
}