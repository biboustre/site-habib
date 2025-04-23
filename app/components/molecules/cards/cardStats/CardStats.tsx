import React from "react";

interface CardStatsProps {
  value: number | string;
  label: string;
}

const CardStats: React.FC<CardStatsProps> = ({ value, label }) => {
  return (
    <section className="bgFooter flex w-48 flex-col items-center rounded-lg py-7 text-white lg:w-56">
      <span className="colorPrimaryStack text-3xl font-bold">{value}</span>
      <span className="mt-2 text-lg">{label}</span>
    </section>
  );
};

export default CardStats;
