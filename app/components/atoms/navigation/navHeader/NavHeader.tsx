import React, { useState } from "react";
import { usePathname } from "next/navigation";
import InternalLink from "../../navigation/links/internalLink/InternalLink";
import SocialsLinks from "../../socials/socialsLinks/SocialsLinks";

export default function NavHeader() {
  const [activeLink, setActiveLink] = useState<string>("");

  const pathname = usePathname();

  const links =
    pathname === "/stackTechnic"
      ? [
          { href: "#competences", name: "Compétences" },
          { href: "#projets", name: "Projets" },
          { href: "#cv", name: "CV" },
          { href: "#contact", name: "Contact" },
        ]
      : [
          { href: "#services", name: "Services" },
          { href: "#a-propos", name: "A propos" },
          { href: "/stackTechnic", name: "Portfolio" },
          { href: "#creations", name: "Créations" },
          { href: "#contact", name: "Contact" },
        ];

  return (
    <nav className="hidden gap-10 lg:flex">
      {" "}
      {/* Cache les liens sur les écrans mobiles */}
      <ul className="flex gap-5 text-xl font-normal text-white">
        {links.map((link) => (
          <li key={link.href} className="underline-animation">
            <InternalLink
              href={link.href}
              name={link.name}
              isActive={activeLink === link.href}
              onClick={() => setActiveLink(link.href)}
            />
          </li>
        ))}
      </ul>
      <SocialsLinks />
    </nav>
  );
}
