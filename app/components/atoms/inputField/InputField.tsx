import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<InputFieldProps> = ({
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
      className="mt-1 w-full rounded border border-gray-700 bg-gray-800 p-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      required
    />
  </div>
);

export default InputField;
