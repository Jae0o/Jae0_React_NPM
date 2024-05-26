import { MouseEvent } from "react";

import { UseHandleCloseModalCallback } from "./useHandleCloseModal.type";

const useHandleCloseModal = (onClose: UseHandleCloseModalCallback) => {
  const handleCloseModal = ({ target, currentTarget }: MouseEvent) => {
    if (target !== currentTarget) {
      return;
    }

    onClose();
  };

  return handleCloseModal;
};

export default useHandleCloseModal;
