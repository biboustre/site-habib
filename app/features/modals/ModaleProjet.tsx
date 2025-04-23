import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
}

const ModalProjet: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
}) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose(); // Ferme la modale si on clique à l'extérieur
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={handleOverlayClick} // Gestionnaire pour fermer en cliquant à l'extérieur
    >
      <div className="relative w-[90%] max-w-[500px] rounded-lg bg-slate-200 p-10 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>
        <h2 className="mb-4 text-center text-2xl font-bold">{title}</h2>
        <p className="text-gray-700 text-center">{description}</p>
      </div>
    </div>
  );
};

export default ModalProjet;