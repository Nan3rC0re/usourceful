import Footer from "@/components/Landing/Footer";
import Navbar from "@/components/Landing/Navbar/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className=" flex flex-col items-center px-4 pb-16">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
