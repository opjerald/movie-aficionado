import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Movie Aficionado",
  description:
    "Welcome to Movie Aficionado, your go-to source for all things cinema! Explore comprehensive movie details, read insightful reviews, discover upcoming releases, and connect with fellow film enthusiasts. Dive deep into the world of movies with Movie Aficionado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
