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
      className={`relative z-10 text-center text-[45px] font-bold sm:text-[65px] ${className}`}
    >
      {text}
      <span
        className={`absolute inset-0 -top-2 z-[-1] text-[33px] font-bold opacity-10 md:text-[50px] ${duplicatedClassName}`}
        aria-hidden="true"
      >
        {text}
      </span>
    </h1>
  );
}
