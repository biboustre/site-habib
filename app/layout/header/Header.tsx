import React from "react";
import LogoMain from "../../components/atoms/logo/LogoMain";
import NavHeader from "../../components/atoms/navigation/navHeader/NavHeader";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={`fixed inset-0 z-50 flex h-[100px] items-center justify-between  px-5 text-white shadow-xl md:px-20 xl:px-40 ${className}`}
    >
      <LogoMain />
      <NavHeader />
      {children}
    </header>
  );
}
