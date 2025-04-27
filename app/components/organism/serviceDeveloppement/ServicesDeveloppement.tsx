import Image from "next/image";
import React from "react";

const services = [
  {
    number: 1,
    title: "Analyse",
    text: "Nous analysons vos besoins pour créer des solutions adaptées.",
  },
  {
    number: 2,
    title: "Conception",
    text: "Nous concevons des interfaces modernes et intuitives.",
  },
  {
    number: 3,
    title: "Développement",
    text: "Nous développons des applications performantes et sécurisées.",
  },
  {
    number: 4,
    title: "Tests",
    text: "Nous effectuons des tests rigoureux pour garantir la qualité.",
  },
  {
    number: 5,
    title: "Déploiement",
    text: "Nous déployons vos projets avec un suivi personnalisé.",
  },
];

function ServicesDeveloppement() {
  return (
    <section className="flex h-auto flex-col items-center justify-center  gap-20 bg-gradient-to-b from-black via-gray-800 to-black px-2 py-32 text-white sm:px-0 lg:flex-row lg:px-10">
      {/* Première section avec le mapping */}
      <section className="flex flex-col gap-10 lg:w-1/2">
        {services.map((service, index) => (
          <section
            key={index}
            className={`flex items-center  ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex max-w-[700px] h-[150px] items-center gap-5 rounded-3xl bg-gray-800 p-10">
              {/* Cercle avec le numéro */}
              <div className="flex size-12 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 text-xl font-bold shadow-lg shadow-neutral-900 md:size-28">
                {service.number}
              </div>
              {/* Contenu avec le titre et le texte */}
              <div>
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="text-sm text-gray-300">{service.text}</p>
              </div>
            </div>
          </section>
        ))}
      </section>

      {/* Figure avec l'image */}
      <figure className="w-full lg:flex lg:w-1/2 lg:items-center lg:justify-center">
        <Image
          src="/images/photo_ordinateur_1.webp"
          alt="Développement"
          width={550}
          height={500}
          quality={100}
          loading="lazy"
          className="h-[500px] w-full cursor-default overflow-hidden rounded-lg shadow-lg shadow-slate-700 transition duration-300 hover:scale-105"
        />
      </figure>
    </section>
  );
}

export default ServicesDeveloppement;
