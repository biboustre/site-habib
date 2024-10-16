import React from "react";
import BannerMain from "../components/molecules/banner/BannerMain";
import { textBannerStackTechnic } from "../data/data";
import PortfolioSection from "../features/portfolioSection/PortfolioSection";

export default function StackTechnic() {
  return (
    <>
      <BannerMain
        text={textBannerStackTechnic.text}
        src="/images/photo-profil.jpg"
        alt=""
        classNameBanner="bgHeaderStack flex flex-col-reverse lg:flex relative"
        classNameInfo="flex flex-col items-center justify-center py-10 px-3 lg:w-1/2"
        classNameText="text-gray-100 text-xl md:text-xl lg:text-xl lg:px-48"
        classNameImage="object-cover rounded-full h-40 w-40 "
        classNameParentImage=" rounded-full h-40 w-40 "
      />

      <PortfolioSection />
    </>
  );
}
