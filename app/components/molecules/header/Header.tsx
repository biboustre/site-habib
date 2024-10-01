import React from "react";
import LogoMain from "../../atoms/logo/LogoMain";
import NavHeader from "../../atoms/navHeader/NavHeader";
// import SocialsLinks from "../../atoms/socialsLinks/SocialsLinks";

export default function Header() {
  return (
    <header className="flex justify-between items-center text-white px-10  shadow-md h-[100px]  w-full bg-gray-800 fixed z-50">
      <LogoMain />
      <NavHeader />
      {/* <nav>
        <SocialsLinks />
      </nav> */}
    </header>
  );
}
