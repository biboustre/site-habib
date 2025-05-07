import React from "react";
import { IconType } from "react-icons";
import AnchorLink from "../../navigation/links/anchorLink/AnchorLink";

interface SocialIconProps {
  Icon: IconType;
  link: string;
  label?: string;
}

export default function SocialIcon({ Icon, link, label }: SocialIconProps) {
  return (
    <AnchorLink href={link} target="_blank" rel="noopener noreferrer" aria-label={label} >
      <Icon className="icon size-6 duration-300 hover:scale-150 " />
    </AnchorLink>
  );
}
