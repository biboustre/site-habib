import Image from "next/image";
import React from "react";
import ServiceDescription from "./components/atoms/serviceDescription/ServiceDescription";
import BannerMain from "./components/molecules/banner/BannerMain";
import { descriptions } from "./data/data";
import { PortfolioCard } from "./components/molecules/portfolioCard/PortfolioCard";
import { portfolioItems } from "./data/data";
import ContactCard from "./components/molecules/contact/ContactCard";

export default function Home() {
  // const [open, setOpen] = useState(false);

  // const handlClick = () => {
  //   setOpen(!open);
  // };

  return (
    <>
      <BannerMain
        title="Web'ibou"
        text="Solution </br> WEB </br> & </br>DESIGN"
        src="/images/photo_ordinateur_2.webp"
        alt="photo de profil"
      />
      <section
        id="services"
        className="bgPrimary flex scroll-mt-[100px] flex-col gap-32 pt-24"
      >
        <h2 className="text-center text-4xl font-bold text-white md:text-6xl">
          Ce que nous proposons
        </h2>
        {/* <hr className="w-64 m-auto" /> */}
        <section className="flex flex-col gap-20 px-5 pb-20 text-justify text-lg font-semibold text-white lg:flex-row lg:gap-5 xl:px-20">
          {descriptions.map((description) => (
            <ServiceDescription
              key={description.id}
              title={description.title}
              text={description.text}
            />
          ))}
        </section>
      </section>

      <section id="a-propos" className="relative h-screen scroll-mt-[100px]">
        <h1 className="absolute z-10 w-full pt-10 text-center text-3xl font-bold tracking-wider text-white md:text-5xl">
          Nous créons et améliorons les <br /> produits Web et mobiles
        </h1>
        <Image
          className="z-0 size-full"
          src="/images/photo_ordinateur_1.webp"
          alt="hero"
          height={500}
          width={500}
          objectFit="cover"
          // layout="fill"
        />
      </section>
      <section
        id="portfolio"
        className="flex scroll-mt-[100px] flex-col gap-14 bg-[#e3d7cd] pb-32 pt-16 md:px-7 lg:px-28"
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

      <ContactCard />
    </>
  );
}
