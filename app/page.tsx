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
        className="pt-24 flex flex-col gap-32 scroll-mt-[100px] bgPrimary"
      >
        <h2 className="text-4xl text-white font-bold text-center md:text-6xl">
          Ce que nous proposons
        </h2>
        {/* <hr className="w-64 m-auto" /> */}
        <section className="flex flex-col gap-20 text-white text-lg text-justify font-semibold px-5 pb-20 lg:flex-row lg:gap-5 xl:px-20">
          {descriptions.map((description) => (
            <ServiceDescription
              key={description.id}
              title={description.title}
              text={description.text}
            />
          ))}
        </section>
      </section>

      <section id="a-propos" className="relative h-[100vh] scroll-mt-[100px]">
        <h1 className="absolute text-white text-3xl tracking-wider font-bold w-full text-center pt-10 z-10 md:text-5xl">
          Nous créons et améliorons les <br /> produits Web et mobiles
        </h1>
        <Image
          className="z-0 h-full w-full"
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
        className="flex flex-col gap-14 scroll-mt-[100px] bg-[#e3d7cd] md:px-7 lg:px-28 pt-16 pb-32"
      >
        <h1 className="text-gray-800 text-4xl font-bold text-center md:text-6xl">
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
