import { useEffect, useRef } from "react";

import { UseKeydownModalProps } from "./useKeydownModal.type";

const useKeydownModal = ({ onClose, isShow }: UseKeydownModalProps) => {
  const handleCloseModal = useRef(onClose);

  useEffect(() => {
    if (!isShow) {
      return;
    }

    const handleEvent = ({ key }: KeyboardEvent) => {
      if (key !== "Escape") {
        return;
      }

      handleCloseModal.current();
    };

    window.addEventListener("keydown", handleEvent);

    return () => window.removeEventListener("keydown", handleEvent);
  }, [isShow]);
};

export default useKeydownModal;
