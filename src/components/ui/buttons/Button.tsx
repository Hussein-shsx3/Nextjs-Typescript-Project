import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

const variantClasses = {
  primary: "bg-gray-800 text-white hover:bg-primary",
  secondary: "bg-primary text-white hover:bg-primary-dark",
  ghost: "bg-transparent text-primary hover:text-primary-dark",
};

const sizeClasses = {
  sm: "text-sm h-10 px-4",
  md: "text-lg h-14 px-6",
  lg: "text-xl h-16 px-8",
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "rounded-full font-medium transition-colors duration-300",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
