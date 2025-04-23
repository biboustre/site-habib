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
    <section className="min-h-auto space-y-36">
      <section>
        <DuplicatedText
          className="mx-auto max-w-[1000px] pt-11 md:pt-[55px]"
          duplicatedClassName="pt-10"
          text={text}
        />
      </section>

      {/* Section avec l'image de fond et le contenu */}
      <section
        className="parallaxe"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      >
        <section className="relative h-[550px] w-full">
          {/* Section des statistiques */}
          {stats && (
            <section className="absolute top-[-68px] hidden w-full gap-8 sm:flex md:justify-center">
              {stats.map((stat, index) => (
                <CardStats key={index} value={stat.value} label={stat.label} />
              ))}
            </section>
          )}
          <section className="absolute inset-0 z-10 flex w-full flex-col justify-center gap-10 text-center">
            <section className="space-y-10 pt-10 text-white">
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
              <p className="mx-auto max-w-md rounded-lg bg-slate-700/60 p-4 font-semibold">
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
