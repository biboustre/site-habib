"use client";

import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import BannerMain from "@/app/components/molecules/banner/BannerMain";
import AboutSection from "./features/about/AboutSection";
import UserSelectionModal from "./features/userSelectionModal/User_Selection_Modal";
import NosCreationSection from "./components/molecules/NosCreationSection/NosCreationSection";
import ServiceSection from "./features/serviceSection/ServiceSection";
import ContactSection from "./components/molecules/contactSection/ContactSection";
import EmploySection from "./components/molecules/employSection/EmploySection";

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
    setIsModalOpen(false);
  };

  return (
    <>
      <BannerMain
        title="Web'ibou"
        text="Solution </br> WEB </br> & </br>DESIGN"
        src="/images/IMG17.jpg"
        alt="photo de profil"
      />
      <AboutSection />
      <ServiceSection />
      <NosCreationSection />
      <EmploySection />
      <ContactSection />
      <UserSelectionModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onClientClick={handleClientClick}
      />
    </>
  );
}
