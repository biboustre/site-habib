"use client";

import { usePathname } from "next/navigation";
import Header from "../header/Header";
import HamburgerMenu from "../hamburgerMenu/HamburgerMenu";

export default function ClientHeader() {
  const pathname = usePathname(); // Utiliser usePathname pour obtenir la route actuelle

  // Déterminer la classe de couleur de fond du header en fonction de la route actuelle
  const headerBgClass = pathname === "/" ? "bgPrimary" : "bgHeaderStack";

  return (
    <Header className={headerBgClass}>
      <HamburgerMenu />
    </Header>
  );
}