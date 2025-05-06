import React from "react";

export interface BannerMainProps {
    title?: React.ReactNode;
    text?: React.ReactNode;
    alt: string;
    classNameImage?: string;
    classNameTitle?: string;
    classNameText?: string;
    classNameBanner?: string;
    classNameInfo?: string;
    classNameParentImage?: string;
    width?: number;
    height?: number;
    // videoSrc?: string; 
  }