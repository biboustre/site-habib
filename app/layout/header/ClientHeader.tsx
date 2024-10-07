"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import HamburgerMenu from "../../features/hamburgerMenu/HamburgerMenu";

export default function ClientHeader() {
  const pathname = usePathname(); //usePathname pour obtenir la route actuelle

  // Détermine la classe de couleur de fond du header en fonction de la route actuelle
  const headerBgClass = pathname === "/" ? "bgPrimary" : "bgHeaderStack";

  return (
    <Header className={headerBgClass}>
      <HamburgerMenu />
    </Header>
  );
}
