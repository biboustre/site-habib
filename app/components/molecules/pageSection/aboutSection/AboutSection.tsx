import React from "react";
import { cardRecruteur } from "@/app/data/cardsMarketingData";
import BannerMarketing from "../../marketing/BannerMarketing";

export default function AboutSection() {
  // en faire un composant reutilisable !!!!!!!!!
  return (
    <BannerMarketing
      id="a-propos"
      text="Nous créons et améliorons des sites/apps web et mobiles"
      title={[
        "Vous avez un ",
        { text: "PROJET AMBITIEUX ?", className: "" },
        " Nous sommes prêts à vous accompagner dans votre ",
        { text: "transformation digitale", className: "" },
      ]}
      subtitle="Notre mission est de vous aider à développer des outils performants, parfaitement adaptés à vos besoins, et de vous accompagner vers la réussite de vos projets web et mobile."
      // videoSrc="/video/video3.mp4"
      imgSrc="/images/2-pc.webp"
      buttons={[
        { text: "Contactez-moi", href: "#contact" },
        { text: "Portfolio", href: "/stackTechnic" },
      ]}
      stats={cardRecruteur}
    />
  );
}