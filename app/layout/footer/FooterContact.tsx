import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function FooterContact() {
  return (
    <div className="space-y-10 md:mx-auto">
      <h3 className="mb-4 text-2xl font-bold text-white">
        Vous avez des questions ?
      </h3>
      <ul className="space-y-2 text-gray-400">
        <li className="flex items-center">
          <FaMapMarkerAlt className="mr-2" /> 83600, Fréjus
        </li>
        <li className="flex items-center">
          <FaPhoneAlt className="mr-2" /> 06.74.32.48.32
        </li>
        <li className="flex items-center">
          <FaEnvelope className="mr-2" /> Habib-MB@outlook.com
        </li>
      </ul>
    </div>
  );
}
