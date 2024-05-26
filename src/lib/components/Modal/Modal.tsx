import { CloseIcon } from "../Icons";
import * as S from "./Modal.style";
import { ModalProps } from "./Modal.type";
import { ModalPortal } from "./components";
import { useGetModalPosition } from "./hooks";

import { AnimatePresence } from "framer-motion";

const Modal = ({ children, isShow, onClose, backgroundStyle, zIndex }: ModalProps) => {
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
            <S.ModalLayout
              initial={{
                opacity: 0,
                scale: 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0,
              }}
            >
              <S.ModalCloseIcon
                whileTap={{
                  scale: 1.2,
                }}
                whileHover={{
                  opacity: 0.4,
                }}
              >
                <CloseIcon size="100%" />
              </S.ModalCloseIcon>

              {children}
            </S.ModalLayout>
          </S.ModalBackground>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
