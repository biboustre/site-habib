'use client';

import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Link from "next/link";
import TextDuCarrousel from "@/app/features/carrousel/TextDuCarrousel";
import ModalProjet from "../modals/ModaleProjet";

interface ImageData {
  src: string;
  href?: string;
  alt: string;
}

interface CarouselProps {
  images?: ImageData[];
  texts?: string[];
  settings?: Settings;
  className?: string;
  children?: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({
  images,
  settings,
  texts,
  className,
  children,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<ImageData | null>(null);

  const handleImageClick = (image: ImageData) => {
    setModalData(image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: true,
    centerPadding: "30%",
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          centerPadding: "0",
        },
      },
    ],
  };

  const mergedSettings = { ...defaultSettings, ...settings };

  // Dupliquez les images pour simuler un défilement infini fluide
  //  const duplicatedImages = images ? [...images, ...images] : [];

  return (
    <>
      <Slider {...mergedSettings}>
        {images &&
          images.map((image, index) => (
            <section key={index} className="">
              {image.src ? (
                image.href ? (
                  <Link
                    href={image.href}
                    className=" flex h-auto w-full items-center justify-center"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={150}
                      height={150}
                      className="object-cover duration-300 ease-in-out hover:scale-150"
                    />
                  </Link>
                ) : (
                  <figure className=" flex h-[400px] w-full items-center justify-center">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={300}
                      height={300}
                      className="object-cover duration-300 ease-in-out hover:scale-150"
                    />
                  </figure>
                )
              ) : null}
            </section>
          ))}
        {texts &&
          texts.map((text, index) => (
            <TextDuCarrousel
              key={index}
              text={text}
              className={`w-full text-center xl:py-10  ${className}`}
            />
          ))}
        {children}
      </Slider>

      <style jsx global>{`
        .slick-center p,
        .slick-center h2,
        .slick-center h1 {
          opacity: 1 !important;
          transform: scale(1) !important;
        }
        .slick-slide:not(.slick-center) p,
        .slick-slide:not(.slick-center) h2,
        .slick-slide:not(.slick-center) h1 {
          opacity: 0.4;
          transform: scale(0.8);
        }
        .slick-dots li button:before {
          color: white;
        }
        .slick-dots li.slick-active button:before {
          color: white !important;
        }

        .slick-slider {
          padding-bottom: 50px;
        }

        .slick-track {
          display: flex !important;
          gap: 60px; /* Ajoute un espacement entre les slides */
        }

        @media (max-width: 600px) {
          .slick-center figure {
            opacity: 1 !important;
            transform: scale(1) !important;
          }
          .slick-slide:not(.slick-center) figure {
            display: none;
            opacity: 0.5;
            transform: scale(0.8);
          }
        }
      `}</style>
    </>
  );
};

export default Carousel;
