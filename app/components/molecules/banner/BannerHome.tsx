import React from 'react'
import BannerMain from './BannerMain'

function BannerHome() {
  return (
    <BannerMain
            title={
                <>
                <span className=''>Web</span><span className="animate-text-gradient">&apos;ibou</span>
              </>
            }
            text={
                <>
                <span className="font-semibold animate-text-gradient">Solution</span> <br /><span className="font-extrabold ">WEB || Mobile</span> <br />
                <span className=" font-extrabold animate-text-gradient">&</span> <br />
                <span className="font-extrabold ">DESIGN</span>
              </>
            }
            src="/images/photo_ordinateur_1.webp"
            alt="photo de profil"
            />
  )
}

export default BannerHome