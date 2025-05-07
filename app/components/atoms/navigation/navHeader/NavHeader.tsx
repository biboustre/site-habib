import React, { useState } from "react";
import { usePathname } from "next/navigation";
import InternalLink from "../../navigation/links/internalLink/InternalLink";
import SocialsLinks from "../../socials/socialsLinks/SocialsLinks";

export default function NavHeader() {
  const [activeLink, setActiveLink] = useState<string>("");
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState<boolean>(false); // État pour le menu déroulant

  const handleServicesClick = () => {
    setIsServicesMenuOpen((prev) => !prev); // Bascule l'état du menu
  };

  const pathname = usePathname();

  const links =
    pathname === "/mentionLegale"
      ? [
          { href: "/", name: "Home" },
          { href: "/portfolio", name: "Portfolio" },
        ]
      : pathname === "/portfolio"
      ? [
          { href: "/", name: "Home" },
          { href: "#competences", name: "Compétences" },
          { href: "#projets", name: "Projets" },
          { href: "#cv", name: "CV" },
          { href: "#contact", name: "Contact" },
          { href: "/mentionLegale", name: "Mentions Légales" },
        ]
      : [
          { href: "#services", name: "Services" }, // Lien principal pour Services
          { href: "#a-propos", name: "A propos" },
          { href: "/portfolio", name: "Portfolio" },
          { href: "#creations", name: "Créations" },
          { href: "/mentionLegale", name: "Mentions Légales" },
          { href: "#contact", name: "Contact" },
        ];

  const servicesLinks = [
    { href: "#developpement", name: "Developpement" },
    { href: "#graphique", name: "Graphique" },
    { href: "#photographie", name: "Photographie" },
  ]; // Sous-liens pour les services

  return (
    <nav className="hidden gap-10 lg:flex">
      {/* Cache les liens sur les écrans mobiles */}
      <ul className="relative flex gap-5 text-xl font-bold text-white">
        {links.map((link) =>
          link.name === "Services" ? (
            <li
              key={link.href}
              className="relative cursor-pointer"
              onMouseEnter={() => setIsServicesMenuOpen(true)} // Ouvre le menu au survol
              onMouseLeave={() => setIsServicesMenuOpen(false)} // Ferme le menu lorsque la souris quitte
              onClick={handleServicesClick} // Bascule le menu au clic
            >
              <span>{link.name}</span>
              {isServicesMenuOpen && (
                <ul
                  className="absolute -left-2 mt-1 w-48 overflow-hidden rounded-lg bg-black/40 text-white
                shadow-lg"
                >
                  {servicesLinks.map((service) => (
                    <li
                      key={service.href}
                      className="px-4 py-2 text-base font-normal hover:bg-black/20"
                    >
                      <InternalLink
                        href={service.href}
                        name={service.name}
                        isActive={activeLink === service.href}
                        onClick={() => {
                          setActiveLink(service.href);
                        }}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li key={link.href} className="underline-animation">
              <InternalLink
                href={link.href}
                name={link.name}
                isActive={activeLink === link.href}
                onClick={() => setActiveLink(link.href)}
              />
            </li>
          )
        )}
      </ul>
      <SocialsLinks />
    </nav>
  );
}
