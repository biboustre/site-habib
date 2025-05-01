"use client";

import Link from "next/link";
import React from "react";
// import { usePathname } from 'next/navigation';
interface InternalLinkProps {
  href: string;
  name?: string;
  isActive?: boolean;
  onClick: () => void;
}

export default function InternalLink({
  href,
  name,
  isActive,
  onClick,
}: InternalLinkProps) {
  return (
    <Link
      onClick={onClick}
      className={`underline-animation tracking-wider transition-colors duration-300 ${
        isActive ? "active-link" : "text-white"
      } animate-text-gradient `}
      href={href}
    >
      {name}
    </Link>
  );
}
