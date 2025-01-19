import React from "react";

export interface BannerMainProps {
    title?: React.ReactNode;
    text?: React.ReactNode;
    src: string;
    alt: string;
    classNameImage?: string;
    classNameTitle?: string;
    classNameText?: string;
    classNameBanner?: string;
    classNameInfo?: string;
    classNameParentImage?: string;
    width?: number;
    height?: number;
  }