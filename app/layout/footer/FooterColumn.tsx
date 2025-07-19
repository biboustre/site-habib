import React from "react";

interface FooterColumnProps {
  title: string;
  links?: string[];
  content?: React.ReactNode;
}

export default function FooterColumn({
  title,
  links,
  content,
}: FooterColumnProps) {
  return (
    <div className="space-y-10 md:mx-auto">
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      {links && (
        <ul className="space-y-2">
          {links.map((link, index) => (
            <li key={index} className="text-gray-400">
              <a href="#" className="hover:text-white">
                ➝ {link}
              </a>
            </li>
          ))}
        </ul>
      )}
      {content && <div className="mt-4 text-gray-400">{content}</div>}
    </div>
  );
}
