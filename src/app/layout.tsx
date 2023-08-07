import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Bottomfooter from "@/components/Bottomfooter";

export const metadata: Metadata = {
  title: "Tree++",
  description: "TreePP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main className="flex flex-col">
          <Navbar />
          {children}
          <Bottomfooter />
        </main>
      </body>
    </html>
  );
}
