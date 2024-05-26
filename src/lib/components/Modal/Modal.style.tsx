import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalBackground = styled(motion.section)<{ $zIndex?: number; $top: number }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: ${({ $top }) => `${$top}px`};
  left: 0;

  background-color: #23232390;

  overflow: auto;
  z-index: ${({ $zIndex }) => $zIndex || 500};
`;
