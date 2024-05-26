import { CloseIcon } from "../Icons";
import * as S from "./Modal.style";
import { ModalProps } from "./Modal.type";
import { ModalPortal } from "./components";
import { useAwayClickModal, useGetModalPosition, useKeydownModal } from "./hooks";

import { AnimatePresence } from "framer-motion";

const Modal = ({
  children,
  isShow,
  onClose,
  hideCloseIcon = false,
  disableAwayClick = false,
  backgroundStyle,
  modalStyle,
  zIndex,
}: ModalProps) => {
  const { windowHeight } = useGetModalPosition({ isShow });
  const handleCloseModal = useAwayClickModal(onClose);
  useKeydownModal({ onClose, isShow, disableAwayClick });

  return (
    <AnimatePresence>
      {isShow && (
        <ModalPortal isShow={isShow}>
          <S.ModalBackground
            style={backgroundStyle}
            $zIndex={zIndex}
            $top={windowHeight}
            onClick={event => !disableAwayClick && handleCloseModal(event)}
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
              $hideIcon={hideCloseIcon}
              style={modalStyle}
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
              {!hideCloseIcon && (
                <S.ModalCloseIcon
                  onClick={onClose}
                  whileTap={{
                    scale: 1.2,
                  }}
                  whileHover={{
                    opacity: 0.4,
                  }}
                >
                  <CloseIcon size="100%" />
                </S.ModalCloseIcon>
              )}

              {children}
            </S.ModalLayout>
          </S.ModalBackground>
        </ModalPortal>
      )}
    </AnimatePresence>
  );
};

export default Modal;
