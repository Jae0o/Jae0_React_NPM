import React from "react";

import useToggle from "../../../../../lib/hooks/useToggle/useToggle";
import * as S from "./ToggleTestComponent.style";

const ToggleTestComponent = () => {
  const { isToggle, handleToggle, handleToggleOff, handleToggleOn } = useToggle();

  const buttonHovered = {
    filter: "brightness(85%)",
  };

  const buttonTaped = {
    scale: 0.9,
  };
  return (
    <S.TestLayout>
      <S.TestButtonContainer>
        <S.TestButton
          whileHover={buttonHovered}
          whileTap={buttonTaped}
          onClick={handleToggle}
        >
          handleToggle
        </S.TestButton>
        <S.TestButton
          whileHover={buttonHovered}
          whileTap={buttonTaped}
          onClick={handleToggleOn}
        >
          handleToggleOn
        </S.TestButton>
        <S.TestButton
          whileHover={buttonHovered}
          whileTap={buttonTaped}
          onClick={handleToggleOff}
        >
          handleToggleOff
        </S.TestButton>
      </S.TestButtonContainer>

      <S.TestContainer>
        <S.TestBox
          whileHover={buttonHovered}
          whileTap={buttonTaped}
          initial={{ backgroundColor: "#d9d9d9" }}
          animate={!isToggle ? {} : { backgroundColor: "orangered" }}
          onClick={handleToggleOn}
          style={{ cursor: "pointer" }}
        >
          True
        </S.TestBox>
        <S.TestBox style={{ color: "black" }}>{`현재 : ${isToggle}`}</S.TestBox>
        <S.TestBox
          whileHover={buttonHovered}
          whileTap={buttonTaped}
          initial={{ backgroundColor: "#d9d9d9" }}
          animate={isToggle ? {} : { backgroundColor: "orangered" }}
          onClick={handleToggleOff}
          style={{ cursor: "pointer" }}
        >
          False
        </S.TestBox>
      </S.TestContainer>
    </S.TestLayout>
  );
};

export default ToggleTestComponent;
