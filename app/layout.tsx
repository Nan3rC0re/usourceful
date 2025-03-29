import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "../components/landing/Navbar/Navbar";
import Footer from "../components/landing/Footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.usourceful.info"),
  title: "Usourceful",
  description: "A library of useful resources for computer science students.",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },
  openGraph: {
    title: "Usourceful",
    description: "A library of useful resources for computer science students.",
    url: "https://www.usourceful.info/",
    siteName: "Usourceful",
    images: [
      {
        url: "/seo-img.png",
        width: 1200,
        height: 630,
        alt: "Usourceful banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Usourceful",
    description: "A library of useful resources for computer science students.",
    images: ["/seo-img.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
