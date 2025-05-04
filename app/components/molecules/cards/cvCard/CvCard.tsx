import React from "react";

interface CvCardProps {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export default function CvCard({
  year,
  title,
  institution,
  description,
}: CvCardProps) {
  return (
    <section className="rounded-lg bg-gray-800 p-6 shadow-lg">
      <p className="text-xl font-bold text-white">{year}</p>
      <h3 className="animate-text-gradient mt-2 text-2xl font-bold text-white">
        {title}
      </h3>
      <p className="mt-1 text-sm uppercase text-gray-400">{institution}</p>
      <p className="mt-4 text-gray-300">{description}</p>
    </section>
  );
}
