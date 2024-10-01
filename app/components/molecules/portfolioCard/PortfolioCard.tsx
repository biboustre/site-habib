"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardProps } from "../../../types";



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
          className={`absolute bottom-0 z-20 flex flex-col justify-center gap-5 inset-x-0 h-[190px] bg-red-950 bg-opacity-50 pl-8  cursor-pointer ${
            selectedItem ? "hidden" : "flex"
          }`}
          onClick={handleAsideClick}
        >
          <p className=" text-white text-lg font-bold">{category}</p>
          <h2 className=" text-white text-4xl font-bold">{title}</h2>
        </aside>
      </section>

      {selectedItem && (
        <aside className=" p-3 bg-gray-100 shadow-lg" >
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2 text-gray-700">{description}</p>
          <button
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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
