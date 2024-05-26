import { motion } from "framer-motion";
import styled from "styled-components";

export const TestLayout = styled.section`
  width: 660px;

  display: flex;
  gap: 20px;
  flex-direction: column;

  user-select: none;
`;

export const TestButtonContainer = styled.div`
  width: 100%;

  display: flex;
  gap: 20px;
`;

export const TestButton = styled(motion.button)`
  width: 200px;
  height: 50px;

  border: none;
  background-color: orange;
  border-radius: 8px;

  font-size: 16px;
  font-weight: 600;
  color: white;

  cursor: pointer;
`;

export const TestContainer = styled.div`
  width: 100%;
  height: 200px;

  display: flex;
  gap: 20px;
`;

export const TestBox = styled(motion.div)`
  width: 200px;
  height: 200px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 20px;
  font-weight: 600;
  color: white;

  border-radius: 8px;
`;
