import React from "react";
import { IconType } from "react-icons";
import AnchorLink from "../../links/anchorLink/AnchorLink";

interface SocialIconProps {
    Icon: IconType;
    link: string;
    }

export default function SocialIcon({ Icon, link }: SocialIconProps) {
  return (
    <AnchorLink href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="icon size-6" />
    </AnchorLink>
  );
}
