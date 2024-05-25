import { useCallback, useState } from "react";

const useModal = () => {
  const [isShow, setIsShow] = useState(false);

  const handleShowModal = useCallback(() => {
    setIsShow(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsShow(false);
  }, []);

  return { isShow, handleShowModal, handleCloseModal };
};

export default useModal;
