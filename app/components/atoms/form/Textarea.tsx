import React from "react";

interface TextareaProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({ label, name, value, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-400">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="mt-1 w-full rounded border border-gray-700 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      rows={4}
      required
    />
  </div>
);

export default Textarea;
