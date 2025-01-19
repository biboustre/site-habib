import React from "react";
import Image from "next/image";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import BtnRounded from "@/app/components/atoms/button/BtnRounded";
import CardStats from "@/app/components/molecules/cards/cardStats/CardStats";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import { motion } from "framer-motion";

export default function AboutSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 70 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, delay: 0.8 } },
  };

  return (
    // <AnimatedSection>
    // <motion.section
    //   id="a-propos"
    //   className="flex h-screen scroll-mt-[100px] flex-col  gap-20 bg-black py-0 text-white sm:gap-40"
    //   variants={itemVariants}
    // >
    //   <DuplicatedText
    //     className="mx-auto pt-11 text-[35px] sm:text-[44px] md:pt-[55px] xl:max-w-[1400px]
    //     "
    //     duplicatedClassName="top-4 pt-12 text-[44px] sm:text-[65px] sm:text-[40px] hidden lg:block"
    //     text="Nous créons et améliorons les produits Web et mobiles"
    //   />
    //   {/*  <Image> avec layout="fill" nécessite que son parent soit en relative et dimensions explicites. */}
    //   <motion.section className="relative h-3/5 w-full" variants={itemVariants}>
    //     <Image
    //       src="/images/IMG-PAYSAGE-ENEIGER-2.webp"
    //       alt="photo de profil"
    //       layout="fill"
    //       objectFit="cover"
    //     />

    //     <section className="absolute left-1/2 top-1/2 z-10 w-full -translate-x-1/2 -translate-y-1/2 space-y-8 text-center sm:mt-5 2xl:space-y-20">
    //       <h2 className="text-2xl font-extrabold md:text-4xl">
    //         Vous avez un{" "}
    //         <span className="colorPrimaryStack ">PROJET AMBITIEUX ?</span> Nous
    //         sommes prêts à vous accompagner dans votre transformation digitale
    //       </h2>
    //       <p className="mx-auto max-w-md text-[17px] font-bold md:text-lg">
    //         Notre mission est de vous aider à développer des outils performants,
    //         parfaitement adaptés à vos besoins, et de vous accompagner vers la
    //         réussite de vos projets web et mobile.
    //       </p>
    //       <section className="flex justify-center md:space-x-10">
    //         <BtnRounded
    //           className="bgPrimaryStack text-sm"
    //           text="Contactez-moi"
    //           href="#contact"
    //         />
    //         <BtnRounded
    //           className="bgPrimaryStack text-sm"
    //           text="Portolio"
    //           href="/stackTechnic"
    //         />
    //       </section>
    //     </section>

    //     <motion.section className="absolute top-[-70px] hidden w-full gap-8 sm:flex md:justify-center  ">
    //       {cardRecruteur.map((card, id) => (
    //         <CardStats key={id} value={card.value} label={card.label} />
    //       ))}
    //     </motion.section>
    //   </motion.section>
    // </motion.section>
    // </AnimatedSection>

    <AnimatedSection className="min-h-auto space-y-36">
      <motion.section variants={itemVariants}>
        <DuplicatedText
          className="mx-auto pt-11 text-[35px] sm:text-[44px] md:pt-[55px] xl:max-w-[1400px]"
          duplicatedClassName="pt-10"
          text="Nous créons et améliorons les produits Web et mobiles"
        />
      </motion.section>
      <motion.section className="relative h-[550px] w-full" variants={itemVariants}>
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
}
