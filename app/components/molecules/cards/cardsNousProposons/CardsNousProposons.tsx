import React from "react";

interface NousProposonsCardProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
  title: string;
}

export default function CardsNousProposons({
  text,
  icon,
  className,
  title,
}: NousProposonsCardProps) {
  return (
    <section
      className={`flex h-[550px] w-auto flex-col items-center justify-between gap-9 rounded-xl bg-neutral-900/60 px-2 py-10 md:size-[550px] md:rounded-full 2xl:size-[800px] duration-300 hover:scale-95 cursor-pointer ${className}`}
    >
      <figure className="text-5xl text-slate-100 md:text-6xl 2xl:text-8xl ">
        {icon}
      </figure>
      <h1 className="animate-text-gradient max-w-[400px] text-center text-2xl font-bold tracking-wide md:text-3xl 2xl:max-w-[600px] 2xl:text-4xl">
        {title}
      </h1>
      <section className="flex max-w-[400px] flex-col items-center justify-center gap-3 2xl:max-w-[600px]">
        <p className="text-center text-base tracking-wider text-slate-100 sm:text-base 2xl:text-2xl">
          {text}
        </p>
      </section>
      <hr className="animate-text-gradient h-10 w-6" />
    </section>
  );
}
