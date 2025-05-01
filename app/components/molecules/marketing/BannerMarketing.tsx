import React from "react";
// import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import BtnRounded from "../../atoms/button/BtnRounded";
import CardStats from "../cards/cardStats/CardStats";

interface BannerMarketingProps {
  title: (string | { text: string; className?: string })[];
  subtitle: string;
  text: string;
  backgroundImage: string;
  buttons: { text: string; href: string }[];
  stats?: { value: string; label: string }[];
}

const BannerMarketing: React.FC<BannerMarketingProps> = ({
  title,
  subtitle,
  backgroundImage,
  buttons,
  stats,
  text,
}) => {
  return (
    <section className="flex h-auto flex-col gap-40 xl:gap-52">
      {/* <section className="flex justify-center items-center"> */}
      <h1 className="animate-text-gradient btn-gradient hover-text-white mx-auto max-w-[1000px]  cursor-pointer rounded-xl px-3 py-10 text-center text-4xl font-extrabold duration-500 hover:scale-90 md:px-10  lg:text-6xl">
        {text}
      </h1>
      {/* </section> */}

      {/* Section avec l'image de fond et le contenu */}
      <section
        className="parallaxe h-auto py-10"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <section className="h- relative flex w-full flex-col justify-center gap-20 md:h-auto md:gap-16">
          {stats && (
            <section className="absolute top-[-120px] hidden w-full gap-8 sm:flex md:justify-center ">
              {stats.map((stat, index) => (
                <CardStats key={index} value={stat.value} label={stat.label} />
              ))}
            </section>
          )}

          {/* <section className="flex flex-col justify-center gap-10 text-center"> */}
          <section className="space-y-10 px-2 text-center text-white sm:pt-20 md:px-0">
            <h2 className="mx-auto max-w-[890px] text-2xl font-extrabold sm:text-4xl 2xl:max-w-[1300px] 2xl:text-5xl">
              {title.map((part, index) =>
                typeof part === "string" ? (
                  <span key={index}>{part}</span>
                ) : (
                  <span
                    key={index}
                    className="animate-text-gradient uppercase 2xl:leading-[65px]"
                  >
                    {part.text}
                  </span>
                )
              )}
            </h2>
            <p className="mx-auto max-w-md rounded-lg bg-slate-700/60 p-4 text-lg font-semibold 2xl:max-w-xl 2xl:text-2xl">
              {subtitle}
            </p>
          </section>

          {/* Boutons */}
          <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:space-x-10">
            {buttons.map((button, index) => (
              <BtnRounded
                key={index}
                className="btn-gradient bg-slate-700/80 text-lg"
                text={button.text}
                href={button.href}
              />
            ))}
          </section>
        </section>
      </section>
    </section>
    // </section>
  );
};

export default BannerMarketing;
