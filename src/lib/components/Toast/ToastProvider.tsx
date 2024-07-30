import { ToastProviderProps } from "./Toast.type";
import * as S from "./ToastProvider.style";

const ToastProvider = ({ children, zIndex = 50 }: ToastProviderProps) => {
  return (
    <>
      {children}
      <S.ToastContainer $zIndex={zIndex} />
    </>
  );
};

export default ToastProvider;
