import React, { InputHTMLAttributes } from "react";

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  className,
  ...inputProps
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-medium text-sm uppercase">
        {label}
      </label>
      <input
        id={id}
        required
        className={`h-14 border-border border-[1px] outline-none px-5 hover:border-primary transition-colors duration-200 rounded ${
          className ?? ""
        }`}
        {...inputProps}
      />
    </div>
  );
};

export default FormField;
