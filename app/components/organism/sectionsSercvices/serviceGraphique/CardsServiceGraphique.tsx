import { motion } from "framer-motion";
import React, { useState } from "react";

export const CardsServiceGraphique = ({
  service,
}: {
  service: { title: string; description: string };
}) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false); // État pour gérer la rotation

  // Fonction pour gérer le clic (utile pour les écrans tactiles)
  const handleCardClick = () => {
    setIsFlipped((prev) => !prev); // Inverse l'état actuel
  };

  return (
    <section
      className="bg-animated-shine relative h-[250px] max-h-[350px] w-full max-w-[500px] basis-full cursor-pointer overflow-hidden rounded-3xl shadow-sm shadow-yellow-900 md:min-h-[350px] md:basis-1/3 lg:size-[20vw]"
      style={{
        perspective: "400px", // Perspective pour l'effet 3D
        // transformStyle: "preserve-3d", // Préserve le style 3D
      }}
      onMouseEnter={() => setIsFlipped(true)} // Retourne la carte au survol
      onMouseLeave={() => setIsFlipped(false)} // Remet la carte à l'état initial
      onClick={handleCardClick} // Gère le clic pour les écrans tactiles
    >
      {/* Conteneur des deux faces */}
      <motion.div
        className="relative size-full"
        style={{
          transformStyle: "preserve-3d", // Permet de gérer les faces en 3D
        }}
        animate={{ rotateY: isFlipped ? 180 : 0 }} // Animation contrôlée par l'état
        transition={{ duration: 0.6, ease: "easeInOut" }} // Animation fluide
      >
        {/* Face avant */}
        <h2
          className="animate-text-gradient absolute inset-0 flex items-center  justify-center bg-neutral-900/30 text-8xl font-bold"
          style={{
            backfaceVisibility: "hidden", // Cache la face arrière
          }}
        >
          ?!
        </h2>

        {/* Face arrière */}
        <section
          className="2xltop-[10%] absolute inset-0  flex flex-col gap-5 p-5 text-center text-white md:top-[10%]"
          style={{
            backfaceVisibility: "hidden", // Cache la face avant
            transform: "rotateY(180deg)", // Face arrière tournée à 180°
          }}
        >
          <h2 className="animate-text-gradient text-2xl font-bold 2xl:text-4xl">
            {service.title}
          </h2>
          <p className="text-base md:text-lg xl:text-lg 2xl:text-2xl">
            {service.description}
          </p>
        </section>
      </motion.div>
    </section>
  );
};
