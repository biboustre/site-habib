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
      <hr className="" />
      <section className="md:bg-zinc-400/1 flex flex-col justify-between gap-10 rounded-xl text-center ">
        <h3 className="text-2xl font-bold md:text-3xl">{title}</h3>
        <p className="md:px-5 md:text-xl md:font-normal">{text}</p>
      </section>
    </>
  );
}
