import styled from "styled-components";

export const TestLayout = styled.section`
  width: 800px;
  height: 800px;

  display: flex;
  justify-content: center;
  align-items: center;

  gap: 40px;

  user-select: none;
`;

export const TestBox = styled.section`
  width: 300px;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: orange;
  border-radius: 20px;

  font-size: 18px;
  font-weight: 600;
  color: white;
`;

export const TestInfo = styled.section`
  width: 300px;
  height: 300px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;

  font-size: 18px;
  font-weight: 600;
`;

export const TestCountBox = styled.div`
  width: 40px;
  height: 60px;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
`;
