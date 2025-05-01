import React from "react";
import { cardRecruteur } from "@/app/data/cardRecruteurData";
import BannerMarketing from "../../marketing/BannerMarketing";

export default function AboutSection() {
  // en faire un composant reutilisable !!!!!!!!!
  return (
    <BannerMarketing
      text="Nous créons et améliorons des sites/apps web et mobiles"
      title={[
        "Vous avez un ",
        { text: "PROJET AMBITIEUX ?", className: "animate-text-gradient" },
        " Nous sommes prêts à vous accompagner dans votre ",
        { text: "transformation digitale", className: "animate-text-gradient" },
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
}
