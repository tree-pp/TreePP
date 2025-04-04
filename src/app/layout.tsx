import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';
import Bottomfooter from '@/components/Bottomfooter';
import { website_metadata } from '@/const';

export const metadata: Metadata = website_metadata;

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<main className='flex flex-col'>
					<Navbar />
					{children}
					<Bottomfooter />
				</main>
			</body>
		</html>
	);
}
