import React from "react";

interface CardStatsProps {
  value: number | string;
  label: string;
}

const CardStats: React.FC<CardStatsProps> = ({ value, label }) => {
  return (
    <section className="bgFooter w-48 flex flex-col items-center rounded-lg py-8 lg:w-56 text-white">
      <span className="colorPrimaryStack text-3xl font-bold">{value}</span>
      <span className="mt-2 text-lg">{label}</span>
    </section>
  );
};

export default CardStats;
