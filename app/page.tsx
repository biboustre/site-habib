"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import BannerMain from "@/app/components/molecules/banner/BannerMain";
import ServiceSection from "./features/serviceSection/serviceSection";
import AboutSection from "./features/about/AboutSection";
import UserSelectionModal from "./features/userSelectionModal/User_Selection_Modal";
import NosCreationSection from "./components/molecules/NosCreationSection/NosCreationSection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

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
        classNameImage="h-[calc(100vh-6rem)] w-full"
      />
      <ServiceSection />
      <AboutSection />
      <NosCreationSection />
      <UserSelectionModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onClientClick={handleClientClick}
      />
    </>
  );
}
