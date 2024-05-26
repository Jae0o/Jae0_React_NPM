import { IconGlobalProps } from "../Icons.type";

const CloseIcon = ({ size = "3.2rem", fill = "black", ...rest }: IconGlobalProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={size}
      viewBox="0 -960 960 960"
      width={size}
      fill={fill}
      {...rest}
    >
      <path d="m249-183-66-66 231-231-231-231 66-66 231 231 231-231 66 66-231 231 231 231-66 66-231-231-231 231Z" />
    </svg>
  );
};

export default CloseIcon;
