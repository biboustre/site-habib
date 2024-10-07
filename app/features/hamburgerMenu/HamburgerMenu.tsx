"use client";

import Link from "next/link";
import { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour ouvrir et fermer le menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      {/* Cache le menu hamburger sur les écrans moyens et plus grands */}
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
        <div className="fixed right-0 top-0 h-60 w-full translate-x-0 bg-zinc-950/95 text-white transition-transform md:h-full md:w-64">
          <button
            className="absolute right-4 top-4 text-2xl"
            onClick={toggleMenu}
          >
            &times;
          </button>
          <nav className="mt-10 px-6">
            <Link
              href="#top"
              className="block py-2 text-lg hover:bg-fuchsia-500/20"
            >
              Home
            </Link>
            <Link
              href="#a-propos"
              className="block py-2 text-lg hover:bg-fuchsia-500/20"
            >
              A propos
            </Link>
            <Link
              href="#services"
              className="block py-2 text-lg hover:bg-fuchsia-500/20"
            >
              Services
            </Link>
            <Link
              href="#contact"
              className="block py-2 text-lg hover:bg-fuchsia-500/20"
            >
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
