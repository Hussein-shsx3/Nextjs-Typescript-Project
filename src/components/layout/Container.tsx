import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div
      className={`container mx-auto min-h-screen px-4 bg-background ${className} flex flex-column`}
    >
      {children}
    </div>
  );
};

export default Container;
