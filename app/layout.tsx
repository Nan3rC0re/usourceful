import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usourceful",
  description: "A library of useful resources for computer science students.",
  icons: {
    icon: "/",
  },
  openGraph: {
    title: "Usourceful",
    description: "A library of useful resources for computer science students.",
    url: "https://www.usourceful.info/",
    siteName: "Usourceful",
    images: [
      {
        url: "/",
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
    images: ["/"],
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
        {children}
        <Analytics />
      </body>
    </html>
  );
}
