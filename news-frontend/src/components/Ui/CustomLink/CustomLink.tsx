import { FC } from "react";
import { CustomLinkProps } from "../../../types/ui/customLink";

const CustomLink: FC<CustomLinkProps> = ({ href, title, className }) => {
  return (
    <a
      href={href}
      className={`border-b-2 border-transparent font-medium text-white hover:border-white ${className}`}
    >
      {title}
    </a>
  );
};

export default CustomLink;
