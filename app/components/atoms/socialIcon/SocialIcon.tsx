import React from "react";
import { IconType } from "react-icons";
import AnchorLink from "../anchorLink/AnchorLink";

interface SocialIconProps {
    Icon: IconType;
    link: string;
    }

export default function SocialIcon({ Icon, link }: SocialIconProps) {
  return (
    <AnchorLink href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="icon w-6 h-6" />
    </AnchorLink>
  );
}
