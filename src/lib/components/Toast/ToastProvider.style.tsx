import styled from "styled-components";

export const ToastContainer = styled.ul<{ $zIndex: number }>`
  position: absolute;
  top: 1rem;
  right: 1rem;

  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  font-size: 1.4rem;

  user-select: none;
  z-index: ${({ $zIndex }) => $zIndex};
`;
