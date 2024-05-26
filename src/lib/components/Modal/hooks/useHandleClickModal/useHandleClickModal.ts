import { MouseEvent } from "react";

import { useHandleClickModalCallback } from "./useHandleCloseModal.type";

const useHandleClickModal = (onClose: useHandleClickModalCallback) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useHandleClickModal;
