"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardProps } from "../../types";

export function PortfolioCard({
  title,
  category,
  imageSrc,
  description,
}: PortfolioCardProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioCardProps | null>(
    null
  );

  const handleAsideClick = () => {
    if (selectedItem) {
      setSelectedItem(null);
    } else {
      setSelectedItem({
        title,
        category,
        imageSrc,
        description,
        onClick: () => setSelectedItem(null),
      });
    }
  };

  return (
    <section>
      <section className="relative  h-[460px]">
        <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
        <aside
          className={`absolute inset-x-0 bottom-0 z-20 flex h-[190px] cursor-pointer flex-col justify-center gap-5 bg-red-950 bg-opacity-50  pl-8 ${
            selectedItem ? "hidden" : "flex"
          }`}
          onClick={handleAsideClick}
        >
          <p className=" text-lg font-bold text-white">{category}</p>
          <h2 className=" text-4xl font-bold text-white">{title}</h2>
        </aside>
      </section>

      {selectedItem && (
        <aside className=" bg-gray-100 p-3 shadow-lg">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
          <button
            className="mt-4 rounded bg-blue-500 px-4 py-2 text-white"
            onClick={() => setSelectedItem(null)}
          >
            Fermer
          </button>
        </aside>
      )}
    </section>
  );
}
// inset-0
