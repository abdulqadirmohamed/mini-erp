import { Inter } from "next/font/google";
import "../globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Login",
  description: "This is Marketing Page",
};

export default function RootLayout({ children }:{children: React.ReactNode}) {
  return <div className="w-full h-screen flex flex-col bg-[#E8EEF3]">{children}</div>;
}