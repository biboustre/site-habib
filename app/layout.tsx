import type { Metadata } from "next";
import "./globals.css";
import Footer from "./layout/footer/Footer";
import ClientHeader from "./layout/header/ClientHeader";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Web'ibou - Création de sites web et design graphique",
  description:
    "Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation. Découvrez comment nous pouvons vous aider à concrétiser vos idées.",
  keywords: [
    "création de sites web",
    "développement d'applications",
    "design graphique",
    "maquettes",
    "logos",
    "hébergement de sites",
    "optimisation",
    "Web'ibou",
  ],
  authors: [
    {
      name: "MAAMAR BENHADJAR Habib",
      url: "https://",
    },
  ],
  openGraph: {
    title: "Web'ibou",
    description:
      "Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation.",
    url: "https://votre-site.com",
    type: "website",
    images: [
      {
        url: "/path/to/image.jpg",
        width: 800,
        height: 600,
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
    <html lang="en">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Web'ibou",
              url: "https://Web'ibou.com",
              description:
                "Web'ibou propose des services de création de sites web, d'applications, de maquettes, de logos, de design graphique, d'hébergement de sites et d'optimisation. Découvrez comment nous pouvons vous aider à concrétiser vos idées.",
              author: {
                "@type": "Person",
                name: "MAAMAR BENHADJAR Habib",
              },
            }),
          }}
        />
      </Head>
      <body className="flex h-full flex-col  bg-black">
        <ClientHeader />
        <main className="mt-[90px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
