import React from 'react';
import Modal from 'react-modal';
import { useRouter } from 'next/navigation';

interface UserSelectionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  onClientClick: () => void;
}

const UserSelectionModal: React.FC<UserSelectionModalProps> = ({
  isOpen,
  onRequestClose,
  onClientClick,
}) => {
  const router = useRouter();

  const handleRecruiterClick = () => {
    router.push('/portfolio');
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Type Selection"
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      overlayClassName="fixed z-30 inset-0 bg-black/50"
    >
      <div className="rounded-lg bg-white p-8 shadow-lg">
        <h2 className="mb-4 text-2xl font-bold">
          Êtes-vous un client potentiel ou un recruteur ?
        </h2>
        <div className="flex justify-around">
          <button
            onClick={onClientClick}
            className="rounded bg-slate-500 px-4 py-2 text-white hover:bg-slate-700"
          >
            Client Potentiel
          </button>
          <button
            onClick={handleRecruiterClick}
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-700"
          >
            Recruteur
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default UserSelectionModal;