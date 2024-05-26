import { UseKeydownModalCallback } from "./useKeydownModal.type";

const useKeydownModal = (onClose: UseKeydownModalCallback) => {
  const handleKeydownModal = ({ key }: KeyboardEvent) => {
    if (key !== "Escape") {
      return;
    }

    onClose();
  };

  return handleKeydownModal;
};

export default useKeydownModal;
