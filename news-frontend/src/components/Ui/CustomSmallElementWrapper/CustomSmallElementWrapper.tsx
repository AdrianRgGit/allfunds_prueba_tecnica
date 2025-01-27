import { FC } from "react";
import { SmallElementWrapperProps } from "../../../types/ui/customSmallElementWrapper";

const CustomSmallElementWrapper: FC<SmallElementWrapperProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`flex items-center gap-x-1 ${className}`}>{children}</div>
  );
};

export default CustomSmallElementWrapper;
