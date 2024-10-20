import React from "react";

interface SubmitButtonProps {
  text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ text }) => (
  <div className="text-left">
    {/* Je dois utiliser le composant btnRounded !!!!  */}
    <button
      type="submit"
      className="bgPrimaryStack w-full rounded-full p-5 text-[13px] font-medium uppercase  tracking-widest text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:w-3/5"
    >
      {text}
    </button>
  </div>
);

export default SubmitButton;
