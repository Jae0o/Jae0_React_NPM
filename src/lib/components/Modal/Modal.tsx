import * as S from "./Modal.style";
import { ModalProps } from "./Modal.type";
import { ModalPortal } from "./components";
import { useGetModalPosition } from "./hooks";

import { AnimatePresence } from "framer-motion";

const Modal = ({ isShow, onClose, backgroundStyle, zIndex }: ModalProps) => {
  const { windowHeight } = useGetModalPosition({ isShow });

  return (
    <AnimatePresence>
      {isShow && (
        <ModalPortal isShow={isShow}>
          <S.ModalBackground
            style={backgroundStyle}
            $zIndex={zIndex}
            $top={windowHeight}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            Modal
            <button onClick={onClose}> close</button>
          </S.ModalBackground>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
