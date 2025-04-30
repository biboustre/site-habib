import React from "react";
// import AnimatedSection from "@/app/features/animatedSection/AnimatedSection";
import DuplicatedText from "../../atoms/duplicatedText/DuplicatedText";
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
    <section className="flex h-auto flex-col gap-10 md:gap-20 ">
      <section>
        <DuplicatedText
          className="mx-auto px-3 md:px-0 max-w-[1000px] font-extrabold text-4xl pt-11 md:pt-[55px]"
          text={text}
        />
      </section>

      {/* Section avec l'image de fond et le contenu */}
      <section
        className="parallaxe h-auto"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <section className="relative h-screen w-full md:h-[550px]">
          {/* Section des statistiques */}
          {stats && (
            <section className="absolute top-[-68px] hidden w-full gap-8 sm:flex md:justify-center ">
              {stats.map((stat, index) => (
                <CardStats key={index} value={stat.value} label={stat.label} />
              ))}
            </section>
          )}
          <section className="absolute inset-0 z-10 flex w-full flex-col justify-center gap-10 text-center">
            <section className="space-y-10 px-2 text-white md:px-0 md:pt-10">
              <h2 className="mx-auto max-w-[800px] text-2xl font-extrabold tracking-wide md:text-3xl">
                {title.map((part, index) =>
                  typeof part === "string" ? (
                    <span key={index}>{part}</span>
                  ) : (
                    <span key={index} className={part.className}>
                      {part.text}
                    </span>
                  )
                )}
              </h2>
              <p className="mx-auto max-w-md text-lg rounded-lg bg-slate-700/60 p-4 font-semibold">
                {subtitle}
              </p>
            </section>

            {/* Boutons */}
            <section className="flex justify-center md:space-x-10">
              {buttons.map((button, index) => (
                <BtnRounded
                  key={index}
                  className="bgPrimaryStack text-lg"
                  text={button.text}
                  href={button.href}
                />
              ))}
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default BannerMarketing;
