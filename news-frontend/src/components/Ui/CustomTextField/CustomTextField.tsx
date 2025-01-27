import { Field } from "formik";
import { FC } from "react";
import { CustomTextFieldProps } from "../../../types/ui/customTextField";

const CustomTextField: FC<CustomTextFieldProps> = ({
  as = "input",
  type = "text",
  name,
  label,
  placeholder,
  required = false,
  ...props
}) => {
  return (
    <label className="flex flex-1 flex-col">
      <span>{label}</span>
      <Field
        as={as}
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        className={`${
          as === "textarea" ? "h-32" : "h-12"
        } rounded border border-gray-400 px-4 py-2 outline-blue-500`}
        {...props}
      />
    </label>
  );
};

export default CustomTextField;
