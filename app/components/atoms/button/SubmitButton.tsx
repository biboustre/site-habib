import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
  <div className="text-left">
    {/* Je dois utiliser le composant btnRounded !!!!  */}
    <button
      type="submit"
      className="animate-bg-gradient w-full rounded-full p-5 text-[13px] font-medium uppercase tracking-widest  text-white lg:w-3/5  2xl:py-6 2xl:text-lg"
    >
      {text}
    </button>
  </div>
);

export default SubmitButton;
