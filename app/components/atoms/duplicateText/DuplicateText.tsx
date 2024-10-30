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
      <span dangerouslySetInnerHTML={{ __html: text }} />
      <span
        className={`absolute inset-0 -top-2 z-[-1] text-[33px] font-bold opacity-10 md:text-[50px] ${duplicatedClassName}`}
        aria-hidden="true"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </h1>
  );
}

// <h1
//   className={`relative z-10 text-center text-[45px] font-bold sm:text-[65px] 2xl:text-7xl ${className}`}
//   dangerouslySetInnerHTML={{ __html: text }}
// >
//   {text}
//   <span
//     className={`absolute inset-0 -top-2 z-[-1] text-[33px] font-bold opacity-10 md:text-[50px] ${duplicatedClassName}`}
//     aria-hidden="true"
//     dangerouslySetInnerHTML={{ __html: text }}
//   >
//     {text}
//   </span>
// </h1>
