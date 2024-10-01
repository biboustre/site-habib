import AnchorLink from "../../atoms/anchorLink/AnchorLink";
import SocialsLinks from "../../atoms/socialsLinks/SocialsLinks";

export default function Footer() {
  return (
    <footer id="contactFooter" className="flex flex-col justify-between bg-gray-800 text-white py-14 px-6 md:h-[60vh]">
      <section className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Informations de Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>web&apos;ibou</p>
          <p>Fréjus</p>
          <p>Email : Habib-MB@outlook.com</p>
          <p>Téléphone : 06 74 32 48 32</p>
        </div>

        {/* Section 2: Navigation rapide */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
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
        </div>

        {/* Section 3: Réseaux sociaux et newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
          <nav className="flex space-x-4 mb-4">
            <SocialsLinks />
          </nav>
          <p>
            Inscrivez-vous à notre newsletter pour recevoir nos dernières
            nouvelles.
          </p>
          <form className="mt-2">
            <input
              type="email"
              className="w-full px-3 py-2 rounded bg-gray-700 text-white placeholder-gray-400"
              placeholder="Votre email"
            />
            <button className="mt-2 w-full py-2 bg-blue-600 rounded hover:bg-blue-700">
              S&apos;inscrire
            </button>
          </form>
        </div>
      </section>

      {/* Copyright et mentions légales */}
      <section className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Web&apos;ibou. Tous droits réservés.</p>
        <a href="/legal" className="hover:text-gray-400">
          Mentions légales
        </a>
      </section>
    </footer>
  );
}
