import React from "react";

interface ServiceDescriptionProps {
  text: string;
}

export default function ServiceDescription({ text }: ServiceDescriptionProps) {
  return (
    <>
      <section className="">
        <p className="">{text}</p>
      </section>
      <hr className="" />
    </>
  );
}
