"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { FaArrowRight } from "react-icons/fa";

interface CarouselItem {
  id: number;
  title: string;
  description?: string; // Ajout de description si nécessaire
  imageSrc: string;
}

interface CarouselEmblaProps {
  items: CarouselItem[]; // Liste des éléments du carousel
  autoplayDelay?: number; // Délai pour l'autoplay (en millisecondes)
  loop?: boolean; // Activer ou désactiver le mode boucle
  classContentFigure?: string; // Classe CSS pour le contenu de la figure
  classDescription?: string; // Classe CSS pour la description
}

export default function CarouselEmbla({
  items,
  autoplayDelay = 6000, // Valeur par défaut : 3 secondes
  loop = true, // Valeur par défaut : boucle activée
  classContentFigure,
  classDescription,
}: CarouselEmblaProps) {
  const autoplay = Autoplay({ delay: autoplayDelay, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop }, [autoplay]);

  return (
    <section
      ref={emblaRef}
      className=" relative mx-auto size-full max-w-[1600px] overflow-hidden "
    >
      {/* Flèche pour passer au slide suivant */}

      <section className="flex h-full">
        {items.map((item) => (
          <section
            key={item.id}
            className={`group relative h-full flex-[0_0_100%] cursor-pointer px-2  ${classContentFigure}`}
          >
            <button className="absolute right-4 top-4 z-10 flex  items-center justify-center  text-white">
              {" "}
              <FaArrowRight size={30} />
            </button>
            <figure className="relative size-full overflow-hidden rounded-lg shadow-lg ">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center gap-5 bg-black/30 p-4 text-center text-white">
                <h2 className="text-2xl font-extrabold md:text-4xl">
                  {item.title}
                </h2>
                {item.description && (
                  <p
                    className={`font-mono text-xl text-gray-100 lg:px-5 lg:text-xl ${classDescription}`}
                  >
                    {item.description}
                  </p>
                )}
              </figcaption>
            </figure>
          </section>
        ))}
      </section>
    </section>
  );
}
