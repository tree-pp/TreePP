import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Bottomfooter from '@/components/Bottomfooter'


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
           <Navbar />
           {children}
           <Bottomfooter />
        </main>
      </body>
    </html>
  );
}
