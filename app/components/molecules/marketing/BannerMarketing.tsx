import React from "react";
import BtnRounded from "../../atoms/button/BtnRounded";
import CardStats from "../cards/cardStats/CardStats";
import { motion } from "framer-motion";

interface BannerMarketingProps {
  title: (string | { text: string; className?: string })[];
  subtitle: string;
  text: string;
  videoSrc?: string; // Chemin de la vidéo
  imgSrc?: string; // Chemin de l'image de fond (optionnel)
  buttons: { text: string; href: string }[];
  stats?: { value: string; label: string }[];
  id?: string; // ID de la section (optionnel)
}

const BannerMarketing: React.FC<BannerMarketingProps> = ({
  title,
  subtitle,
  videoSrc,
  imgSrc,
  buttons,
  stats,
  id,
  text,
}) => {
  // Variantes pour l'animation
  const containerVariants = {
    hidden: { opacity: 0, y: 250 }, // Position initiale (invisible et décalée vers le bas)
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1, // Durée de l'animation
        ease: "easeOut", // Courbe d'animation
      },
    },
  };
  return (
    <motion.section
    id={id}
      className="bg-gradient-black  flex h-auto flex-col gap-10 pt-10 sm:gap-32 xl:gap-48"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }} // L'animation se déclenche lorsque l'élément est visible
      variants={containerVariants}
    >
      {/* Texte principal */}
      <h1 className="animate-text-gradient btn-gradient hover-text-white mx-auto max-w-[1000px] cursor-pointer rounded-xl px-3 py-10 text-center text-4xl font-extrabold duration-500 hover:scale-90 md:px-10 lg:text-6xl ">
        {text}
      </h1>

      {/* Section avec la vidéo de fond et le contenu */}
      <section className="py- relative h-auto bg-slate-800/50">
        {/* Vidéo en arrière-plan */}
        {videoSrc && (
          <video
            className="absolute inset-0 size-full object-cover"
            // src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        )}

        {/* Effet lumineux */}

        {/* Contenu par-dessus la vidéo */}
        <section
          className="parallaxe relative flex size-full flex-col justify-center gap-20 bg-slate-800/50 py-10 md:h-auto md:gap-16 "
          style={{ backgroundImage: `url('${imgSrc}')` }}
        >
          {stats && (
            <section className="absolute top-[-75px] hidden w-full gap-8 sm:flex md:justify-center">
              {stats.map((stat, index) => (
                <CardStats key={index} value={stat.value} label={stat.label} />
              ))}
            </section>
          )}

          <section className="space-y-10 px-2 text-center text-white sm:pt-20 md:px-0">
            <h2 className="mx-auto max-w-[890px] text-2xl font-extrabold sm:text-4xl 2xl:max-w-[1300px] 2xl:text-5xl">
              {title.map((part, index) =>
                typeof part === "string" ? (
                  <span key={index}>{part}</span>
                ) : (
                  <span
                    key={index}
                    className="animate-text-gradient uppercase 2xl:leading-[65px]"
                  >
                    {part.text}
                  </span>
                )
              )}
            </h2>
            <p className="mx-auto max-w-md cursor-pointer rounded-2xl bg-slate-700/70 p-4 text-lg font-semibold duration-300 hover:scale-110 2xl:max-w-xl 2xl:text-2xl">
              {subtitle}
            </p>
          </section>

          {/* Boutons */}
          <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:space-x-10">
            {buttons.map((button, index) => (
              <BtnRounded
                key={index}
                className="btn-gradient animate-pulse bg-slate-700/70 text-lg"
                text={button.text}
                href={button.href}
              />
            ))}
          </section>
        </section>
      </section>
    </motion.section>
  );
};

export default BannerMarketing;
