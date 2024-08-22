import { useEffect } from "react";

import { ToastProviderProps } from "./Toast.type";
import * as S from "./ToastProvider.style";
import { ToastItem } from "./components";
import { useToastStore } from "./stores";

const ToastProvider = ({ children, zIndex = 50 }: ToastProviderProps) => {
  const { toastList, removeToast, createToast } = useToastStore();

  useEffect(() => {
    createToast("dasdasda");
  }, [createToast]);

  return (
    <>
      {children}
      <S.ToastContainer $zIndex={zIndex}>
        {toastList.map(({ id, message, deleteTime, type }) => (
          <ToastItem
            key={id}
            id={id}
            message={message}
            deleteTime={deleteTime}
            type={type}
            onClose={removeToast}
          />
        ))}
      </S.ToastContainer>
    </>
  );
};

export default ToastProvider;
