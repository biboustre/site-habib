// import Image from "next/image";
// import React from "react";

// interface Service {
//   number: number;
//   title: string;
//   text: string;
// }

// interface ServiceSectionProps {
//   services: Service[];
//   justifyLogic?: (index: number) => string; // Fonction pour personnaliser la logique de justification
//   imageSrc: string;
//   imageAlt: string;
//   className?: string; // Ajout de la prop className
// }

// const ServiceSection: React.FC<ServiceSectionProps> = ({
//   services,
//   justifyLogic = (index) =>
//     index % 2 === 0 ? "md:justify-start" : "md:justify-end", // Logique par défaut
//   imageSrc,
//   imageAlt,
//   className, // Ajout de la prop className
// }) => {
//   return (
//     <section
//       className={`flex flex-col items-center justify-center gap-20 md:flex-row ${className}`}
//     >
//       {/* Section des services */}
//       <section className="flex w-full flex-col gap-10 md:px-5 lg:w-1/2 lg:px-0">
//         {services.map((service, index) => (
//           <section
//             key={index}
//             className={`flex  w-full justify-center ${justifyLogic(index)}`}
//           >
//             <div
//               className="btn-gradient flex w-[95%] max-w-[400px] cursor-default items-center justify-center gap-5 rounded-3xl bg-gray-800/40 p-7 duration-300 hover:scale-110 md:w-auto lg:w-auto
// "
//             >
//               {/* Cercle avec le numéro */}
//               <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-xl font-bold shadow-lg shadow-neutral-900">
//                 {service.number}
//               </div>
//               {/* Contenu avec le titre et le texte */}
//               <div>
//                 <h2 className="text-2xl font-bold">{service.title}</h2>
//                 <p className="text-sm text-gray-300">{service.text}</p>
//               </div>
//             </div>
//           </section>
//         ))}
//       </section>

//       {/* Figure avec l'image */}
//       <figure className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center">
//         <Image
//           src={imageSrc}
//           alt={imageAlt}
//           width={550}
//           height={500}
//           quality={100}
//           loading="lazy"
//           className="h-[450px] w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-300 hover:scale-105"
//         />
//       </figure>
//     </section>
//   );
// };

// export default ServiceSection;

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion

interface Service {
  number: number;
  title: string;
  text: string;
}

interface ServiceSectionProps {
  services: Service[];
  justifyLogic?: (index: number) => string; // Fonction pour personnaliser la logique de justification
  imageSrc: string;
  imageAlt: string;
  className?: string; // Ajout de la prop className
}

const ServiceSection: React.FC<ServiceSectionProps> = ({
  services,
  justifyLogic = (index) =>
    index % 2 === 0 ? "md:justify-start" : "md:justify-end", // Logique par défaut
  imageSrc,
  imageAlt,
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
      className={`flex flex-col items-center justify-center gap-20 md:flex-row ${className}`}
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
            <div className="btn-gradient flex w-[95%] max-w-[400px] cursor-default items-center justify-center gap-5 rounded-3xl bg-gray-800/40 p-7 duration-300 hover:scale-110 md:w-auto lg:w-auto">
              {/* Cercle avec le numéro */}
              <div className="flex size-16 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-xl font-bold shadow-lg shadow-neutral-900">
                {service.number}
              </div>
              {/* Contenu avec le titre et le texte */}
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-sm text-gray-300">{service.text}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </section>

      {/* Figure avec l'image */}
      <figure className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={550}
          height={500}
          quality={100}
          loading="lazy"
          className="h-[450px] w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-300 hover:scale-105"
        />
      </figure>
    </section>
  );
};

export default ServiceSection;
