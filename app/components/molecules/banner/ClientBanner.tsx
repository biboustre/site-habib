"use client";

import { usePathname } from "next/navigation";
import BannerHomeLayout from "@/app/components/molecules/banner/BannerHomeLayout";
import BannerStackTechnic from "@/app/components/molecules/banner/BannerStackTechnic";

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