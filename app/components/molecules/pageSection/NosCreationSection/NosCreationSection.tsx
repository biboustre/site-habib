"use client";

import React, { useState } from "react";
import DuplicatedText from "@/app/components/atoms/duplicatedText/DuplicatedText";
import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import Carousel from "@/app/features/carrousel/Carrousel";
import cardCreation from "@/app/data/cardCreationData";
import CardProjet from "../../cards/cardProjet/CardProjet";
import ModalProjet from "@/app/features/modals/ModaleProjet";

export default function NosCreationSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<{
    title?: string;
    description?: string;
  } | null>(null);

  const handleCardClick = (title?: string, description?: string) => {
    setModalData({ title, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const customSettings = {
    autoplaySpeed: 2500,
  };

  return (
    <AnimatedSection>
      <section
        id="creations"
        className="bgFooter relative flex scroll-mt-[100px] flex-col gap-32 pb-40 pt-20"
      >
        <DuplicatedText
          className="pt-3 text-[35px] text-white sm:text-[65px]"
          text="Nos créations"
        />
        <Carousel settings={customSettings}>
          {cardCreation.map((card) => (
            <CardProjet
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.category}
              imageSrc={card.imageSrc}
              description={card.description}
              alt={card.description}
              className="border-none"
              onClick={() => handleCardClick(card.title, card.description)} // Passe les données à la modale
            />
          ))}
        </Carousel>
      </section>

      {/* Modale */}
      {modalData && (
        <ModalProjet
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalData.title}
          description={modalData.description}
        />
      )}
     {/* <style jsx global>{`
        .slick-track {
          display: flex !important;
          justify-content: center;
          gap: 0px; 
        }
      `}</style> */}
    </AnimatedSection>
  );
}
