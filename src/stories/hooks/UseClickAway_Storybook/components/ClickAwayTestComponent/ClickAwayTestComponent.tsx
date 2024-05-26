import React, { useState } from "react";

import useClickAway from "../../../../../lib/hooks/useClickAway/useClickAway";
import * as S from "./ClickAwayTestComponent.style";

import { AnimatePresence, motion } from "framer-motion";

const AwayClickTestComponent = () => {
  const [count, setCount] = useState(0);
  const ref = useClickAway<HTMLDivElement>(() => setCount(prevCount => prevCount + 1));

  const counterVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
    out: { opacity: 0, y: 30 },
  };

  return (
    <S.TestLayout>
      <S.TestInfo>
        <p style={{ fontSize: "16px", color: "gray" }}>
          Ref Target을 제외한 아무곳이나 클릭해보세요!
        </p>

        <p style={{ fontSize: "22px" }}>Callback Active Count</p>
        <S.TestCountBox>
          <AnimatePresence>
            <motion.p
              key={count}
              initial="hidden"
              animate="visible"
              exit="out"
              variants={counterVariants}
              transition={{ duration: 0.3 }}
              style={{ position: "absolute" }}
            >
              {count}
            </motion.p>
          </AnimatePresence>
        </S.TestCountBox>
      </S.TestInfo>

      <S.TestBox ref={ref}>Ref Target</S.TestBox>
    </S.TestLayout>
  );
};

export default AwayClickTestComponent;
