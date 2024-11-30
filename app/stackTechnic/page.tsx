import React from "react";
import CompetenceSection from "../components/molecules/pageSection/competenceSection/CompetenceSection";
import BannerStackTechnic from "../components/molecules/banner/BannerStackTechnic";
import PortfolioSection from "../components/molecules/pageSection/portfolioSection/PortfolioSection";
import ContactSection from "../components/molecules/pageSection/contactSection/ContactSection";
import CvSection from "../components/molecules/pageSection/cvSection/CvSection";

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
