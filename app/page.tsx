'use client';

import React from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-6 text-center bg-gradient-to-br from-indigo-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] bg-cover opacity-10"></div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Lancez votre boutique Shopify <br /> clé en main, sans coder
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Je vous livre une boutique pro, rapide, responsive et prête à encaisser vos ventes.
          </p>
          <a href="#contact" className="inline-block bg-white text-indigo-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 transition">
            Je veux ma boutique
          </a>
        </motion.div>
      </section>

      {/* Problème Section */}
      <section className="py-20 px-6 bg-gray-100">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">🚫 Vous vous reconnaissez ?</h2>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p>🔧 Trop de temps perdu à essayer de tout faire soi-même</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p>❌ Des erreurs techniques qui bloquent le lancement</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <p>💸 Des solutions coûteuses mal adaptées à vos besoins</p>
            </div>
          </div>
          <p className="mt-8 font-semibold text-lg">➡️ Vous repoussez le lancement de votre business… ou vous abandonnez.</p>
        </motion.div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6 bg-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-4">🎯 Une solution simple et sur-mesure</h2>
          <p className="text-lg mb-6">Je m’occupe de tout pour vous : design, paiement, produits, responsive, pages légales…</p>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="space-y-3">
              <li>✅ Design professionnel personnalisé</li>
              <li>✅ Intégration CB, PayPal, Stripe</li>
              <li>✅ Site optimisé pour mobile & tablette</li>
            </ul>
            <ul className="space-y-3">
              <li>✅ Pages produit & panier incluses</li>
              <li>✅ Pages légales (CGV, mentions) configurées</li>
              <li>✅ Livraison prête + back-office</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Bénéfices Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-purple-50 to-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">🔥 Pourquoi mes clients me font confiance ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <p>⏱ Gagnez du temps et concentrez-vous sur votre business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>🔒 Évitez les bugs, erreurs et blocages techniques</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>📱 Boutique rapide, responsive et 100 % professionnelle</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <p>🤝 Support humain et accompagnement après livraison</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Offre Section */}
      <section className="py-20 px-6 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold mb-6">📦 Ce que vous recevez</h2>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <ul className="space-y-3">
              <li>✔ Un design Shopify pro personnalisé</li>
              <li>✔ 5 fiches produits installées</li>
              <li>✔ Pages légales + moyens de paiement prêts</li>
            </ul>
            <ul className="space-y-3">
              <li>✔ Site optimisé mobile/tablette</li>
              <li>✔ Livraison sous 5 à 7 jours</li>
              <li>✔ Bonus : Guide PDF + 1 semaine de support</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* Call to Action */}
      <section id="contact" className="py-24 px-6 bg-indigo-700 text-white text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-4xl font-bold mb-4">Prêt à lancer votre boutique ?</h2>
          <p className="mb-6 text-lg">
            Contactez-moi dès maintenant pour recevoir un devis ou discuter de votre projet. Réponse sous 24h garantie.
          </p>
          <a
            href="mailto:ton-email@exemple.com"
            className="inline-block bg-white text-indigo-700 font-bold py-4 px-8 rounded-full shadow hover:bg-gray-200 transition"
          >
            Je veux ma boutique maintenant
          </a>
          <p className="mt-4 text-sm opacity-90">À partir de 299€ — site livré en 5 à 7 jours</p>
        </motion.div>
      </section>
    </main>
  );
}
