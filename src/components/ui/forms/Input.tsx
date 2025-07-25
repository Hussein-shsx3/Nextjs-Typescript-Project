import React, { InputHTMLAttributes } from "react";
import clsx from "clsx";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "w-full h-14 px-5 rounded border border-border outline-none transition-colors duration-200",
        "hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary",
        className
      )}
      {...props}
    />
  );
};

export default Input;
