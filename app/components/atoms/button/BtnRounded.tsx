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
      className={`rounded-full px-8 py-3 text-lg font-semibold tracking-widest text-black ${className}`}
    >
      {text}
    </Link>
  );
}
