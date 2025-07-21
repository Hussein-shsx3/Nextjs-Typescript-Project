import clsx from "clsx";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

interface HeadingProps {
  as?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  weight?: FontWeight; // <-- add this prop
}

const sizeClasses = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
};

const weightClasses: Record<FontWeight, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

export const Heading = ({
  as: Tag = "h2",
  children,
  className,
  align = "left",
  size = "md",
  weight = "medium",
}: HeadingProps) => {
  return (
    <Tag
      className={clsx(
        sizeClasses[size],
        weightClasses[weight],
        align === "center" && "text-center",
        align === "right" && "text-right",
        align === "left" && "text-left",
        className
      )}
    >
      {children}
    </Tag>
  );
};
