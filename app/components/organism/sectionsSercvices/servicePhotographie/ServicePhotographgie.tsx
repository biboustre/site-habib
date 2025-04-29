// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// // import Image from "next/image";
// import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
// import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";

// const services = [
//   {
//     id: 1,
//     title: "Photographie Professionnelle",
//     description:
//       "Capturez vos moments précieux avec des clichés de haute qualité. Nous réalisons des séances photo pour événements, portraits, produits et bien plus.",
//     imageSrc: "/images/pexel1.webp",
//   },
//   {
//     id: 2,
//     title: "Vidéo Créative",
//     description:
//       "Réalisez des vidéos captivantes pour vos projets personnels ou professionnels. Nous mettons en valeur vos idées avec des prises de vue dynamiques.",
//     imageSrc: "/images/pexel2.webp",
//   },
//   {
//     id: 3,
//     title: "Montage Vidéo",
//     description:
//       "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
//     imageSrc: "/images/pexel3.webp",
//   },
// ];

// export default function ServicePhotographie() {
//   return (
//     <section className="relative h-auto bg-neutral-950 px-5 py-20  pb-40">
//       {/* Titre principal */}
//       <section className="mx-auto flex h-auto max-w-[1900px] flex-col items-center justify-center gap-14 text-center">
//         <motion.section
//           className="text-center text-3xl font-bold sm:text-4xl lg:text-5xl"
//           initial={{ opacity: 0, y: 150 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           // animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <TitleAnimeGradient
//             title="Photographie et Vidéo : Sublimez Vos Moments"
//             className="md:justify-center"
//             classNameH1="2xl:text-5xl max-w-[1200px] mx-auto"
//           />
//         </motion.section>

//         {/* Texte d'introduction */}
//         <motion.p
//           className="max-w-5xl text-center text-lg text-gray-300 sm:text-xl 2xl:text-2xl 2xl:font-semibold"
//           initial={{ opacity: 0, y: 150 }}
//           // animate={{ opacity: 1, y: 0 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//         >
//           Nous vous proposons des services de photographie et de vidéo
//           professionnels pour capturer vos moments les plus précieux. Que ce
//           soit pour des événements, des projets personnels ou professionnels,
//           notre équipe met son expertise à votre service pour créer des contenus
//           visuels uniques et mémorables. Faites confiance à notre savoir-faire
//           pour sublimer vos idées.
//         </motion.p>

//         {/* Cards des services */}
//         {/* <section className="grid w-full grid-cols-1 gap-10 pt-16 sm:grid-cols-2 lg:grid-cols-3 2xl:pt-20">
//           {services.map((service) => (
//             <motion.section
//               key={service.id}
//               className="group relative cursor-pointer overflow-hidden rounded-lg bg-zinc-800/40 shadow-lg 2xl:h-[350px] 2xl:w-[500px]"
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, amount: 0.5 }}
//               transition={{
//                 duration: 0.6,
//                 ease: "easeOut",
//                 delay: service.id * 0.2,
//               }}
//             >
//               <figure className="relative h-64 w-full">
//                 <Image
//                   src={service.imageSrc}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-500 group-hover:scale-110"
//                 />
//               </figure>

//               <aside className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-5 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100 2xl:gap-5">
//                 <h2 className="text-xl font-bold 2xl:text-3xl">
//                   {service.title}
//                 </h2>
//                 <p className="mt-2 text-sm text-gray-300 2xl:text-xl">
//                   {service.description}
//                 </p>
//               </aside>
//             </motion.section>
//           ))}
//         </section> */}
//         <section className="h-[300px] w-full">
//           <CarouselEmbla items={services}  loop={true} />
//           {/* <CarouselSwiperJS /> */}
//         </section>
//       </section>
//     </section>
//   );
// }

"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const sliderServicesPhotographie = [
  {
    id: 1,
    title: "Photographie Professionnelle",
    description:
      "Capturez vos moments précieux avec des clichés de haute qualité. Nous réalisons des séances photo pour événements, portraits, produits et bien plus.",
    imageSrc: "/images/pexel1.webp",
  },
  {
    id: 2,
    title: "Vidéo Créative",
    description:
      "Réalisez des vidéos captivantes pour vos projets personnels ou professionnels. Nous mettons en valeur vos idées avec des prises de vue dynamiques.",
    imageSrc: "/images/pexel2.webp",
  },
  {
    id: 3,
    title: "Montage Vidéo",
    description:
      "Sublimez vos contenus avec un montage vidéo professionnel. Nous transformons vos séquences en histoires uniques et impactantes.",
    imageSrc: "/images/pexel3.webp",
  },
];

export default function ServicePhotographie() {
  return (
    <section className="relative bg-gradient-to-b from-black via-neutral-800 to-black px-6 py-20 text-white">
      {/* Titre principal */}
      <motion.section
        className="mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl font-extrabold tracking-wide sm:text-5xl lg:text-6xl">
          Sublimez Vos Moments avec Nos Services
        </h1>
        <p className="mt-6 text-lg text-gray-300 sm:text-xl lg:text-2xl">
          Découvrez l&apos;excellence en photographie, vidéo créative et montage
          professionnel. Nous transformons vos idées en œuvres visuelles
          uniques et mémorables.
        </p>
      </motion.section>

      {/* Services */}
      <section className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {sliderServicesPhotographie.map((service) => (
          <motion.div
            key={service.id}
            className="group relative overflow-hidden rounded-xl bg-neutral-800/60 shadow-lg transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: service.id * 0.2 }}
          >
            <figure className="relative h-64 w-full">
              <Image
                src={service.imageSrc}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-5 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Call to Action */}
      <motion.div
        className="mt-20 flex justify-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <a
          href="#contact"
          className="rounded-full animate-bg-gradient px-8 py-4 text-lg font-semibold text-white shadow-lg transition-transform duration-300 hover:scale-110"
        >
          Contactez-nous
        </a>
      </motion.div>
    </section>
  );
}