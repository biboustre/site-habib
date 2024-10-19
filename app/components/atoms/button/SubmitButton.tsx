import React from "react";

const SubmitButton: React.FC = () => (
  <div className="text-right">
    <button
      type="submit"
      className="rounded bg-amber-600 px-4 py-2 font-bold text-white hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Send message
    </button>
  </div>
);

export default SubmitButton;