// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";

interface Service {
  number: number;
  title: string;
  text: string;
}

interface CarouselItem {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
}

interface ChildServiceDeveloppementProps {
  services: Service[];
  justifyLogic?: (index: number) => string; // Fonction pour personnaliser la logique de justification
  imageSrc: string;
  imageAlt: string;
  className?: string; // Ajout de la prop className
  carouselItems: CarouselItem[]; // Tableau dynamique pour le carousel
}



const ChildServiceDeveloppement: React.FC<ChildServiceDeveloppementProps> = ({
  services,
  carouselItems,
  justifyLogic = (index) =>
    index % 2 === 0 ? "md:justify-start" : "md:justify-end", // Logique par défaut
  // imageSrc,
  // imageAlt,
  className, // Ajout de la prop className

}) => {
  // Variants pour l'animation des cartes
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, // Position initiale (invisible et décalée vers le bas)
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2, // Décalage pour chaque élément
        type: "spring", // Animation de type ressort
        stiffness: 100, // Rigidité du ressort
        damping: 10, // Amortissement du ressort
      },
    }),
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.classList.add("active");
  };

  const handleTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const target = event.currentTarget;
    target.classList.remove("active");
  };

  return (
    <section
      className={`flex max-w-[1200px] flex-col items-center justify-center gap-20 md:w-full lg:flex-row 2xl:max-w-[1400px] 2xl:gap-44 ${className}`}
    >
      {/* Section des services */}
      <section className="flex w-full flex-col gap-10 md:px-5 lg:w-1/2 lg:px-0">
        {services.map((service, index) => (
          <motion.section
            key={index}
            className={`flex w-full justify-center ${justifyLogic(index)}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} // L'animation se déclenche lorsque l'élément est à moitié visible
            custom={index} // Passe l'index pour le décalage
            variants={cardVariants} // Applique les variantes
          >
            <section
              className="btn-gradient flex w-[95%] max-w-[450px] cursor-pointer gap-5  rounded-3xl bg-neutral-800/60 p-7 duration-300 hover:scale-110 md:w-auto lg:w-auto "
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Cercle avec le numéro */}
              <p className="animate-bg-gradient flex size-20 shrink-0 items-center  justify-center rounded-full bg-black/50 bg-gradient-to-r text-xl font-bold shadow-lg shadow-neutral-900">
                <span>{service.number}</span>
              </p>
              {/* Contenu avec le titre et le texte */}
              <section className="flex grow flex-col">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-lg text-gray-300">{service.text}</p>
              </section>
            </section>
          </motion.section>
        ))}
      </section>

      <section className="h-[400px] w-full md:h-auto lg:flex lg:w-1/2 lg:items-center lg:justify-center ">
        <CarouselEmbla
          items={carouselItems}

          loop={true}
          classContentFigure="sm:h-[500px] "
        />
      </section>
    </section>
  );
};

export default ChildServiceDeveloppement;
