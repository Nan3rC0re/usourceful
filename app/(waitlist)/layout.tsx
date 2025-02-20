"use client";
import { ReactNode } from "react";
import "./waitlist.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex relative flex-col items-center bg-[#ffffff] overflow-y-hidden">
      {children}
    </main>
  );
};

export default Layout;
