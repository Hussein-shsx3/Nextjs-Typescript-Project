import clsx from "clsx";
import { Text } from "@/components/ui/typography/Text";

interface AlertMessageProps {
  type?: "error" | "success" | "info";
  message: string;
  className?: string;
}

const alertStyles = {
  error: {
    container: "bg-red-50 border border-red-200",
    text: "text-red-600",
  },
  success: {
    container: "bg-green-50 border border-green-200",
    text: "text-green-600",
  },
  info: {
    container: "bg-blue-50 border border-blue-200",
    text: "text-blue-600",
  },
};

const AlertMessage = ({
  type = "info",
  message,
  className,
}: AlertMessageProps) => {
  const style = alertStyles[type];

  return (
    <div className={clsx("mt-4 p-3 rounded-lg", style.container, className)}>
      <Text size="sm" className={style.text}>
        {message}
      </Text>
    </div>
  );
};

export default AlertMessage;
