import { useState } from "react";

interface IReturn {
  showModal: () => void;
  handleCancel: () => void;
  isModalOpen: boolean;
}

function useModal(): IReturn {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return { showModal, handleCancel, isModalOpen };
}

export default useModal;
