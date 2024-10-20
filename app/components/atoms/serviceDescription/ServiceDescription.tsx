import React from "react";

interface ServiceDescriptionProps {
  text: string;
  icon: React.ReactNode;
  className?: string;
}

export default function ServiceDescription({
  text,
  icon,
  className,
}: ServiceDescriptionProps) {
  return (
    <section
      className={`flex h-56 w-full flex-col items-center gap-9 bg-gray-800 pt-7 ${className}`}
    >
      <section className="">
        <h1 className="colorPrimaryStack text-6xl">{icon}</h1>
      </section>
      <section className="flex flex-col items-center justify-center gap-3">
        <p className="text-xl text-white">{text}</p>
        <hr className="bgPrimaryStack h-px w-6" />
      </section>
    </section>
  );
}
