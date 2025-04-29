// "use client";

// import React from "react";
// import useEmblaCarousel from "embla-carousel-react";
// import Image from "next/image";
// import Autoplay from "embla-carousel-autoplay";

// const carouselItems = [
//   { id: 1, title: "Photographie", imageSrc: "/images/pexel1.webp" },
//   { id: 2, title: "Vidéo Créative", imageSrc: "/images/pexel2.webp" },
//   { id: 3, title: "Montage Vidéo", imageSrc: "/images/pexel3.webp" },
// ];

// export default function CarouselEmbla() {
//   const autoplay = Autoplay({ delay: 3000 });
//   const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay]);

//   return (
//     <section ref={emblaRef} className="relative mx-auto w-full max-w-6xl py-10 overflow-hidden">
//         <section className="flex">
//           {carouselItems.map((item) => (
//             <section key={item.id} className="relative h-64 flex-[0_0_100%] px-2">
//               <figure className="relative size-full overflow-hidden rounded-lg shadow-lg">
//                 <Image
//                   src={item.imageSrc}
//                   alt={item.title}
//                   fill
//                   className="object-cover"
//                 />
//                 <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white">
//                   <h2 className="text-xl font-bold">{item.title}</h2>
//                 </div>
//               </figure>
//             </section>
//           ))}
//         </section>
//     </section>
//   );
// }

"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
}

export default function CarouselEmbla({
  items,
  autoplayDelay = 6000, // Valeur par défaut : 3 secondes
  loop = true, // Valeur par défaut : boucle activée
  classContentFigure,
}: CarouselEmblaProps) {
  const autoplay = Autoplay({ delay: autoplayDelay, stopOnInteraction: false });
  const [emblaRef] = useEmblaCarousel({ loop }, [autoplay]);

  return (
    <section
      ref={emblaRef}
      className="relative mx-auto size-full max-w-6xl overflow-hidden "
    >
      <div className="flex h-full">
        {items.map((item) => (
          <section
            key={item.id}
            className={`relative h-full flex-[0_0_100%] cursor-pointer px-2 ${classContentFigure}`}
          >
            <figure className="relative size-full overflow-hidden rounded-lg shadow-lg">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover opacity-70"
              />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 p-4 gap-5 text-center text-white">
                <h2 className="text-xl font-extrabold md:text-4xl">{item.title}</h2>
                {item.description && (
                  <p className=" text-lg text-gray-100 lg:text-xl lg:px-5 font-mono">
                    {item.description}
                  </p>
                )}
              </figcaption>
            </figure>
          </section>
        ))}
      </div>
    </section>
  );
}
