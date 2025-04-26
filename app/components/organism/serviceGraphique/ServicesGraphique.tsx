import Image from "next/image";
import React from "react";

const services = [
  {
    title: "Flyer",
    description:
      "Nous proposons une gamme complète de services de design graphique pour répondre à vos besoins. Que ce soit pour la création de flyers, de logos, ou de cartes de restaurant.",
  },
  {
    title: "Logo",
    description:
      "Nous concevons des logos uniques et professionnels pour renforcer votre identité visuelle.",
  },
  {
    title: "Carte de restaurant",
    description:
      "Nous créons des designs attractifs pour vos cartes de restaurant et snack.",
  },
];

function ServicesGraphique() {
  return (
    <section className="flex h-auto flex-col items-center justify-center gap-10 bg-neutral-950 px-2 py-32 text-white md:px-8 lg:flex-row lg:items-stretch">
      {/* Conteneur gauche (Texte + Cartes) */}
      <section className="flex flex-col gap-10 lg:w-2/3">
        {/* Texte de la section */}
        <section className="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-800 to-orange-400 p-10">
          <h1 className="text-center text-2xl font-bold lg:text-start lg:text-3xl">
            Nous proposons une gamme de services de design graphique. Que ce
            soit pour la création de flyers, logos, ou de cartes de restaurant.
          </h1>
        </section>

        {/* Cartes de services */}
        <section className="flex w-full flex-wrap justify-center gap-5 md:flex-nowrap md:justify-normal md:gap-8">
          {services.map((service, index) => (
            <section
              key={index}
              className="flex max-h-[350px] w-full max-w-[500px] basis-full flex-col  gap-5 overflow-hidden rounded-3xl bg-zinc-800 p-5 shadow-lg md:basis-1/3 lg:size-[20vw]"
            >
              <h2 className="text-lg font-bold">{service.title}</h2>
              <p className="text-sm">{service.description}</p>
            </section>
          ))}
        </section>
      </section>

      {/* Image à droite */}
      <figure className="h-auto w-full overflow-hidden rounded-lg lg:w-1/5">
        <Image
          src="/images/photo_ordinateur_1.webp"
          alt="Graphique"
          width={350}
          height={500}
          quality={100}
          className="h-[400px] w-full object-cover md:h-full lg:w-full"
          loading="lazy"
        />
      </figure>
    </section>
  );
}

export default ServicesGraphique;
