import React from "react";
import LogoMain from "../../atoms/logo/LogoMain";
import NavHeader from "../../atoms/navHeader/NavHeader";
// import SocialsLinks from "../../atoms/socialsLinks/SocialsLinks";

interface HeaderProps {
  children: React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="bgPrimary fixed z-50 flex h-[100px]  w-full items-center  justify-between px-3 text-white shadow-xl md:px-10">
      <LogoMain />
      <NavHeader />
      {children}
      {/* <nav>
        <SocialsLinks />
      </nav> */}
    </header>
  );
}
