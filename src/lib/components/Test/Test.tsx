import { TestProps } from "./Test.type";
import * as S from "./Test.style";

const Test = ({ ...rest }: TestProps) => {
  return <S.TestComponent {...rest}>Test</S.TestComponent>;
};

export default Test;
