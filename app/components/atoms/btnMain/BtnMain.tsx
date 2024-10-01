// import React from "react";

// export default function BtnMain() {
//   return (
//     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//       Button
//     </button>
//   );
// }

// import React from 'react';

// interface BtnMainProps {
//   label: string;
//   onClick?: () => void;
//   classNameBtn?: string;
// }

// export default function BtnMain  ({ label, onClick, classNameBtn }: BtnMainProps) {
//   return (
//     <button onClick={onClick} className={`btnMain bg-blue-950 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-xl w-64 h-16 ${classNameBtn}`}>
//       {label}
//     </button>
//   );
// };

import React from 'react';
import Link from 'next/link';

interface BtnMainProps {
  label: string;
  onClick?: () => void;
  classNameBtn?: string;
  href?: string;
}

export default function BtnMain({ label, onClick, classNameBtn, href }: BtnMainProps) {
  const buttonContent = (
    <button
      onClick={onClick}
      className={`btnMain bg-gray-800/95 tracking-widest uppercase hover:bg-gray-700 text-white font-bold py-6 px-4 rounded-xl w-64  ${classNameBtn}`}
    >
      {label}
    </button>
  );

  return href ? (
    <Link href={href}>
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );
}