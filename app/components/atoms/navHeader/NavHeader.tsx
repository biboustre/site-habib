import React from "react";
import SocialsLinks from "../socialsLinks/SocialsLinks";

export default function NavHeader() {
  return (
    <nav className="flex gap-10">
      <ul className="flex gap-5">
        <li><a href="">A propos</a></li>
        <li><a href=""></a></li>
        <li><a href="">Services</a></li>
        <li><a href="">Contact</a></li>
      </ul>
      <SocialsLinks />
    </nav>
  );
}
