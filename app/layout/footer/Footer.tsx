"use client";

import ContactForm from "@/app/components/organism/contacForm/ContactForm";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import SocialsLinks from "@/app/components/atoms/socials/socialsLinks/SocialsLinks";

export default function Footer() {
  return (
    <footer
      className="flex scroll-mt-[100px] flex-col items-center gap-32 bg-black px-10 pt-40   "
    >
      <ContactForm />

      <div className="grid w-full gap-10 md:text-lg md:grid-cols-2  lg:grid-cols-3 ">
        <FooterColumn
          title="À propos"
          content={
            <>
              <p>
              Nous sommes une équipe de développeurs passionnés, spécialisés dans la création de sites et d’applications web sur mesure. Notre mission : vous offrir des solutions digitales modernes et performantes, adaptées à vos besoins, tout en restant accessibles et compétitives. En alliant créativité et expertise technique, nous accompagnons nos clients dans la réalisation de leurs projets avec des prix attractifs et un service personnalisé.
              </p>
              <SocialsLinks className="mt-4" />
            </>
          }
        />
        <hr className="md:hidden" />
        <FooterColumn
          title="Services"
          links={[
            "Conception de sites Web",
            "Développement Web",
            "Stratégie d'entreprise",
            "Analyse des données",
            "Conception graphique",
          ]}
        />
        <hr className="md:hidden" />
        <FooterContact />
      </div>
      <div className="mx-auto py-20  text-gray-500">
        <p>
          Copyright © 2024 Tous droits réservés
          <span className="text-yellow-600"> ♥ </span>MAAMAR BENHADJAR Habib
        </p>
      </div>
    </footer>
  );
}
