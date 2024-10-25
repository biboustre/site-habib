import React from "react";

interface ServiceCardProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
  title: string;
}

export default function ServiceCard({
  text,
  icon,
  className,
  title,
}: ServiceCardProps) {
  return (
    <section
      className={`bgFooter flex w-full flex-col items-center justify-between gap-9 p-5 2xl:h-[700px] ${className}`}
    >
      <h1 className="white text-5xl md:text-6xl 2xl:text-8xl">{icon}</h1>
      <h2 className="colorPrimaryStack text-center text-2xl font-bold md:text-3xl 2xl:text-5xl">
        {title}
      </h2>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-center text-base tracking-wider text-white sm:text-lg 2xl:text-3xl">
          {text}
        </p>
      </section>
      <hr className="bgPrimaryStack h-px w-6" />
    </section>
  );
}
