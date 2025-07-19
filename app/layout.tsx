import type { Metadata } from "next";
import "./globals.css";
import Footer from "./layout/footer/Footer";
import ClientHeader from "./layout/header/ClientHeader";
// import Head from "next/head";

export const metadata: Metadata = {
  metadataBase: new URL("https://web-ibou.vercel.app"),
  title:
    "Web'ibou - Création de sites web, applications web et mobile et design graphique",
  description:
    "Web'ibou propose des services de création de sites web, d'applications, de logos, de design graphique, d'hébergement de sites et d'optimisation. Découvrez comment nous pouvons vous aider à concrétiser vos idées.",
  keywords: [
    "création de sites internet",
    "création de sites",
    "création de sites e-commerce",
    "création e-commerce",
    "développement d'applications",
    "optimisation",
    "optimisation de sites",
    "seo",
    "référencement",
    "site web",
    "site internet",
    "Web'ibou",
    "création de sites web",
    "développement de sites internet",
    "création de boutiques en ligne",
    "photographie professionnelle",
    "montage vidéo",
    "création de vidéos",
    "retouche photo",
    "vidéos promotionnelles",
    "design graphique",
    "création de logos",
    "hébergement de sites",
    "optimisation SEO",
    "site web rapide",
    "photographe professionnel en France",
    "création de vidéos en France",
    "création de sites web à fréjus",
    "création de sites web à saint-raphael",
    "création de sites web à puget-sur-argens",
    "création de sites web à draguignan",
    "Web'ibou",
  ],
  authors: [
    {
      name: "MAAMAR BENHADJAR Habib",
      url: "https://web-ibou.vercel.app",
    },
  ],
  openGraph: {
    title: "Web'ibou",
    description:
      "Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation.",
    url: "https://web-ibou.vercel.app",
    type: "website",
    images: [
      {
        url: "https://web-ibou.vercel.app/images/banniere-reseau.jpg",
        width: 1200,
        height: 630,
        alt: "Web'ibou",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      {/* <Head>
        <meta name="google-site-verification" content="nmyqonkKHdJdw6yYS2DwSvl7s0yVO0DEz2YR-_9mZa4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <Head>
          <meta
            property="og:title"
            content="Web'ibou - Création de sites web, applications et design graphique"
          />
          <meta
            property="og:description"
            content="Découvrez nos services de photographie professionnelle, montage vidéo, création de sites web et applications."
          />
          <meta
            property="og:image"
            content="https://web-ibou.vercel.app/images/banniere-resea.jpg"
          />
          <meta property="og:url" content="https://web-ibou.vercel.app" />
          <meta property="og:type" content="website" />
        </Head>
        <link rel="canonical" href="https://web-ibou.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Webibou",
              url: "https://web-ibou.vercel.app",
              sameAs: [
                "https://www.instagram.com/webibou_creative_digital/",
                "https://www.facebook.com/votre-compte/",
              ],
              description:
                "Web'ibou propose des services de création de sites web, d'applications, de photographie professionnelle, de montage vidéo, de design graphique, d'hébergement de sites et d'optimisation SEO.",
              author: {
                "@type": "Organization",
                name: "MAAMAR BENHADJAR Habib",
                url: "https://web-ibou.vercel.app",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://web-ibou.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </Head> */}
      <head>
        <meta name="google-site-verification" content="nmyqonkKHdJdw6yYS2DwSvl7s0yVO0DEz2YR-_9mZa4" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Web'ibou - Création de sites web, applications et design graphique" />
        <meta property="og:description" content="Découvrez nos services de photographie professionnelle, montage vidéo, création de sites web et applications." />
        <meta property="og:image" content="https://web-ibou.vercel.app/images/banniere-reseau.jpg" />
        <meta property="og:url" content="https://web-ibou.vercel.app" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://web-ibou.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Webibou",
              url: "https://web-ibou.vercel.app",
              sameAs: [
                "https://www.instagram.com/webibou_creative_digital/",
                "https://www.facebook.com/votre-compte/",
              ],
              description:
                "Web'ibou propose des services de création de sites web, d'applications, de photographie professionnelle, de montage vidéo, de design graphique, d'hébergement de sites et d'optimisation SEO.",
              author: {
                "@type": "Organization",
                name: "MAAMAR BENHADJAR Habib",
                url: "https://web-ibou.vercel.app",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: "https://web-ibou.vercel.app/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="flex h-full flex-col  bg-black ">
        <ClientHeader />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
