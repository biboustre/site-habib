import SocialsLinks from '../../atoms/socialsLinks/SocialsLinks';

export default function Footer () {
  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: Informations de Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4">Contact</h3>
          <p>web&apos;ibou</p>
          <p>Fréjus</p>
          <p>Email : Habib-MB@outlook.com</p>
          <p>Téléphone : 06 74 32 48 32
          </p>
        </div>

        {/* Section 2: Navigation rapide */}
        <div>
          <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li>
              <a href="/about" className="hover:text-gray-400">À propos</a>
            </li>
            <li>
              <a href="/services" className="hover:text-gray-400">Services</a>
            </li>
            <li>
              <a href="/faq" className="hover:text-gray-400">FAQ</a>
            </li>
            <li>
              <a href="/privacy" className="hover:text-gray-400">Politique de confidentialité</a>
            </li>
            <li>
              <a href="/terms" className="hover:text-gray-400">Conditions d&apos;utilisation</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Réseaux sociaux et newsletter */}
        <div>
          <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
          <ul className="flex space-x-4 mb-4">
            <li>
              <SocialsLinks />  
            </li>
            
          </ul>
          <p>Inscrivez-vous à notre newsletter pour recevoir nos dernières nouvelles.</p>
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
      </div>

      {/* Copyright et mentions légales */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        <p>&copy; 2024 Nom de l&apos;entreprise. Tous droits réservés.</p>
        <a href="/legal" className="hover:text-gray-400">Mentions légales</a>
      </div>
    </footer>
  );
};