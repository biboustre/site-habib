import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
  <div className="text-left">
    {/* Je dois utiliser le composant btnRounded !!!!  */}
    <button
      type="submit"
      className="btn-gradient  hover-text-white w-full rounded-full p-5 text-[13px] font-bold uppercase tracking-wider text-black shadow-2xl shadow-slate-900 duration-300  hover:scale-95 hover:shadow-none lg:w-3/5  2xl:py-6 2xl:text-lg"
    >
      {text}
    </button>
  </div>
);

export default SubmitButton;
