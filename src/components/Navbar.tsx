'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Divide as Hamburger } from 'hamburger-react';
// import Font Awesome CSS

import { useState } from 'react'; // import state

export default function Navbar() {
	const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

	return (
		<div className='pr-4 lg:pr-14 pl-6 lg:pl-12 py-2 bg-slate-900 gap-y-8 lg:gap-y-0 flex items-center justify-between font-bold'>
			<div className='flex w-48 h-10 -max relative z-50'>
				<Link href='/'>
					<Image
						alt='TreePP Logo'
						// width={67}
						// height={55}
						layout='fill'
						src='/logo-1.png'
					/>{' '}
				</Link>
			</div>
			{/* src="/logo_tree.png" /> </Link> */}
			<nav>
				<section className='MOBILE-MENU flex lg:hidden'>
					<Hamburger
						rounded
						color='#FFF'
						duration={0.15}
						easing='ease-in'
						onToggle={toggled => {
							if (toggled) {
								setIsNavOpen(prev => !prev); // open a menu
							} else {
								setIsNavOpen(false); // close a menu
							}
						}}
					/>
					<div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
						<ul className='MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]'>
							<li className='uppercase tracking-widest font-normal text-black text-xl border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'>
								<a href='#mission'>Mission</a>
							</li>
							<li className='uppercase tracking-widest font-normal text-xl text-black border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'>
								<a href='#vision'>Vision</a>
							</li>
							<li className='uppercase tracking-widest font-normal text-black text-xl border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'>
								<a href='#team'>Team</a>
							</li>
							<li className='uppercase tracking-widest font-normal text-xl text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-500'>
								<a href='/join'>Join</a>
							</li>
						</ul>
					</div>
				</section>
				<div className='DESKTOP-MENU hidden lg:flex gap-x-10 items-center'>
					<Link
						href='#mission'
						className='uppercase tracking-widest text-xs text-white border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'
					>
						Mission
					</Link>
					<Link
						href='#vision'
						className='uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'
					>
						Vision
					</Link>
					<Link
						href='#team'
						className='uppercase tracking-widest text-white text-xs border-b-2 transition duration-500 border-transparent hover:text-green-400 hover:border-green-500'
					>
						Team
					</Link>
					<Link
						href='/join'
						className='uppercase tracking-widest text-xs text-slate-800 hover:text-white bg-green-400 hover:bg-green-700 px-6 py-2 rounded-full transition duration-500'
					>
						Join
					</Link>
				</div>
			</nav>
			<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 64px;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        padding-top: 200px;
        align-items: center;
        transition-property: opacity, left, top, height;
        transition-duration: 3s, 5s, 3s, 5s;
      }
    `}</style>
		</div>
	);
}
