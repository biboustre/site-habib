import React from "react";

interface ContactItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ContactItem({
  icon,
  title,
  description,
}: ContactItemProps) {
  return (
    <section className="flex w-32 flex-col items-center text-center">
      <section className="colorPrimaryStack mb-4 rounded-full bg-gray-800 p-10 text-3xl">
        {icon}
      </section>
      <h3 className="font-bold">{title}</h3>
      <p className="mt-2 text-gray-400">{description}</p>
    </section>
  );
}
