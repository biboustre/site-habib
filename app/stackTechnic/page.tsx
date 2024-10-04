import React from "react";
import BannerMain from "../components/molecules/banner/BannerMain";
import { textGeneraux } from "../data/data";

export default function StackTechnic() {
  return (
    <>
      <BannerMain
        text={textGeneraux.text}
        src="/images/photo_ordinateur_2.webp"
        alt=""
        classNameBanner="bgHeaderStack lg:flex "
        classNameInfo="flex flex-col items-center justify-center py-10 px-3 lg:w-1/2"
        classNameText="text-gray-100 text-xl md:text-xl lg:text-xl lg:px-48"
        classNameImage=""
        classNameParentImage="lg:w-1/2"
      />
    </>
  );
}
