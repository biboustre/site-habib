"use client";

import React from "react";
import { cardRecruteur } from "@/app/data/cardsMarketingData";
import BannerMarketing from "../../marketing/BannerMarketing";

const RecruteurSection: React.FC = () => {
  return (
    <BannerMarketing
      text="Vous êtes recruteur ?"
      title={[
        "Vous avez un ",
        { text: "POSTE ", className: "" },
        "à me proposer ? Je serais ravi de m'entretenir avec vous.",
        { text: " N'hésitez pas", className: "" },
        " à consulter mon ",
        { text: "portfolio ", className: "" },
        "et à me ",
        { text: "contacter", className: "" },
        " pour discuter de vos besoins.",
      ]}
      subtitle="Je suis à l'écoute de toutes propositions et je serais ravi d'échanger avec vous. 
      Je suis disponible pour un entretien afin de discuter de mes compétences et de la manière dont je peux contribuer à votre équipe."
      videoSrc="/video/video9.mp4"
      buttons={[
        { text: "Contactez-moi", href: "#contact" },
        { text: "Portfolio", href: "/portfolio" },
      ]}
      stats={cardRecruteur}
    />
  );
};

export default RecruteurSection;
