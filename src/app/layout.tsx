<<<<<<< HEAD
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../Components/Navbar'
import Bottomfooter from '@/Components/Bottomfooter'


=======
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
>>>>>>> ed37bef00c0d52ede60535e83aad7e516e98b4db

// import Font Awesome CSS

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above

// Tell Font Awesome to skip adding the CSS automatically
// since it's already imported above
//config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <main className="flex flex-col">
<<<<<<< HEAD
        <Navbar/>
        {children}
        <Bottomfooter />
=======
          <Navbar />
          {children}
>>>>>>> ed37bef00c0d52ede60535e83aad7e516e98b4db
        </main>
      </body>
    </html>
  );
}
