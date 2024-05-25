import * as S from "./Modal.style";
import { ModalProps } from "./Modal.type";

const Modal = ({ isShow, backgroundStyle, zIndex }: ModalProps) => {
  return (
    isShow && (
      <S.ModalBackground
        style={backgroundStyle}
        $zIndex={zIndex}>
        Modal
      </S.ModalBackground>
    )
  );
};

export default Modal;
