import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from "react-icons/fa";
import React from "react";
import ContactItem from "./ContactItem";
import DuplicatedText from "../../atoms/duplicateText/DuplicateText";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center gap-16 bg-black py-16 text-white ">
      <section className="mb-12 text-center">
        <DuplicatedText
          text="Contacte"
          className="text-center  text-white"
          duplicatedClassName=" font-bold text-white opacity-10"
        />
        <p className="mt-4 text-gray-400">
          Loin, très loin, derrière les montagnes des mots, loin des pays de
          Vokalia et de Consonantia
        </p>
      </section>

      <section className="flex flex-col justify-center gap-20 sm:flex-row">
        <ContactItem
          icon={<FaMapMarkerAlt/>}
          title="ADRESSE"
          description="83600 Fréjus"
        />
        <ContactItem
          icon={<FaPhoneAlt/>}
          title="TEL"
          description="+1235 2355 98"
        />
        <ContactItem
          icon={<FaEnvelope />}
          title="EMAIL"
          description="info@votresite.com"
        />
        <ContactItem
          icon={<FaGlobe/>}
          title="SITE WEB"
          description="votresite.com"
        />
      </section>
    </section>
  );
}
