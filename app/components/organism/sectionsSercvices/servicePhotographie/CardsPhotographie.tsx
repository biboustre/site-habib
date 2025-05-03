import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CardsPhotographieProps {
  title: string;
  description: string;
  imageSrc?: string;
  delay?: number;
  videoSrc?: string;
}

const CardsPhotographie: React.FC<CardsPhotographieProps> = ({
  title,
  description,
  imageSrc,
  delay = 0,
  videoSrc,
}) => {
  return (
    <motion.div
      className="group relative cursor-pointer overflow-hidden rounded-xl bg-neutral-800/60 shadow-lg transition-transform duration-500 hover:scale-105"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay,
      }}
    >
      {videoSrc ? (
        <video
          className="h-full object-cover transition-transform duration-500 group-hover:scale-110"
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      ) : (
        <figure className="relative h-64 w-full 2xl:h-80">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
        </figure>
      )}

      <figcaption className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 p-5 text-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <h3 className="text-2xl font-bold text-white 2xl:text-4xl">{title}</h3>
        <p className="text-md mt-2 max-w-[500px] font-mono text-gray-300 2xl:mt-5 2xl:text-2xl">
          {description}
        </p>
      </figcaption>
    </motion.div>
  );
};

export default CardsPhotographie;
