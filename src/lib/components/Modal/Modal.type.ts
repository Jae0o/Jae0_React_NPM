import { CSSProperties } from "react";

export interface ModalProps {
  isShow: boolean;

  zIndex?: number;
  backgroundStyle?: CSSProperties;
}
