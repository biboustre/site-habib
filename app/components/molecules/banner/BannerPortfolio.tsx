"use client";

import React from "react";
import BtnRounded from "../../atoms/button/BtnRounded";
import { motion } from "framer-motion";

export default function BannerPortfolio() {
  const textBtn = [
    { id: 1, text: "Projets", href: "#projets" },
    { id: 2, text: "Compétences", href: "#competences" },
  ];

  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 150 }, 
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, 
        ease: "easeOut", 
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
      className="parallaxe flex min-h-screen flex-col items-center justify-center  text-white lg:items-start  lg:gap-14  "
      style={{ backgroundImage: "url('/images/2-pc2.webp')" }}
    >
      {/* <Image
        src="/images/pc-large.jpg"
        alt="Image de fond"
        fill
        className=" -z-10 object-cover"
        loading="lazy"
      {/* <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 -z-10 size-full object-cover"
      >
        <source src="/video/video18.mp4" type="video/mp4" />
      </video> */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex min-h-screen w-full flex-col  items-center justify-center gap-20 bg-black/30 lg:items-start lg:gap-14 lg:px-[15%] 2xl:gap-28 "
      >
        <motion.section variants={childVariants} className="space-y-10 2xl:space-y-14">
          <motion.h1
            variants={childVariants}
            className="text-center text-5xl font-bold md:text-start md:text-[66px] 2xl:text-8xl"
          >
            Je suis{" "}
            <span className="animate-text-gradient">
              Habib <br /> de Web&apos;
            </span>{" "}
            <span className="text-white">ibou</span>
          </motion.h1>
          <p className="text-center text-3xl font-semibold tracking-wide lg:text-start 2xl:text-5xl">
            Développeur <span className="animate-text-gradient">front-end</span>{" "}
            <br />
            React, <span className="animate-text-gradient">NextJS</span> &
            Typescript
          </p>
        </motion.section>

        <motion.section variants={childVariants} className="space-x-4">
          {textBtn.map((btn, index) => (
            <BtnRounded
              key={btn.id}
              text={btn.text}
              href={btn.href}
              className={
                index === 0
                  ? "animate-bg-gradient"
                  : "btn-gradient border text-white"
              }
            />
          ))}
        </motion.section>
      </motion.section>
    </section>
  );
}
