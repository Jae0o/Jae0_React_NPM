import { useEffect, useState } from "react";

import { UseGetModalPositionProps } from "./useGetModalPosition.type";

const useGetModalPosition = ({ isShow }: UseGetModalPositionProps) => {
  const [windowHeight, setWindowHeight] = useState(window.scrollY);

  useEffect(() => {
    setWindowHeight(window.scrollY);
  }, [isShow]);

  console.log(windowHeight);

  return { windowHeight };
};

export default useGetModalPosition;
