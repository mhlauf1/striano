import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";

const overusedGrotesk = localFont({ src: "../fonts/OverusedGrotesk-VF.woff2" });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${overusedGrotesk.className} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
