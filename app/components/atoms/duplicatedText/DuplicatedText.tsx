import React from "react";

interface DuplicatedTextProps {
  text: string;
  className?: string;
  duplicatedClassName?: string;
}

export default function DuplicatedText({
  text,
  className = "",
  duplicatedClassName = "",
}: DuplicatedTextProps) {
  return (
    <h1
      className={`relative z-10 pt-1 text-center  text-[35px] font-bold text-white  sm:text-[65px] 2xl:text-7xl ${className}`}
    >
      {text}
      <span
        className={`absolute inset-0 -top-1 z-[-1] text-[93px] font-bold opacity-10 md:-top-12 md:text-[80px] ${duplicatedClassName}`}
        aria-hidden="true"
      >{text}</span>
    </h1>
  );
}