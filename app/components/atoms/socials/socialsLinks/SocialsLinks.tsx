import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SocialIcon from "../socialIcon/SocialIcon";

interface SocialsLinksProps {
  className?: string;
}

export default function SocialsLinks({ className }: SocialsLinksProps) {
  return (
    <nav>
      <ul className={`flex gap-5 ${className}`}>
        <li>
          <SocialIcon
            label="Facebook"
            Icon={FaFacebook}
            link="https://www.facebook.com"
          />
        </li>
        <li>
          <SocialIcon
            label="Instagram"
            Icon={FaInstagram}
            link="https://www.instagram.com/webibou_creative_digital/"
          />
        </li>
      </ul>
    </nav>
  );
}
