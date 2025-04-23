"use client";

import React, { useState } from "react";
import Image from "next/image";
// import { PortfolioCardProps } from "../../../../types/portfolio/portfolioCardProps";
import ModalProjet from "@/app/features/modals/ModaleProjet";

interface CardProjet{
  id: number;
  title?: string;
  category: string;
  description?: string;
  imageSrc: string;
  alt: string;
  className?: string;
}

export default function CardProjet({
  title,
  category,
  imageSrc,
  alt,
  description,
  className,
  // onClick,
}: CardProjet) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section
        className={`relative cursor-pointer border ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick} // Ouvre la modale au clic
      >
        <section
          className={`duration-400 relative h-[400px] transition-opacity 
          ${isHovered ? "opacity-" : "opacity-100"}
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
      </section>

      {/* Modale */}
      <ModalProjet
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={title}
        description={description}
      />
    </>
  );
}