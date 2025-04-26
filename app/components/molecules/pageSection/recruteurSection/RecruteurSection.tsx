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
      subtitle="Je suis à l'écoute de toutes propositions et je serais ravi d'échanger avec vous. 
      Je suis disponible pour un entretien afin de discuter de mes compétences et de la manière dont je peux contribuer à votre équipe."
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
