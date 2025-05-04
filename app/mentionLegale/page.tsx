'use client'

import React from "react";
import { motion } from "framer-motion";

export default function MentionLegale() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-neutral-900 to-black text-white px-6 py-40">
      {/* Titre principal */}
      <motion.section
        className="text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-extrabold md:text-6xl animate-text-gradient mb-5">
          Mentions Légales
        </h1>
        <p className="mt-4 text-lg text-gray-400">
          Toutes les informations légales concernant votre activité.
        </p>
      </motion.section>

      {/* Contenu */}
      <motion.section
        className="mt-12 mx-auto max-w-4xl space-y-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        {/* Informations générales */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Informations Générales</h2>
          <p className="mt-4 text-gray-300">
            <strong>Nom de l&apos;entreprise :</strong> Web&apos;ibou Créations<br />
            <strong>Statut :</strong> Auto-entrepreneur<br />
            <strong>SIRET :</strong> 123 456 789 00012<br />
            <strong>Adresse :</strong> 123 Rue des Créateurs, 75000 Paris, France<br />
            <strong>Email :</strong> contact@webibou.com<br />
            <strong>Téléphone :</strong> +33 6 12 34 56 78
          </p>
        </div>

        {/* Activités */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Activités</h2>
          <p className="mt-4 text-gray-300">
            Web&apos;ibou Créations propose les services suivants :
          </p>
          <ul className="mt-4 list-disc list-inside space-y-2 text-gray-300">
            <li>Développement de sites web sur mesure</li>
            <li>Création d&apos;applications mobiles (iOS et Android)</li>
            <li>Design graphique et identité visuelle</li>
            <li>Photographie professionnelle et retouche</li>
            <li>SEO et optimisation des performances</li>
          </ul>
        </div>

        {/* Hébergement */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Hébergement</h2>
          <p className="mt-4 text-gray-300">
            <strong>Hébergeur :</strong> OVH<br />
            <strong>Adresse :</strong> 2 Rue Kellermann, 59100 Roubaix, France<br />
            <strong>Site web :</strong>{" "}
            <a
              href="https://www.ovh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              www.ovh.com
            </a>
          </p>
        </div>

        {/* Propriété intellectuelle */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Propriété Intellectuelle</h2>
          <p className="mt-4 text-gray-300">
            Tous les contenus présents sur ce site (textes, images, vidéos, logos, etc.)
            sont protégés par le droit d&apos;auteur. Toute reproduction, distribution ou
            utilisation sans autorisation préalable est strictement interdite.
          </p>
        </div>

        {/* Données personnelles */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Données Personnelles</h2>
          <p className="mt-4 text-gray-300">
            Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification et
            de suppression de vos données personnelles. Pour toute demande, veuillez
            nous contacter à l&apos;adresse suivante :{" "}
            <a
              href="mailto:contact@webibou.com"
              className="text-blue-400 hover:underline"
            >
              contact@webibou.com
            </a>.
          </p>
        </div>

        {/* Responsabilité */}
        <div className="bg-neutral-800/60 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-500">
          <h2 className="text-2xl font-bold text-white">Responsabilité</h2>
          <p className="mt-4 text-gray-300">
            Web&apos;ibou Créations ne saurait être tenu responsable des dommages directs ou
            indirects résultant de l&apos;utilisation de ce site ou des services proposés.
          </p>
        </div>
      </motion.section>
    </main>
  );
}