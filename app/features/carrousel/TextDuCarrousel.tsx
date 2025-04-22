"use client";
import { useState } from "react";

interface TextDuCarrouselProps {
  text: string;
  className?: string;
  classNameText?: string;
}

const TextDuCarrousel: React.FC<TextDuCarrouselProps> = ({
  text,
  className,
  classNameText,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className={className}>
      <p
        className={`font-ubuntu w-full px-10 text-center text-lg text-white md:text-xl 2xl:text-2xl ${classNameText} ${
          isExpanded ? "" : " line-clamp-5"
        }`}
      >
        {text}
      </p>
      <div className="mt-2">
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="font-bold text-sky-800 underline"
          >
            Lire plus
          </button>
        ) : (
          <button
            onClick={() => setIsExpanded(false)}
            className="font-bold text-sky-800 underline"
          >
            Lire moins
          </button>
        )}
      </div>
    </section>
  );
};

export default TextDuCarrousel;
