import { RESET_BUTTON } from "../../../../styles";
import { ToastType } from "../../Toast.type";

import { motion } from "framer-motion";
import styled from "styled-components";

export const ToastItemLayout = styled(motion.li)`
  width: 20rem;
  height: 6.5rem;
  position: relative;
  border-radius: 0.6rem;
  box-shadow: 0 0 2rem 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const ToastCloseButton = styled.button`
  ${RESET_BUTTON}

  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  transition: opacity 0.3;
  &:hover {
    opacity: 0.3;
  }
`;

export const ToastItemContent = styled.p`
  width: 20rem;
  height: 6rem;
  padding: 1.4rem 1rem 1rem 1rem;
`;

export const ToastProgressbarOutline = styled.div`
  width: 20rem;
  height: 0.5rem;
  display: flex;
  justify-content: center;
  background-color: #fff;
`;

export const ToastProgressbar = styled(motion.div)<{ $toastType: ToastType }>`
  width: 20rem;
  height: 0.5rem;
  translate: -100%;
  background-color: ${({ $toastType }) => {
    if ($toastType === "alert") {
      return "#FFA500";
    }
    if ($toastType === "safe") {
      return "#00C73C";
    }
    if ($toastType === "warning") {
      return "#FFD400";
    }
    if ($toastType === "danger") {
      return "#ED4044";
    }
    return "#FFA500";
  }};
`;
