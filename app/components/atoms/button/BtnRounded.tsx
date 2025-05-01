import Link from "next/link";
import React from "react";

interface BtnRoundedProps {
  text: string;
  href: string;
  className?: string;
}

export default function BtnRounded({ text, href, className }: BtnRoundedProps) {
  return (
    <Link
      href={href}
      className={`animate-bg-gradient rounded-full px-8 py-4 text-lg font-semibold tracking-widest text-white transition duration-300 hover:scale-110 hover:text-white ${className}`}
    >
      {text}
    </Link>
  );
}
