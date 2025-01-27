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
      className={`cursor-pointer rounded bg-blue-200 px-4 py-2 transition-opacity duration-200 hover:opacity-80 ${className} border`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
