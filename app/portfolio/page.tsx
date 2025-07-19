import React from "react";
import CompetenceSection from "../components/molecules/pageSection/competenceSection/CompetenceSection";
import BannerPortfolio from "../components/molecules/banner/BannerPortfolio";
import ContactSection from "../components/molecules/pageSection/contactSection/ContactSection";
import CvSection from "../components/molecules/pageSection/cvSection/CvSection";
import NosCreationSection from "../components/molecules/pageSection/NosCreationSection/NosCreationSection";

export default function Portfolio() {
  return (
    <>
      <BannerPortfolio />
      <CompetenceSection />
      <NosCreationSection className="" />
      <CvSection />
      <ContactSection />
    </>
  );
}
