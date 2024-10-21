import React from "react";
import CompetenceSection from "../components/molecules/competenceSection/CompetenceSection";
import BannerStackTechnic from "../components/molecules/banner/BannerStackTechnic";
import PortfolioSection from "../components/molecules/portfolioSection/PortfolioSection";
import ContactSection from "../components/molecules/contactSection/ContactSection";
import CvSection from "../features/CV/CvSection";

export default function StackTechnic() {
  return (
    <>
    <section className="md:px-20 xl:px-40">
      <BannerStackTechnic />
      <CompetenceSection />
      <PortfolioSection />
      <CvSection />
      <ContactSection />
    </section>
    </>
  );
}
