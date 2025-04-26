import React from "react";
import CompetenceSection from "../components/molecules/pageSection/competenceSection/CompetenceSection";
import BannerStackTechnic from "../components/molecules/banner/BannerStackTechnic";
import Projet from "../components/molecules/pageSection/projetSection/Projet";
import ContactSection from "../components/molecules/pageSection/contactSection/ContactSection";
import CvSection from "../components/molecules/pageSection/cvSection/CvSection";
import NosCreationSection from "../components/molecules/pageSection/NosCreationSection/NosCreationSection";

export default function StackTechnic() {
  return (
    <>
    <section className=" 2xl:px-40">
      <BannerStackTechnic />
      <CompetenceSection />
      <NosCreationSection className="bg-black" />
      <CvSection />
      <ContactSection />
    </section>
    </>
  );
}
