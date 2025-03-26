"use client";
import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Landing/Navbar/Navbar";
import { ReactNode } from "react";
import "./landing.css";

const Layout = ({ children }: { children: ReactNode }) => {

  return (
    <main className=" flex flex-col relative items-center px-6 pb-16  bg-[#ffffff]">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
