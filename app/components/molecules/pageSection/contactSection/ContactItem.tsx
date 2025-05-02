"use client";
import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ContactItem({
  icon,
  title,
  description,
}: ContactItemProps) {
  return (
    <section className="flex w-32 flex-col items-center text-center  ">
      <figure
        className={`icon-gradient mb-4 animate-bounce cursor-pointer rounded-full p-10 text-3xl transition-all duration-300 hover:scale-150 2xl:text-4xl`}
      >
        {icon}
      </figure>
      <h3 className="font-bold 2xl:text-2xl">{title}</h3>
      <p className="mt-2 text-gray-400 2xl:text-xl">{description}</p>
    </section>
  );
}
