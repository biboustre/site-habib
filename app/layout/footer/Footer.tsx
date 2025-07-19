"use client";

import ContactForm from "@/app/components/organism/contacForm/ContactForm";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import SocialsLinks from "@/app/components/atoms/socials/socialsLinks/SocialsLinks";

export default function Footer() {
  return (
    <footer className="flex  scroll-mt-[100px] flex-col items-center gap-32 bg-gradient-to-b  from-black via-neutral-800 to-black  pt-40 md:px-2 lg:px-10   ">
      <ContactForm />

      <section className=" grid w-full gap-10  px-3 text-lg md:grid-cols-2 lg:grid-cols-3">
        <FooterColumn
          title="À propos"
          content={
            <>
              <p>
                Nous sommes une équipe de professionnels passionnés, spécialisés
                dans la création de sites web, d&apos;applications web et
                mobiles sur mesure. En plus de nos services de développement,
                nous proposons également des prestations de photographie et de
                design graphique pour sublimer votre image de marque. Notre
                mission : vous offrir des solutions digitales modernes,
                performantes et esthétiques, parfaitement adaptées à vos
                besoins. En alliant créativité, expertise technique et sens
                artistique, nous accompagnons nos clients dans la réalisation de
                leurs projets avec des prix attractifs et un service
                personnalisé.
              </p>
              <SocialsLinks className="mt-4" />
            </>
          }
        />
        <hr className="w-4/5 md:hidden" />
        <FooterColumn
          title="Services"
          links={[
            "Développement Web/Mobiles",
            "Développement d'applications",
            "Conception de Logos/Flyers/Cartes",
            "Optimisation SEO",
            "Optimisation de la performance",
            "Intégration de systèmes de paiement",
            "Solutions e-commerce",
            "Création de sites vitrines",
            "Conception graphique",
            "Photographie et Vidéo",
            "Montage vidéo",
          ]}
        />
        <hr className="w-4/5 md:hidden" />
        <FooterContact />
      </section>
      <section className="mx-auto py-20 text-center  text-gray-500">
        <p>
          Copyright © 2024 Tous droits réservés
          <span className="text-yellow-600"> ♥ </span>MAAMAR BENHADJAR Habib
        </p>
      </section>
    </footer>
  );
}
