import React from "react";
import InternalLink from "../internalLink/InternalLink";
import SocialsLinks from "../socialsLinks/SocialsLinks";

export default function NavHeader() {
  return (
    <nav className="flex gap-10">
      <ul className="flex gap-5 text-xl font-bold text-white">
        <li className="underline-animation"><InternalLink href="#services" name="Services" /></li>
        <li className="underline-animation"><InternalLink href="#a-propos" name="A propos" /></li>
        <li className="underline-animation"><InternalLink href="#portfolio" name="Portfolio" /></li>
        <li className="underline-animation"><InternalLink href="#contact" name="Contact" /></li>
      </ul>
      <SocialsLinks />
    </nav>
  );
}
