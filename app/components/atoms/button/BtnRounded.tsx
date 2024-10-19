import Link from "next/link";
import React from "react";

interface BtnRoundedProps {
  text: string;
  href: string;
}

export default function BtnRounded({ text, href }: BtnRoundedProps) {
  return (
    <Link href={href} className="rounded-full bg-amber-500 px-8 py-3 text-lg font-semibold text-white hover:bg-amber-400">
      {text}
    </Link>
  );
}
