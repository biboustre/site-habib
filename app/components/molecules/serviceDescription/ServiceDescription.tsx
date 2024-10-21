import React from "react";

interface ServiceDescriptionProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
  title: string;
}

export default function ServiceDescription({
  text,
  icon,
  className,
  title,
}: ServiceDescriptionProps) {
  return (
    <section
      className={`bgFooter flex w-full flex-col items-center justify-between gap-9 p-5  ${className}`}
    >
      <h1 className="white text-5xl md:text-6xl">{icon}</h1>
      <h2 className="colorPrimaryStack text-center text-2xl font-bold md:text-3xl ">
        {title}
      </h2>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-center text-base tracking-wider text-white sm:text-lg">
          {text}
        </p>
      </section>
      <hr className="bgPrimaryStack h-px w-6" />
    </section>
  );
}
