"use client";

import React from "react";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import BannerMarketing from "../../marketing/BannerMarketing";

const RecruteurSection: React.FC = () => {
  return (
    <BannerMarketing
      text="Vous etes recruteur ?"
      title={[
        "Vous avez un ",
        { text: "POSTE ", className: "colorPrimaryStack" },
        "à me proposer ? Je serais ravi de m'entretenir avec vous.",
        { text: " N'hésitez pas", className: "colorPrimaryStack" },
        " à consulter mon ",
        { text: "portfolio ", className: "colorPrimaryStack" },
        "et à me ",
        { text: "contacter", className: "colorPrimaryStack" },
        " pour discuter de vos besoins.",
      ]}
      subtitle="Notre mission est de vous aider à développer des outils performants, parfaitement adaptés à vos besoins, et de vous accompagner vers la réussite de vos projets web et mobile."
      backgroundImage="/images/IMG-PAYSAGE-ENEIGER-2.webp"
      buttons={[
        { text: "Contactez-moi", href: "#contact" },
        { text: "Portfolio", href: "/stackTechnic" },
      ]}
      stats={cardRecruteur}
    />
  );
};

export default RecruteurSection;
