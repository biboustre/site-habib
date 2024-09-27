import React from "react";

interface ServiceDescriptionProps {
  text: string;
  title?: string;
}

export default function ServiceDescription({
  text,
  title,
}: ServiceDescriptionProps) {
  return (
    <>
      <section className="md:bg-zinc-400/10 md:p-5 rounded-xl space-y-10 text-center">
        <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
        <p className="md:p-5">{text}</p>
      </section>
      <hr className="" />
    </>
  );
}
