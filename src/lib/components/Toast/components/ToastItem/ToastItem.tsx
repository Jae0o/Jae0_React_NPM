import { CloseIcon } from "../../../Icons";
import * as S from "./ToastItem.style";
import { ToastItemProps } from "./ToastItem.type";

import { AnimatePresence } from "framer-motion";

const ToastItem = ({ id, message, onClose }: ToastItemProps) => {
  return (
    <AnimatePresence>
      <S.ToastItemLayout>
        <S.ToastCloseButton
          onClick={() => onClose(id)}
          type="button"
        >
          <CloseIcon size="1.6rem" />
        </S.ToastCloseButton>

        <S.ToastItemContent>{message}</S.ToastItemContent>

        <S.ToastProgressbarOutline>
          <S.ToastProgressbar $toastType={"alert"} />
        </S.ToastProgressbarOutline>
      </S.ToastItemLayout>
    </AnimatePresence>
  );
};

export default ToastItem;
