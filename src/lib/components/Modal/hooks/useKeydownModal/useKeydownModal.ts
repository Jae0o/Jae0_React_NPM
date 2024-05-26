import { useEffect, useRef } from "react";

import { UseKeydownModalProps } from "./useKeydownModal.type";

const useKeydownModal = ({ onClose, isShow, disableAwayClick }: UseKeydownModalProps) => {
  const handleCloseModal = useRef(onClose);

  useEffect(() => {
    if (!isShow || disableAwayClick) {
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
  }, [disableAwayClick, isShow]);
};

export default useKeydownModal;
