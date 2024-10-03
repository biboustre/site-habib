import React from "react";
import LogoMain from "../../atoms/logo/LogoMain";
import NavHeader from "../../atoms/navHeader/NavHeader";
// import SocialsLinks from "../../atoms/socialsLinks/SocialsLinks";

export default function Header() {
  return (
    <header className="bgPrimary fixed z-50 flex h-[100px]  w-full items-center  justify-between px-10 text-white shadow-xl">
      <LogoMain />
      <NavHeader />
      {/* <nav>
        <SocialsLinks />
      </nav> */}
    </header>
  );
}
