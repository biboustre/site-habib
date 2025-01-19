// import React from "react";
// import Image from "next/image";
// import { cardRecruteur } from "@/app/data/cardRecruteurData";
// import DuplicatedText from "../../../atoms/duplicatedText/DuplicatedText";
// import CardStats from "../../cards/cardStats/CardStats";
// import BtnRounded from "../../../atoms/button/BtnRounded";

// const RecruteurSection: React.FC = () => {
//   return (
//     <section className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black pt-10 text-white sm:gap-40 xl:pt-32">
//       <DuplicatedText
//         className="mt-10 pt-3  text-[35px] text-white  sm:text-[65px]"
//         text="Vous êtes recruteur ?"
//       />
      
//       <section className="relative h-3/5 w-full">
//         <Image
//           src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
//           alt="photo de profil"
//           layout="fill"
//           objectFit="cover"
//         />

//         <section className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 space-y-8 text-center">
//           <h2 className="text-4xl font-extrabold md:text-5xl">
//             Je suis <span className="colorPrimaryStack">Disponible</span> en
//             freelance/CDI
//           </h2>
//           <p className="mx-auto max-w-md font-semibold md:text-lg">
//             Que ce soit en CDI ou en freelance, je serais ravi de collaborer
//             avec une entreprise pour apporter mes compétences en développement
//             web. Passionné et engagé, je suis prêt à relever de nouveaux défis
//             et à contribuer activement à vos projets.
//           </p>
//           <section className="flex justify-center md:space-x-10">
//             <BtnRounded
//               className="bgPrimaryStack text-sm"
//               text="Contactez-moi"
//               href="#contact"
//             />
//             <BtnRounded
//               className="bgPrimaryStack text-sm"
//               text="Portolio"
//               href="/stackTechnic"
//             />
//           </section>
//         </section>

//         <section className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center  ">
//           {cardRecruteur.map((card, id) => (
//             <CardStats key={id} value={card.value} label={card.label} />
//           ))}
//         </section>
//       </section>
//     </section>
//   );
// };

// export default RecruteurSection;


'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import DuplicatedText from "../../../atoms/duplicatedText/DuplicatedText";
import CardStats from "../../cards/cardStats/CardStats";
import BtnRounded from "../../../atoms/button/BtnRounded";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";

const RecruteurSection: React.FC = () => {
  
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } }
  };

  return (
    <AnimatedSection className="min-h-auto space-y-36">
      <motion.section variants={itemVariants}>
        <DuplicatedText
          className="mt-10 pt-10 text-[35px] text-white sm:text-[65px]"
          duplicatedClassName="pt-10"
          text="Vous êtes recruteur ?"
        />
      </motion.section>
      <motion.section className="relative h-[550px]  w-full" variants={itemVariants}>
        <Image
          src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
          alt="photo de profil"
          layout="fill"
          objectFit="cover"
        />

        <motion.section
          className="absolute inset-0 z-10 flex w-full flex-col justify-center gap-10 text-center"
          variants={itemVariants}
        >
          <section className="space-y-10 pt-10 text-white">
            <h2 className="text-2xl font-extrabold md:text-4xl xl:text-5xl">
              Vous avez un{" "}
              <span className="colorPrimaryStack ">PROJET AMBITIEUX ?</span>{" "}
              Nous sommes prêts à vous accompagner dans votre transformation
              digitale
            </h2>
            <p className="mx-auto max-w-md font-semibold md:text-lg">
              Notre mission est de vous aider à développer des outils
              performants, parfaitement adaptés à vos besoins, et de vous
              accompagner vers la réussite de vos projets web et mobile.
            </p>
          </section>

          <section className="flex justify-center md:space-x-10">
            <BtnRounded
              className="bgPrimaryStack text-sm"
              text="Contactez-moi"
              href="#contact"
            />
            <BtnRounded
              className="bgPrimaryStack text-sm"
              text="Portolio"
              href="/stackTechnic"
            />
          </section>
        </motion.section>

        <motion.section
          className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center"
          variants={itemVariants}
        >
          {cardRecruteur.map((card, id) => (
            <CardStats key={id} value={card.value} label={card.label} />
          ))}
        </motion.section>
      </motion.section>
    </AnimatedSection>
  );
};

export default RecruteurSection;