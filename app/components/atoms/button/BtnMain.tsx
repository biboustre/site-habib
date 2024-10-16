import React from "react";
import Link from "next/link";

interface BtnMainProps {
  label: string;
  onClick?: () => void;
  classNameBtn?: string;
  href?: string;
}

export default function BtnMain({
  label,
  onClick,
  classNameBtn,
  href,
}: BtnMainProps) {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`btnMain w-64 rounded-xl px-4 py-6 font-bold uppercase tracking-widest text-white   ${classNameBtn}`}
    >
      {label}
    </button>
  );

  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
}
