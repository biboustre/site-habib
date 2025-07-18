import type { Metadata } from "next";
import "./globals.css";
// import Head from "next/head";

 

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
        
      <body className="flex h-full flex-col  bg-black ">
        {children}
      </body>
    </html>
  );
}
