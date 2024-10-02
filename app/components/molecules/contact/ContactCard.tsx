// ContactCard.tsx
import React from 'react';
import Image from 'next/image';

export default function ContactCard () {
  return (
    <>
      {/* Section de l'image */}
      <figure className="relative w-full lg:w-1/2 flex justify-center items-center">
        <Image
          src="/images/photo-profil.jpg"
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
            <span className="text-orange-500 font-semibold">TÉLÉPHONE :</span> 06-74-32-48-32
          </li>
          <li>
            <span className="text-orange-500 font-semibold">E-MAIL :</span> web&apos;ibou@outlook.com
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
      </section>
    </>
  );
};

