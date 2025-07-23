import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "@/styles/globals.css";
import AppProviders from "@/providers";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  display: "swap",
  weight: ["300", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My Next App",
  description: "A clean Next.js + TypeScript setup",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.variable}>
        <AppProviders>
        {children}
        </AppProviders>
      </body>
    </html>
  );
}
