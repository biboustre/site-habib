import React from "react";
interface CompetenceCardProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

export default function CompetenceCard({
  text,
  icon,
  className,
}: CompetenceCardProps) {
  return (
    <section
      className={`flex h-56 w-full flex-col items-center gap-9 rounded-xl bg-gray-800 pt-7 ${className}`}
    >
      <section className="">
        <h1 className="text-6xl text-white">{icon}</h1>
      </section>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-white">{text}</p>
        <hr className="bgPrimaryStack h-px w-6" />
      </section>
    </section>
  );
}
