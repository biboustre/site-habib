"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PortfolioCardProps } from "../../types";
import { FaTimes } from "react-icons/fa";

export default function PortfolioCard({
  title,
  category,
  imageSrc,
  alt,
  description,
}: PortfolioCardProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioCardProps | null>(
    null
  );

  const handleAsideClick = () => {
    setSelectedItem((prevSelectedItem) =>
      prevSelectedItem ? null : { title, category, imageSrc, alt, description }
    );
  };

  return (
    <section className="border ">
      <section className="relative  h-[400px] ">
        <Image src={imageSrc} alt={alt} layout="fill" objectFit="cover" />
        <aside
          className={`absolute inset-x-0 bottom-0 z-20 flex h-[190px] cursor-pointer flex-col justify-center gap-5 bg-gray-800/50  pl-8 ${
            selectedItem ? "hidden" : "flex"
          }`}
          onClick={handleAsideClick}
        >
          <p className=" text-lg font-bold text-white">{category}</p>
          <h2 className=" text-4xl font-bold text-white">{title}</h2>
        </aside>
      </section>

      {selectedItem && (
        <aside className=" bg-black p-3 shadow-lg">
          <h3 className="text-2xl font-bold text-amber-500">{title}</h3>
          <p className="mt-2 text-white">{description}</p>
          <div className="flex justify-end">
            <button
              className="bg-amber-500 p-1 text-black"
              onClick={() => setSelectedItem(null)}
            >
              <FaTimes />
            </button>
          </div>
        </aside>
      )}
    </section>
  );
}
