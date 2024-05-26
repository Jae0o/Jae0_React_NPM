import { CSSProperties } from "react";

export interface ModalProps {
  isShow: boolean;
  onClose: () => void;

  zIndex?: number;
  backgroundStyle?: CSSProperties;
}
