import React from 'react';
import CreationCard from '../../../features/creationCard/CreationCard';
import { portfolioItems } from '@/app/data/data';



export default function CreationSection() {
  return (
    <section id="creations" className="flex flex-col gap-32 bg-[#e3d7cd] py-32 md:px-7 lg:px-28">
      <h1 className="text-center text-4xl font-bold text-gray-800 md:text-6xl">
        Nos Créations
      </h1>
      <section className="md:flex md:flex-col md:gap-20">
        {portfolioItems.map((portfolioItem, index) => (
          <CreationCard
            key={portfolioItem.id}
            title={portfolioItem.title}
            imageUrl={portfolioItem.imageSrc}
            imageAlt={portfolioItem.title}
            description={portfolioItem.description}
            isReversed={index % 2 === 1}
          />
        ))}
      </section>
    </section>
  );
};
