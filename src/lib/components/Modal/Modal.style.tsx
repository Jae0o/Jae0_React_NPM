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

export const ModalLayout = styled(motion.article)<{ $hideIcon: boolean }>`
  min-height: 4rem;
  min-width: 4rem;
  padding: 1rem;
  padding-top: ${({ $hideIcon }) => ($hideIcon ? "1rem" : "2rem")};

  display: flex;
  justify-content: end;

  position: relative;

  background-color: #ffffff;
  border-radius: 1rem;
`;

export const ModalCloseIcon = styled(motion.i)`
  width: 1.4rem;
  height: 1.4rem;

  position: absolute;
  top: 0.3rem;

  cursor: pointer;
`;
