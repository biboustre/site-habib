"use client";

import React from "react";
import Carousel from "@/app/features/carrousel/Carrousel";
import cardCreation from "@/app/data/cardCreationData";
import CardProjet from "../../cards/cardProjet/CardProjet";
// import ModalProjet from "@/app/features/modals/ModaleProjet";
import TitleAnimeGradient from "@/app/components/atoms/title/TitleAnimeGradient";
// import Image from "next/image";

export default function NosCreationSection({
  className,
}: {
  className?: string;
}) {
  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const [modalData, setModalData] = useState<{
  //   title?: string;
  //   description?: string;
  // } | null>(null);

  // const handleCardClick = (title?: string, description?: string) => {
  //   setModalData({ title, description });
  //   setIsModalOpen(true);
  // };

  // const handleCloseModal = () => {
  //   setIsModalOpen(false);
  //   setModalData(null);
  // };

  const customSettings = {
    autoplaySpeed: 2500,
  };

  return (
      <section
        id="creations"
        className={` parallaxe relative mx-auto flex max-w-[2000px] scroll-mt-[90px] flex-col  gap-20 py-10 md:pb-32 ${className}`}
        style={{
          backgroundImage: "url('/images/pc-large.jpg')",}}
      >
        {/* <Image
          src="/images/pc-large.jpg"
          alt="Image de fond"
          fill
          className=" -z-10 object-cover"
          loading="lazy"
          /> */}
        <section className="flex justify-center">
          <TitleAnimeGradient
            classNameH1="lg:text-6xl text-5xl font-extrabold btn-gradient hover-text-white"
            title="Nos créations"
          />
        </section>

        <Carousel
          settings={customSettings}
          classNameContainer="nos-creation-carousel"
        >
          {cardCreation.map((card) => (
            <CardProjet
              key={card.id}
              id={card.id}
              title={card.title}
              category={card.category}
              imageSrc={card.imageSrc}
              videoSrc={card.videoSrc}
              description={card.description}
              alt={card.description}
              className="border-none"
              // onClick={() => handleCardClick(card.title, card.description)} // Passe les données à la modale
            />
          ))}
        </Carousel>

      {/* Modale */}
      {/* {modalData && (
        <ModalProjet
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={modalData.title}
        description={modalData.description}
        />
        )} */}
      {/* <style jsx global>{`
        .nos-creation-carousel .slick-track {
          padding-bottom: 0px !important;
          }
          `}</style> */}
          </section>
  );
}
