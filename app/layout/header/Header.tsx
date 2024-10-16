import React from "react";
import LogoMain from "../../components/atoms/logo/LogoMain";
import NavHeader from "../../components/atoms/navigation/NavHeader";
// import SocialsLinks from "../../atoms/socialsLinks/SocialsLinks";

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

export default function Header({ children, className }: HeaderProps) {
  return (
    <header
      className={`fixed z-50 flex h-[100px]  w-full items-center  justify-between px-3 text-white shadow-xl md:px-10 ${className}`}
    >
      <LogoMain />
      <NavHeader />
      {children}
    </header>
  );
}
