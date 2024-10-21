import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SocialIcon from "../socialIcon/SocialIcon";

interface SocialsLinksProps {
  className?: string;
}

export default function SocialsLinks({className}: SocialsLinksProps) {
  return (
    <nav>
      <ul className={`flex gap-5 ${className}`}>
        <li>
          <SocialIcon Icon={FaFacebook} link="https://www.facebook.com" />
        </li>
        <li>
          <SocialIcon Icon={FaInstagram} link="https://www.instagram.com" />
        </li>
      </ul>
    </nav>
  );
}
