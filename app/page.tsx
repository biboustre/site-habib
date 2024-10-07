"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Modal from "react-modal";
import ServiceDescription from "./components/atoms/serviceDescription/ServiceDescription";
import BannerMain from "@/app/components/molecules/banner/BannerMain";
import { descriptions } from "./data/data";
import { PortfolioCard } from "./features/portfolioCard/PortfolioCard";
import { portfolioItems } from "./data/data";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.error("Element with ID '__next' not found.");
    }
  }, []);

  const handleClientClick = () => {
    console.log("Client Potentiel button clicked");
    setIsModalOpen(false);
  };

  const handleRecruiterClick = () => {
    console.log("Recruteur button clicked");
    router.push("/stackTechnic");
  };

  return (
    <>
      <BannerMain
        title="Web'ibou"
        text="Solution </br> WEB </br> & </br>DESIGN"
        src="/images/photo_ordinateur_2.webp"
        alt="photo de profil"
        classNameBanner="relative bg-slate-50"
        classNameInfo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:left-96"
        classNameTitle="mb-5 pt-10 text-center text-6xl font-bold text-white md:text-start md:text-7xl lg:text-8xl"
      />
      <section
        id="services"
        className="bgPrimary flex scroll-mt-[100px] flex-col gap-32 pt-24"
      >
        <h2 className="text-center text-4xl font-bold text-white md:text-6xl">
          Ce que nous proposons
        </h2>
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
        />
      </section>
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
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="User Type Selection"
        className="fixed inset-0 flex items-center justify-center bg-black/50"
        overlayClassName="fixed inset-0 bg-black/50"
      >
        <div className="rounded-lg bg-white p-8 shadow-lg">
          <h2 className="mb-4 text-2xl font-bold">
            Êtes-vous un client potentiel ou un recruteur ?
          </h2>
          <div className="flex justify-around">
            <button
              onClick={handleClientClick}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
            >
              Client Potentiel
            </button>
            <button
              onClick={handleRecruiterClick}
              className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
            >
              Recruteur
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
}
