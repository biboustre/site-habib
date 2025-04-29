// import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";

interface Service {
  number: number;
  title: string;
  text: string;
}

interface ChildServiceDeveloppementProps {
  services: Service[];
  justifyLogic?: (index: number) => string; // Fonction pour personnaliser la logique de justification
  imageSrc: string;
  imageAlt: string;
  className?: string; // Ajout de la prop className
}

const servicesDeveloppement = [
  {
    id: 1,
    title: "Développement Web",
    description:
      "Création de sites web modernes, performants et optimisés pour tous les appareils. Nous utilisons les dernières technologies pour garantir une expérience utilisateur exceptionnelle.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 2,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et hybrides, conçues pour offrir des performances optimales et une expérience utilisateur fluide sur iOS et Android.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 3,
    title: "SEO & Performance",
    description:
      "Optimisation de votre site pour les moteurs de recherche et amélioration des performances pour un chargement rapide et une meilleure visibilité.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 4,
    title: "Accessibilité",
    description:
      "Conception de sites accessibles à tous, respectant les normes WCAG pour garantir une expérience inclusive.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 5,
    title: "Bonnes Pratiques",
    description:
      "Code propre, maintenable et respectant les standards de l'industrie pour garantir la qualité et la pérennité de vos projets.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 6,
    title: "Design UI/UX",
    description:
      "Création d'interfaces utilisateur intuitives et esthétiques, centrées sur l'utilisateur pour une navigation fluide et agréable.",
    imageSrc: "/images/pexel1.webp",
  },
];

const ChildServiceDeveloppement: React.FC<ChildServiceDeveloppementProps> = ({
  services,
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

  return (
    <section
      className={`flex max-w-[1200px] flex-col items-center justify-center gap-20 md:w-full md:flex-row 2xl:max-w-[1400px] 2xl:gap-32 ${className}`}
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
            <div className="btn-gradient flex w-[95%] max-w-[450px] cursor-pointer gap-5  rounded-3xl bg-neutral-800/60 p-7 duration-300 hover:scale-110 md:w-auto lg:w-auto">
              {/* Cercle avec le numéro */}
              <p className="animate-bg-gradient flex size-20 items-center  justify-center rounded-full bg-black/50 bg-gradient-to-r text-xl font-bold shadow-lg shadow-neutral-900">
                <span>{service.number}</span>
              </p>
              {/* Contenu avec le titre et le texte */}
              <section className="w-1/2">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-sm text-gray-300">{service.text}</p>
              </section>
            </div>
          </motion.section>
        ))}
      </section>

      {/* <figure className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <motion.div
          whileHover={{ rotate: 720 }} // 3 tours rapides (360° x 3)
          whileTap={{ rotate: -720 }} // Retour en sens inverse
          transition={{
            duration: 0.2, // Durée de l'animation
            ease: "easeInOut", // Transition fluide
          }}
          className="h-[450px] w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-200"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={550}
            height={500}
            quality={100}
            loading="lazy"
            className="size-full object-cover"
          />
        </motion.div>
        
      </figure> */}
      <section className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <CarouselEmbla items={servicesDeveloppement} loop={true} classContentFigure="sm:h-[500px]" />
      </section>
    </section>
  );
};

export default ChildServiceDeveloppement;
