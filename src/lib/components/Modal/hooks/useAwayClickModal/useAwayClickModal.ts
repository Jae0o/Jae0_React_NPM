import { MouseEvent } from "react";

import { useAwayClickModalCallback } from "./useAwayClickModal.type";

const useAwayClickModal = (onClose: useAwayClickModalCallback) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useAwayClickModal;
