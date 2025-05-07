import Link from "next/link";

export const textMentionLegale = [
    {
      title: "Informations Générales",
      content: (
        <>
          <strong>Nom de l&apos;entreprise :</strong> Web&apos;ibou Créations
          <br />
          <strong>Statut :</strong> Free-lance
          <br />
          <strong>SIRET :</strong> 	81031103500036
          <br />
          <strong>Adresse :</strong> Fréjus 83600, France
          <br />
          <strong>Email :</strong> contact@webibou.com
          <br />
          <strong>Téléphone :</strong> +33 6 74 32 48 32
        </>
      ),
    },
    {
      title: "Activités",
      content: (
        <>
          Web&apos;ibou Créations propose les services suivants :
          <ul className="mt-4 list-inside list-disc space-y-2">
            <li>Développement de sites web sur mesure</li>
            <li>Création d&apos;applications mobiles (iOS et Android)</li>
            <li>Design graphique et identité visuelle</li>
            <li>Photographie professionnelle et retouche</li>
            <li>SEO et optimisation des performances</li>
          </ul>
        </>
      ),
    },
    {
      title: "Hébergement",
      content: (
        <>
          <strong>Hébergeur :</strong> Vercel
          <br />
          <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789, USA
          <br />
          <strong>Site web :</strong>{" "}
          <Link
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            www.vercel.com
          </Link>
        </>
      ),
    },
    {
      title: "Propriété Intellectuelle",
      content: (
        <>
          Les contenus présents sur ce site (textes, images, vidéos, etc.) sont
          soit la propriété de Web&apos;ibou Créations, soit utilisés sous
          licence ou dans le respect des droits d&apos;auteur.
          <br />
          <br />
          Les images et vidéos utilisées sur ce site proviennent de sources
          libres de droits ou de banques d&apos;images respectant les licences
          d&apos;utilisation.
          <br />
          <br />
          Les textes générés sont la propriété de Web&apos;ibou Créations et ne
          peuvent être reproduits sans autorisation préalable.
          <br />
          <br />
          Toute reproduction, distribution ou utilisation non autorisée des
          contenus présents sur ce site est strictement interdite.
        </>
      ),
    },
    {
      title: "Données Personnelles",
      content: (
        <>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification et de suppression de vos données personnelles. Pour toute
          demande, veuillez nous contacter à l&apos;adresse suivante :{" "}
          <Link
            href="mailto:contact@webibou.com"
            className="text-blue-400 hover:underline"
          >
            contact@webibou.com
          </Link>
          .
        </>
      ),
    },
    {
      title: "Responsabilité",
      content: (
        <>
          Web&apos;ibou Créations ne saurait être tenu responsable des dommages
          directs ou indirects résultant de l&apos;utilisation de ce site ou des
          services proposés.
        </>
      ),
    },
  ];