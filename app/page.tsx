"use client";

import React, { useEffect, useState } from "react";
// import Head from "next/head";
import Modal from "react-modal";
import BannerMain from "@/app/components/molecules/banner/BannerMain";
import AboutSection from "./components/molecules/pageSection/aboutSection/AboutSection";
import UserSelectionModal from "./features/userSelectionModal/User_Selection_Modal";
import NosCreationSection from "./components/molecules/pageSection/NosCreationSection/NosCreationSection";
import ServiceSection from "./components/molecules/pageSection/serviceSection/ServiceSection";
import ContactSection from "./components/molecules/pageSection/contactSection/ContactSection";
import EmploySection from "./components/molecules/pageSection/employSection/EmploySection";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    const appElement = document.getElementById("__next");
    if (appElement) {
      Modal.setAppElement(appElement);
    } else {
      console.error("Element with ID '__next' not found.");
    }
  }, []);

  const handleClientClick = () => {
    setIsModalOpen(false);
  };

  return (
    <>      {/*  img banner à compresser et mettre au format webp*/}
      <BannerMain
        title={
          <>
            Web<span className="colorPrimaryStack">&apos;ibou</span>
          </>
        }
        text={
          <>
            <span className="font-semibold">Solution<br /> <span className="font-extrabold">WEB</span> <br /></span>
            <span className="colorPrimaryStack font-extrabold">&</span> <br />
            <span className="font-extrabold">DESIGN</span>
          </>
        }
        src="/images/IMG17.jpg"
        alt="photo de profil"
      />
      <AboutSection />
      <ServiceSection />
      <NosCreationSection />
      <EmploySection />
      <ContactSection />
      <UserSelectionModal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        onClientClick={handleClientClick}
      />
    </>
  );
}



{/* <Head>
        <title>Web&pos;ibou - Création de sites web et design graphique</title>
        <meta
          name="description"
          content="Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation. Découvrez comment nous pouvons vous aider à concrétiser vos idées."
        />
        <meta
          name="keywords"
          content="création de sites web, développement d'applications, design graphique, maquettes, logos, hébergement de sites, optimisation, Web'ibou"
        />
        <meta name="author" content="MAAMAR BENHADJAR Habib" />
        <meta property="og:title" content="Web'ibou" />
        <meta
          property="og:description"
          content="Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation."
        />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://" />
        <link rel="canonical" href="https://" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Web'ibou",
              url: "https://votre-site.com",
              description:
                "Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation. Découvrez comment nous pouvons vous aider à concrétiser vos idées.",
              author: {
                "@type": "Person",
                name: "MAAMAR BENHADJAR Habib",
              },
            }),
          }}
        />
      </Head> */}