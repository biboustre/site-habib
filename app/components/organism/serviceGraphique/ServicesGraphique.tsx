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
    <section className="bg-gblack flex h-auto flex-col items-center justify-center gap-14 px-2 py-32 text-white sm:px-3 md:px-0 lg:flex-row lg:items-stretch">
      {/* Conteneur gauche (Texte + Cartes) */}
      <section className="flex flex-col gap-16 lg:w-2/3">
        {/* Texte de la section */}
        <section className="btn-gradient flex cursor-default items-center justify-center rounded-lg bg-neutral-900/30 shadow-lg shadow-yellow-900  transition duration-300 hover:scale-95 md:justify-start ">
          <h1 className="colorPrimaryStack max-w-[1200px] p-10 text-center text-2xl font-bold hover:text-white lg:text-start xl:text-[25px] 2xl:py-16 2xl:text-3xl">
            Nous proposons une gamme de services de design graphique. Que ce
            soit pour la création de flyers, logos, ou de cartes de restaurant.
          </h1>
        </section>

        {/* Cartes de services */}
        <section className="flex w-full flex-wrap justify-center gap-14 md:flex-nowrap md:justify-normal md:gap-5 xl:gap-14 ">
          {services.map((service, index) => (
            <section
              key={index}
              className="btn-gradient flex h-[250px] max-h-[350px] w-full max-w-[500px] basis-full  cursor-default flex-col gap-10 overflow-hidden rounded-3xl bg-neutral-900/30   p-5 shadow-sm  shadow-yellow-900 duration-300 hover:scale-95 md:min-h-[350px] md:basis-1/3 lg:size-[20vw]"
            >
              <h2 className="colorPrimaryStack text-xl font-bold md:text-2xl">
                {service.title}
              </h2>
              <p className="text- md:text-base xl:text-lg">
                {service.description}
              </p>
            </section>
          ))}
        </section>
      </section>

      {/* Image à droite */}
      <figure className="h-auto w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-300 hover:scale-105 lg:w-1/5">
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
