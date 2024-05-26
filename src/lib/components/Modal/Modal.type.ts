import { CSSProperties } from "react";

export interface ModalProps {
  children: React.ReactNode;
  isShow: boolean;
  onClose: () => void;

  zIndex?: number;
  backgroundStyle?: CSSProperties;
}
