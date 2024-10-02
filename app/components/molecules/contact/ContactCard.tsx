// ContactCard.tsx
import React from 'react';
import Image from 'next/image';

export default function ContactCard () {
  return (
    <section id='contact' className="flex flex-col gap-16  h-full items-center py-10 md:flex-row md:justify-center">
      {/* Section de l'image */}
      <figure className="h-full w-3/5">
        <Image
        className='h-[80vh] w-full'
          src="/images/photo-ordinateur-sur-bureau.jpg"
          alt=""
          width={500}
          height={500}
          objectFit='cover'
        />
      </figure>

      {/* Section des informations de contact */}
      <section className="px-3 md:">
        <h2 className="text-4xl font-bold mb-4 md:text-6xl md:mb-10">Contactez-nous</h2>

        <ul className="space-y-12 text-xl md:text-3xl">
          <li>
            <span className="colorPrimary  font-bold">TÉLÉPHONE :</span> 06-74-32-48-32
          </li>
          <li>
            <span className="colorPrimary  font-semibold">E-MAIL :</span> web&apos;ibou@outlook.com
          </li>
          <li>
            <span className="colorPrimary  font-semibold">ADRESSE :</span> Fréjus 83600
          </li>
          <li>
            <span className="colorPrimary  font-semibold">HEURES D&apos;OUVERTURE :</span>
            <br />
            Lundi — Jeudi 10h à 20h
            <br />
            Vendredi — Dimanche 10h/12 — 14h/20h
          </li>
        </ul>
      </section>
    </section>
  );
};

