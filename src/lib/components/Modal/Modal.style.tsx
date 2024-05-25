import styled from "styled-components";

export const ModalBackground = styled.section<{ $zIndex?: number }>`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #23232390;

  z-index: ${({ $zIndex }) => $zIndex || 500};
`;
