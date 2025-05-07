"use client";

import { usePathname } from "next/navigation";
import BannerHomeLayout from "@/app/components/molecules/banner/BannerHome";
import BannerStackTechnic from "@/app/components/molecules/banner/BannerPortfolio";

export default function ClientBanner() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const isStackTechnicPage = pathname === "/stackTechnic";

  return (
    <>
      {isHomePage ? (
        <BannerHomeLayout />
      ) : isStackTechnicPage ? (
        <BannerStackTechnic />
      ) : null}
    </>
  );
}
