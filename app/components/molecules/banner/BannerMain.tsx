import React from "react";
import { motion } from "framer-motion";
import { BannerMainProps } from "../../../types";
import BtnRounded from "../../atoms/button/BtnRounded";

export default function BannerMain({ title, text }: BannerMainProps) {
  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 150 }, // Position initiale (invisible et décalée vers le bas)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Durée de l'animation
        ease: "easeOut", // Courbe d'animation
        delayChildren: 0.3, // Délai avant l'apparition des enfants
        staggerChildren: 0.2, // Décalage entre les enfants
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 120 }, // Position initiale des enfants
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      id="top"
      className="parallaxe relative flex h-screen flex-col justify-center overflow-hidden md:pl-[10%]"
      style={{
        backgroundImage: "url('/images/pc-large.webp')",
      }}
    >
      {/* Effet lumineux */}
      <div className="moving-light">
        <div className="sparkle-container">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="sparkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Contenu avec animation */}
      <motion.section
        className="z-10 lg:mt-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="mb-5 text-center text-6xl font-extrabold text-white md:text-start md:text-7xl lg:text-7xl 2xl:text-9xl"
          variants={childVariants}
        >
          {title}
        </motion.h1>
        {text && (
          <motion.h2
            className="mb-10 text-center text-3xl font-extrabold tracking-wider text-white md:text-start md:text-4xl lg:text-5xl 2xl:text-7xl"
            variants={childVariants}
          >
            {text}
          </motion.h2>
        )}
        <motion.section
          className="flex justify-center md:justify-start"
          variants={childVariants}
        >
          <BtnRounded
            href="#contact"
            className="btn-gradient hover-text-white mt-10 bg-slate-700/80 py-6 text-center text-black shadow-2xl shadow-slate-900 duration-300 hover:scale-95 hover:shadow-none"
            text="Contactez-nous"
          />
        </motion.section>
      </motion.section>
    </section>
  );
}
