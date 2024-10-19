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
      className={`flex h-56 w-full flex-col items-center gap-9 bg-zinc-900 pt-7 ${className}`}
    >
      <section className="">
        <h1 className="text-6xl text-amber-400">{icon}</h1>
      </section>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-white">{text}</p>
        <hr className="h-px w-6 bg-amber-400" />
      </section>
    </section>
  );
}
