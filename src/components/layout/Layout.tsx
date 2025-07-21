"use client";

import React, { ReactNode } from "react";
import Header from "../ui/navigation/Header";
import Footer from "../ui/navigation/Footer";
import { usePathname } from "next/navigation";

const authPaths = ["/login", , "/signUp", "/forgot-password"];

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();

  if (authPaths.includes(pathname)) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
