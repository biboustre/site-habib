import React from "react";

interface InputProps {
  placeholder: string;
  label?: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  label,
  type,
  name,
  value,
  onChange,
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-slate-400">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className=" h-12 w-full rounded border border-gray-400 bg-white p-2 text-black focus:outline-none focus:ring-2 focus:ring-gray-400"
      required
    />
  </div>
);

export default Input;
