import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/my-ui/navbar";
import Footer from "@/components/my-ui/footer";
import { ThemeProvider } from "@/components/shadcn-ui/theme-provider";

export const metadata: Metadata = {
  title: "Usourseful",
  description: "A resource bank for cs students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* <Navbar /> */}
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
