import React from "react";
import CarouselEmbla from "@/app/features/carouselTest/CarouselEmbla";
// import SectionTitlePhotographie from "./sectionTitlePhotographie";

interface CarouselSectionProps {
  title: string;
  description?: string;
  items: { id: number; title: string; description: string; imageSrc: string }[];
}

const CarouselPhotographie: React.FC<CarouselSectionProps> = ({
  items,
}) => {
  return (
    <section className="mt-10 h-[350px] w-full 2xl:h-[450px]">
      {/* <SectionTitlePhotographie title={title} description={description} /> */}
        <CarouselEmbla items={items} loop={true} autoplayDelay={3000} />
    </section>
  );
};

export default CarouselPhotographie;