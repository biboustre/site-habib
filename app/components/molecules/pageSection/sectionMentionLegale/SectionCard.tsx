import React from "react";

interface SectionCardProps {
  title: string;
  content: React.ReactNode;
}

const SectionCard: React.FC<SectionCardProps> = ({ title, content }) => {
  return (
    <div className="rounded-lg bg-neutral-800/60 p-6 shadow-lg transition-shadow duration-500 hover:shadow-xl">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <div className="mt-4 text-gray-300">{content}</div>
    </div>
  );
};

export default SectionCard;