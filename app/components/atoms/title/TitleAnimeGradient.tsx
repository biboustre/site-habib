import React from "react";

function TitleAnimeGradient({
  title,
  className,
  classNameH1,
}: {
  title: string;
  className?: string;
  classNameH1?: string;
}) {
  return (
    <section
      className={`${className} btn-gradient flex cursor-pointer rounded-2xl transition duration-300 hover:scale-95`}
    >
      <h1 className={`animate-text-gradient hover-text-white max-w-[1000px] p-10 text-2xl font-bold 2xl:py-16 ${classNameH1}`}>
        {title}
      </h1>
    </section>
  );
}

export default TitleAnimeGradient;
