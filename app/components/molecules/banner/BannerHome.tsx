import React from "react";
import BannerMain from "./BannerMain";

function BannerHome() {
  return (
    <BannerMain
      title={
        <>
          <span className="">Web</span>
          <span className="animate-text-gradient">&apos;ibou</span>
        </>
      }
      text={
        <>
          <span className="animate-text-gradient font-semibold">Solution</span>{" "}
          <br />
          <span className="font-extrabold ">WEB || Mobile</span> <br />
          <span className=" animate-text-gradient font-extrabold">&</span>{" "}
          <br />
          <span className="font-extrabold ">DESIGN</span>
        </>
      }
      src="/images/photo_ordinateur_1.webp"
      alt="photo de profil"
    />
  );
}

export default BannerHome;
