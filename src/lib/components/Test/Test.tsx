import { TestProps } from "./Test.type";
import "./Test.css";

const Test = ({ className }: TestProps) => {
  return (
    <div
      className={`test` + className}
      style={{
        fontSize: "16px",
        fontWeight: "700",

        borderRadius: "8px",
        color: "white",
      }}
    >
      Test
    </div>
  );
};

export default Test;
