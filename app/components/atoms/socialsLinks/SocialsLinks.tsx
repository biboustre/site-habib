import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import SocialIcon from "../socialIcon/SocialIcon";

export default function SocialsLinks() {
  return (
    <nav>
      <ul className="flex gap-5">
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
