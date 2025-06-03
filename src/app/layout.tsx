// app/layout.tsx
import type { Metadata } from "next";
import Nav from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Striano Electric Co., Inc. | Electrical & Telecommunications Contractor",
  description:
    "Striano Electric Co., Inc. is an I.B.E.W. full-service contractor providing electrical and telecommunications installations, repairs, and maintenance across the Greater New York & New Jersey Areas.",
  keywords: [
    "striano electric",
    "electrical contractor",
    "telecommunications",
    "I.B.E.W.",
    "NY electrician",
    "NJ electrical services",
    "commercial electrical",
    "industrial electrician",
    "telecom installation",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: "https://striano.vercel.app",
  },
  metadataBase: new URL("https://striano.vercel.app"),
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden antialiased`}>
        <Nav />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
