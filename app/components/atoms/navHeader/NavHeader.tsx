import React from "react";
import InternalLink from "../links/internalLink/InternalLink";
import SocialsLinks from "../socials/socialsLinks/SocialsLinks";

export default function NavHeader() {
  return (
    <nav className="hidden gap-10 lg:flex">
      {" "}
      {/* Cache les liens sur les écrans mobiles */}
      <ul className="flex gap-5 text-xl font-bold text-white">
        <li className="underline-animation">
          <InternalLink href="#services" name="Services" />
        </li>
        <li className="underline-animation">
          <InternalLink href="#a-propos" name="A propos" />
        </li>
        <li className="underline-animation">
          <InternalLink href="#portfolio" name="Portfolio" />
        </li>
        <li className="underline-animation">
          <InternalLink href="#contact" name="Contact" />
        </li>
      </ul>
      <SocialsLinks />
    </nav>
  );
}
