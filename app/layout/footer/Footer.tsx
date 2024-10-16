"use client";

import BtnMain from "@/app/components/atoms/button/BtnMain";
// import BtnMain from "@/app/components/atoms/btnMain/BtnMain";
// import AnchorLink from "../../components/atoms/links/anchorLink/AnchorLink";
// import SocialsLinks from "../../components/atoms/socials/socialsLinks/SocialsLinks";
import ContactForm from "@/app/components/organism/contacForm/ContactForm";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bgFooter flex scroll-mt-[100px] flex-col items-center gap-20 p-10 md:items-start lg:p-20"
    >
      <ContactForm />
      <BtnMain
        href="/stackTechnic"
        label="Stack technique"
        classNameBtn="btnStack"
      />
    </footer>
  );
}

{
  /* <footer
      id="contactFooter"
      className="bgFooter flex flex-col justify-between px-6 py-14 text-white md:h-[60vh]"
    >
      <section className=" mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        <section>
          <h3 className="mb-4 text-lg font-bold">Contact</h3>
          <p>web&apos;ibou</p>
          <p>Fréjus</p>
          <p>Email : Habib-MB@outlook.com</p>
          <p>Téléphone : 06 74 32 48 32</p>
          <BtnMain href="/stackTechnic" label="Stack technique" />
        </section>

        <nav>
          <h3 className="mb-4 text-lg font-bold">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <AnchorLink href="">À propos</AnchorLink>
            </li>
            <li>
              <AnchorLink href="">Services</AnchorLink>
            </li>
            <li>
              <AnchorLink href="">FAQ</AnchorLink>
            </li>
          </ul>
        </nav>

        <section>
          <h3 className="mb-4 text-lg font-bold">Suivez-nous</h3>
          <nav className="mb-4 flex space-x-4">
            <SocialsLinks />
          </nav>
          <p>
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            nouvelles.
          </p>
          <form className="mt-2">
            <input
              type="email"
              className="w-full rounded bg-gray-700 px-3 py-2 text-white placeholder:text-gray-400"
              placeholder="Votre email"
            />
            <button className="mt-2 w-full rounded bg-blue-600 py-2 hover:bg-blue-700">
              S&apos;inscrire
            </button>
          </form>
        </section>
      </section>

      <section className="mt-8 border-t border-gray-700 pt-4 text-center text-sm">
        <p>&copy; 2024 Web&apos;ibou. Tous droits réservés.</p>
        <a href="/legal" className="hover:text-gray-400">
          Mentions légales
        </a>
      </section>
    </footer> */
}
