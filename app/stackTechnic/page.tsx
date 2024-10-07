import React from "react";
import BannerMain from "../components/molecules/banner/BannerMain";
import { textGeneraux } from "../data/data";
import { PortfolioCard } from "../features/portfolioCard/PortfolioCard";
import { portfolioItems } from "../data/data";

export default function StackTechnic() {
  return (
    <>
      <BannerMain
        text={textGeneraux.text}
        src="/images/photo-profil.jpg"
        alt=""
        classNameBanner="bgHeaderStack lg:flex "
        classNameInfo="flex flex-col items-center justify-center py-10 px-3 lg:w-1/2"
        classNameText="text-gray-100 text-xl md:text-xl lg:text-xl lg:px-48"
        classNameImage="object-cover"
        classNameParentImage="lg:w-1/2"
      />

<section
        id="portfolio"
        className="flex scroll-mt-[100px] flex-col gap-32 bg-[#e3d7cd] py-32 md:px-7 lg:px-28"
      >
        <h1 className="text-center text-4xl font-bold text-gray-800 md:text-6xl">
          Portfolio
        </h1>
        <section className="flex flex-col gap-10 px-2 md:grid md:grid-cols-2 md:gap-3 lg:grid-cols-3">
          {portfolioItems.map((portfolioItem) => (
            <PortfolioCard
              key={portfolioItem.id}
              title={portfolioItem.title}
              imageSrc={portfolioItem.imageSrc}
              category={portfolioItem.category}
            />
          ))}
        </section>
      </section>
    </>
  );
}
