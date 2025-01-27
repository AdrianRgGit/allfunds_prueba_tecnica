import { FC } from "react";
import { CustomButtonProps } from "../../../types/ui/customButton";

const CustomButton: FC<CustomButtonProps> = ({
  type = "button",
  disabled = false,
  bg = "bg-blue-500",
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
      className={`cursor-pointer rounded border px-4 py-2 text-white transition-opacity duration-200 hover:opacity-80 ${bg} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
