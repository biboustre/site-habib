import React from "react";

interface CardStatsProps {
  value: number | string;
  label: string;
}

const CardStats: React.FC<CardStatsProps> = ({ value, label }) => {
  return (
    <section className="flex w-48 cursor-pointer flex-col items-center  rounded-lg bg-slate-700/80 py-7 text-white duration-300 hover:scale-125 lg:w-56">
      <span className=" text-3xl font-bold">{value}</span>
      <span className="mt-2 text-lg">{label}</span>
    </section>
  );
};

export default CardStats;
