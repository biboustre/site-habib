import React from "react";

const SubmitButton: React.FC = () => (
  <div className="text-right">
    {/* Je dois utiliser le composant btnRounded !!!!  */}
    <button
      type="submit"
      className="bgPrimaryStack rounded px-4 py-2 font-medium tracking-widest text-black hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send message
    </button>
  </div>
);

export default SubmitButton;
