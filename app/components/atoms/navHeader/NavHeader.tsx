import React from "react";
import { usePathname } from "next/navigation";
import InternalLink from "../links/internalLink/InternalLink";
import SocialsLinks from "../socials/socialsLinks/SocialsLinks";

export default function NavHeader() {
  const pathname = usePathname(); // Utiliser usePathname pour obtenir la route actuelle

  // Définir les liens en fonction de la route actuelle
  const links =
    pathname === "/stackTechnic"
      ? [
          { href: "/link1", name: "Link 1" },
          { href: "/link2", name: "Link 2" },
          { href: "/link3", name: "Link 3" },
        ]
      : [
          { href: "#services", name: "Services" },
          { href: "#a-propos", name: "A propos" },
          { href: "#portfolio", name: "Portfolio" },
          { href: "#contact", name: "Contact" },
        ];

  return (
    <nav className="hidden gap-10 lg:flex">
      {" "}
      {/* Cache les liens sur les écrans mobiles */}
      <ul className="flex gap-5 text-xl font-bold text-white">
        {links.map((link) => (
          <li key={link.href} className="underline-animation">
            <InternalLink href={link.href} name={link.name} />
          </li>
        ))}
      </ul>
      <SocialsLinks />
    </nav>
  );
}
