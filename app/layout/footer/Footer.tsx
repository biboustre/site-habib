"use client";

import ContactForm from "@/app/components/organism/contacForm/ContactForm";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import SocialsLinks from "@/app/components/atoms/socials/socialsLinks/SocialsLinks";

export default function Footer() {
  return (
    <footer className="flex scroll-mt-[100px] flex-col items-center gap-32  pt-40 md:px-2 lg:px-10   ">
      <ContactForm />

      <section className="grid w-full gap-10 px-3 md:grid-cols-2 text-lg  lg:grid-cols-3 ">
        <FooterColumn
          title="À propos"
          content={
            <>
              <p>
                Nous sommes une équipe de développeurs passionnés, spécialisés
                dans la création de sites et d&apos;applications web sur mesure.
                Notre mission : vous offrir des solutions digitales modernes et
                performantes, adaptées à vos besoins, tout en restant
                accessibles et compétitives. En alliant créativité et expertise
                technique, nous accompagnons nos clients dans la réalisation de
                leurs projets avec des prix attractifs et un service
                personnalisé.
              </p>
              <SocialsLinks className="mt-4" />
            </>
          }
        />
        <hr className="md:hidden" />
        <FooterColumn
          title="Services"
          links={[
            "Développement Web/Mobiles",
            "Développement d'applications",
            "Conception de logos/Maquettes",
            "Optimisation SEO",
            "Optimisation de la performance",
            "Intégration de systèmes de paiement",
            "Solutions e-commerce",
            "Création de sites vitrines",
            "Conception graphique",
          ]}
        />
        <hr className="md:hidden" />
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
