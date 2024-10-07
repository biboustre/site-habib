"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import HamburgerMenu from "../../features/hamburgerMenu/HamburgerMenu";

export default function ClientHeader() {
  const pathname = usePathname(); 

  const headerBgClass = pathname === "/" ? "bgPrimary" : "bgHeaderStack";

  return (
    <Header className={headerBgClass}>
      <HamburgerMenu />
    </Header>
  );
}
