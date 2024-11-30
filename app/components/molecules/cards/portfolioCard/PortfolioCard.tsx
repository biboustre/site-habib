"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardProps } from "../../types";

export default function PortfolioCard({
  title,
  category,
  imageSrc,
  alt,
  description,
}: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="relative cursor-pointer border"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <section
        className={`duration-400 relative h-[400px] transition-opacity ${
          isHovered ? "opacity-50" : "opacity-100"
        }`}
      >
        <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
        <aside className="absolute inset-x-0 bottom-0 z-20 flex h-[190px] flex-col justify-center gap-5 bg-gray-800/50 pl-8">
          <p className="text-lg font-bold text-white">{category}</p>
          <h2 className="text-4xl font-bold text-white">{title}</h2>
        </aside>
      </section>

      <aside
        className={`duration-400 absolute inset-0 z-30 flex flex-col justify-center bg-amber-500 px-4 shadow-lg transition-opacity ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <h3 className="text-2xl font-bold text-black">{title}</h3>
        <p className="mt-2 text-white text-[14px] font-semibold">{description}</p>
      </aside>
    </section>
  );
}
