import React, { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  loading?: boolean;
  className?: string;
}

const variantClasses = {
  primary:
    "bg-gray-800 text-white hover:bg-primary disabled:bg-gray-500 disabled:hover:bg-gray-500",
  secondary:
    "bg-primary text-white hover:bg-green-600 disabled:bg-gray-500 disabled:hover:bg-gray-500",
  ghost:
    "bg-transparent text-primary hover:text-green-600 disabled:text-gray-400 disabled:hover:text-gray-400",
};

const sizeClasses = {
  sm: "text-sm h-10 px-4",
  md: "text-lg h-14 px-6",
  lg: "text-xl h-16 px-8",
};

// Loading spinner component
const LoadingSpinner = ({ size }: { size: "sm" | "md" | "lg" }) => {
  const spinnerSize = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  return (
    <div className="flex items-center justify-center">
      <div
        className={clsx(
          "animate-spin rounded-full border-2 border-white/30 border-t-white",
          spinnerSize[size]
        )}
      />
    </div>
  );
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  loading = false,
  className,
  disabled,
  ...props
}) => {
  const isDisabled = disabled || loading;

  return (
    <button
      className={clsx(
        "rounded-full font-medium transition-all duration-300 relative overflow-hidden",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50",
        "disabled:cursor-not-allowed",
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && "w-full",
        loading && "animate-pulse",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      <span
        className={clsx(
          "flex items-center justify-center gap-2 transition-opacity duration-200",
          loading && "opacity-90"
        )}
      >
        {loading && <LoadingSpinner size={size} />}
        <span
          className={clsx(
            "transition-all duration-200",
            loading && "tracking-wider"
          )}
        >
          {children}
        </span>
      </span>

      {loading && (
        <div className="absolute inset-0 bg-white/10 rounded-full animate-pulse" />
      )}
    </button>
  );
};

export default Button;
