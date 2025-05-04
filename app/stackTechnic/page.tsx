import React from "react";
import CompetenceSection from "../components/molecules/pageSection/competenceSection/CompetenceSection";
import BannerStackTechnic from "../components/molecules/banner/BannerStackTechnic";
import ContactSection from "../components/molecules/pageSection/contactSection/ContactSection";
import CvSection from "../components/molecules/pageSection/cvSection/CvSection";
import NosCreationSection from "../components/molecules/pageSection/NosCreationSection/NosCreationSection";

export default function StackTechnic() {
  return (
    <>
      <BannerStackTechnic />
      <CompetenceSection />
      <NosCreationSection className="" />
      <CvSection />
      <ContactSection />
    </>
  );
}
