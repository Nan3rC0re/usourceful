"use client";
import { ReactNode } from "react";
import "./discovery.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex flex-col relative items-center px-6 pb-16  bg-[#ffffff]">
      {children}
    </main>
  );
};

export default Layout;
