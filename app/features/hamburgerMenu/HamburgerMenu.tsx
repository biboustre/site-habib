"use client";

import InternalLink from "@/app/components/atoms/navigation/links/internalLink/InternalLink";
import { usePathname } from "next/navigation";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // ouvre et ferme le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false); // Ferme le menu après un clic sur un lien
  };

  const pathname = usePathname(); //usePathname pour obtenir la route actuelle

  const links =
    pathname === "/portfolio"
      ? [
          { href: "/", name: "Home" },
          { href: "#competences", name: "Compétences" },
          { href: "#projets", name: "Projets" },
          { href: "#cv", name: "CV" },
          { href: "#contact", name: "Contact" },
          { href: "/mentionLegale", name: "Mentions Légales" },
        ]
      : [
          { href: "/portfolio", name: "Portfolio" },
          { href: "#a-propos", name: "A propos" },
          { href: "#graphique", name: "Graphique" },
          { href: "#developpement", name: "Dveloppement" },
          { href: "#creations", name: "Créations" },
          { href: "#photographie", name: "Photographie" },
          { href: "#contact", name: "Contact" },
        ];

  return (
    <div className="xl:hidden">
      {/* cache le menu écrans moyen et lg */}
      <button
        className="p-2 focus:outline-none"
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <div className="mb-1 h-1 w-6 bg-slate-100"></div>
        <div className="mb-1 h-1 w-6 bg-slate-100"></div>
        <div className="h-1 w-6 bg-slate-100"></div>
      </button>
      {isOpen && (
        <div className="fixed right-0 top-0 h-auto w-full translate-x-0 rounded-b-xl bg-zinc-950/95 pb-10 text-white transition-transform md:mt-3 md:w-1/2 md:rounded-b-none md:rounded-l-xl lg:w-1/3">
          <button
            className="absolute right-4 top-4 text-2xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="mt-10 px-6">
            {" "}
            <ul className=" font-bold text-white">
              {links.map((link) => (
                <li
                  key={link.href}
                  className="hover:colorPrimaryStack block py-2 text-lg"
                >
                  °{" "}
                  <InternalLink
                    onClick={closeMenu}
                    href={link.href}
                    name={link.name}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
