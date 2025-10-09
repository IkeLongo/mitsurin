import MainNavbar from "@/components/ui/navigation/MainNavbar";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { link } from "framer-motion/m";

// const inter = Inter({
//   variable: "--font-inter",
//   subsets: ["latin"],
// });

// const jetbrainsMono = JetBrains_Mono({
//   variable: "--font-jetbrains-mono",
//   subsets: ["latin"],
// });

// const oswald = Oswald({
//   variable: "--font-oswald",
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"], // Add weights you need
// });

export const metadata: Metadata = {
  title: "Mitsurin Wagyu Beef",
  description: "Premium Japanese Wagyu beef from Mitsurin Ranch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`antialiased`}
      >
        <MainNavbar />
        {children}
      </body>
    </html>
  );
}
