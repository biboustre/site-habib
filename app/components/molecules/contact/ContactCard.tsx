// ContactCard.tsx
import React from 'react';
import Image from 'next/image';

export function ContactCard () {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-[#e3d7cd] p-10">
      {/* Section de l'image */}
      <figure className="relative w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/images/"
          alt=""
          width={500}
          height={500}
          className="object-contain"
        />
      </figure>

      {/* Section des informations de contact */}
      <section className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 text-gray-800">
        <h2 className="text-4xl font-bold mb-4">Contactez-nous</h2>

        <ul className="space-y-2">
          <li>
            <span className="text-orange-500 font-semibold">TÉLÉPHONE :</span> (555) 123-4567
          </li>
          <li>
            <span className="text-orange-500 font-semibold">E-MAIL :</span> info@sample.com
          </li>
          <li>
            <span className="text-orange-500 font-semibold">ADRESSE :</span> Alexandrie, 32 Rue Washington, 22303
          </li>
          <li>
            <span className="text-orange-500 font-semibold">HEURES D&apos;OUVERTURE :</span>
            <br />
            Lundi — Jeudi 10:00 — 23:00
            <br />
            Vendredi — Dimanche 10:00 — 19:00
          </li>
        </ul>

        {/* Bouton */}
        <button className="mt-8 px-6 py-3 bg-black text-white rounded-lg shadow-lg">
          Consultation de livre
        </button>
      </section>
    </section>
  );
};

