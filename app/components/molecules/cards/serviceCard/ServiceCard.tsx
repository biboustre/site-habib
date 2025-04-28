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
      className={`flex h-[550px] w-auto flex-col items-center justify-between gap-9 rounded-xl bg-neutral-900/60 px-2 py-10 md:size-[550px] md:rounded-full ${className}`}
    >
      <h1 className="text-5xl text-slate-100 md:text-6xl 2xl:text-8xl ">
        {icon}
      </h1>
      <h2 className="colorPrimaryStack max-w-[400px] text-center text-2xl font-bold tracking-wide md:text-3xl">
        {title}
      </h2>
      <section className="flex max-w-[400px] flex-col items-center justify-center gap-3">
        <p className="text-center text-base tracking-wider text-slate-100 sm:text-base 2xl:text-xl">
          {text}
        </p>
      </section>
      <hr className="bgPrimaryStack h-px w-6" />
    </section>
  );
}
