import { FC } from "react";
import { CustomButtonProps } from "../../../types/ui/customButton";

const CustomButton: FC<CustomButtonProps> = ({
  type = "button",
  disabled = false,
  children,
  className,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`rounded px-4 py-2 transition-opacity duration-150 hover:opacity-100`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
