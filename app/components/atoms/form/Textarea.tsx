import React from "react";

interface TextareaProps {
  label?: string;
  name: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-400">
      {label}
    </label>
    <textarea
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className=" h-44 w-full rounded border border-gray-400 bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
      rows={4}
      required
    />
  </div>
);

export default Textarea;
