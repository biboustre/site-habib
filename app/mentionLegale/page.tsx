"use client";

import React from "react";
import { motion } from "framer-motion";
import { textMentionLegale } from "@/app/data/mention-legale-data";

interface SectionCardProps {
  title: string;
  content: React.ReactNode;
}

export const SectionCard: React.FC<SectionCardProps> = ({ title, content }) => {
  return (
    <div className="rounded-lg bg-neutral-800/60 p-6 shadow-lg transition-shadow duration-500 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-gray-300">{content}</div>
    </div>
  );
};

export default function MentionLegale() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black px-6 py-40 text-white">
      {/* Titre principal */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="animate-text-gradient mb-5 text-4xl font-extrabold md:text-6xl">
          Mentions Légales
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Toutes les informations légales concernant votre activité.
        </p>
      </motion.section>

      {/* Contenu */}
      <motion.section
        className="mx-auto mt-12 max-w-4xl space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {textMentionLegale.map((section, index) => (
          <SectionCard
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </motion.section>
    </main>
  );
}
