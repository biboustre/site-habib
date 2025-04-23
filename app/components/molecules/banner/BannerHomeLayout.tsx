import React from 'react'
import BannerMain from './BannerMain'

function BannerHomeLayout() {
  return (
    <BannerMain
            title={
                <>
                Web<span className="colorPrimaryStack">&apos;ibou</span>
              </>
            }
            text={
                <>
                <span className="font-semibold">Solution<br /> <span className="font-extrabold">WEB||Mobile</span> <br /></span>
                <span className="colorPrimaryStack font-extrabold">&</span> <br />
                <span className="font-extrabold">DESIGN</span>
              </>
            }
            src="/images/IMG17.jpg"
            alt="photo de profil"
            />
  )
}

export default BannerHomeLayout