import { FC } from "react";
import { CustomLinkProps } from "../../../types/ui/customLink";

const CustomLink: FC<CustomLinkProps> = ({ href, title, className }) => {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 hover:text-blue-500 ${className}`}
    >
      {title}
    </a>
  );
};

export default CustomLink;
