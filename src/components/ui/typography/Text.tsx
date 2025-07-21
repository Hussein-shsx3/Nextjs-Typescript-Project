import clsx from "clsx";

type TextSize = "sm" | "md" | "lg";
type TextAlign = "left" | "center" | "right";
type TextAs = "p" | "span" | "div";

interface TextProps {
  children: React.ReactNode;
  as?: TextAs;
  className?: string;
  size?: TextSize;
  align?: TextAlign;
  muted?: boolean; // for faded text
}

const sizeClasses: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
};

export const Text = ({
  children,
  as: Tag = "p",
  size = "md",
  align = "left",
  muted = false,
  className,
}: TextProps) => {
  return (
    <Tag
      className={clsx(
        sizeClasses[size],
        align === "center" && "text-center",
        align === "right" && "text-right",
        muted && "text-gray-500",
        className
      )}
    >
      {children}
    </Tag>
  );
};
