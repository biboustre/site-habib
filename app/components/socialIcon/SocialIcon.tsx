import React from "react";
import { IconType } from "react-icons";

interface SocialIconProps {
    Icon: IconType;
    link: string;
    }

export default function SocialIcon({ Icon, link }: SocialIconProps) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <Icon className="w-6 h-6" />
    </a>
  );
}
