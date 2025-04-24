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
        <Image
          src={imageSrc}
          alt={alt}
          fill          
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
          className="object-cover"
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
        className="mt-4 w-full bg-slate-50 py-2 text-center font-semibold text-slate-800 transition duration-200 hover:bg-slate-800/50 hover:text-white"
      >
        Voir plus
      </button>
    </section>
  );
}
