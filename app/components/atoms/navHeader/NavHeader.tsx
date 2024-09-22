import React from "react";
import SocialsLinks from "../socialsLinks/SocialsLinks";
import InternalLink from "../internalLink/InternalLink";

export default function NavHeader() {
  return (
    <nav className="flex gap-10">
      <ul className="flex gap-5">
        <li><InternalLink href="" name="A propos" /></li>
        <li><InternalLink href="" name="Services" /></li>
        <li><InternalLink href="" name="Contact" /></li>
      </ul>
      <SocialsLinks />
    </nav>
  );
}
