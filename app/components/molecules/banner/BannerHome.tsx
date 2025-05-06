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
          <span className="">WEB || Mobile</span> <br />
          <span className=" animate-text-gradient ">&</span>{" "}
          <br />
          <span >DESIGN</span>
        </>
      }
      alt="photo de profil"
    />
  );
}

export default BannerHome;
