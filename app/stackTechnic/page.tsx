import React from "react";
import CompetenceSection from "../features/competenceSection/CompetenceSection";
import BannerStackTechnic from "../components/molecules/banner/BannerStackTechnic";
import PortfolioSection from "../features/portfolioSection/PortfolioSection";
import ContactSection from "../components/molecules/contactSection/ContactSection";

export default function StackTechnic() {
  return (
    <>
      <BannerStackTechnic />
      <CompetenceSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
