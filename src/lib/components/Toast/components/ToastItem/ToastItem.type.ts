import { ToastType } from "../../Toast.type";

export interface ToastItemProps {
  id: string;
  message: string;
  deleteTime: number;
  type: ToastType;
  onClose: (toastId: string) => void;
}
