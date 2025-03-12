"use client";
import { ReactNode } from "react";
import "./auth.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center">
      {children}
    </main>
  );
};

export default Layout;
