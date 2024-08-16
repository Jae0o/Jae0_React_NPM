import { ToastProviderProps } from "./Toast.type";
import * as S from "./ToastProvider.style";
import { useToastStore } from "./stores";

const ToastProvider = ({ children, zIndex = 50 }: ToastProviderProps) => {
  const { toastList } = useToastStore();

  return (
    <>
      {children}
      <S.ToastContainer $zIndex={zIndex}>
        {toastList.map(({ id, message, deleteTime, type }) => (
          <li>{id + message + deleteTime + type + "Test"}</li>
        ))}
      </S.ToastContainer>
    </>
  );
};

export default ToastProvider;
