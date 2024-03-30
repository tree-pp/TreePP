import React from 'react';
import Image from 'next/image';
import TreePP_Topbanner from 'public/TopBanner.svg';
import TreePP_Topbanner_Mobile from 'public/TreePP_Mobile_Topbanner.webp';
import Link from 'next/link';

const TopBanner = () => {
	return (
		<div className=''>
			<div className='relative md:hidden flex flex-col items-center container mx-auto w-full h-full z-0'>
				<Image
					className='w-full h-auto md:h-auto object-fill md:object-cover'
					src={TreePP_Topbanner_Mobile}
					alt='Tree++ Mobile Top Banner'
				/>
				<div className='absolute top-12 md:left-0 md:transform text-center md:text-left md:translate-x-24 z-10 flex flex-col items-center'>
					<div className='tracking-tighter leading-[0.8] text-black uppercase'>
						<div className='inline-block font-extrabold text-4xl text-green-600'>
							Tree{' '}
						</div>{' '}
						<div className='inline-block text-4xl font-thin'>Plus Plus</div>
					</div>
					<div className='mt-2 text-center text-2xl leading-6 text-slate-600'>
						<div className='inline-block'>Healing the environment</div>{' '}
						<div className='inline-block font-light'> One tree at a time</div>
					</div>
				</div>
			</div>

			<div className='hidden md:block relative flex-col items-center min-w-full min-h-full z-0 rounded-full'>
				{/* Content for medium and large screens */}
				<Image
					className='w-full h-auto md:h-auto object-fill md:object-cover'
					src={TreePP_Topbanner}
					alt='Tree++ Top Banner'
				/>
				<div className='md:absolute md:top-1/4 md:left-0 md:transform text-center md:text-left md:translate-x-24 z-10 flex flex-col items-center'>
					<div className='tracking-tighter leading-[0.8] text-black text-7xl uppercase'>
						<div className='inline-block font-extrabold text-green-600'>
							Tree{' '}
						</div>{' '}
						<div className='inline-block font-light'>Plus Plus</div>
					</div>
					<div className='font-thin tracking-tight text-center text-3xl text-slate-600'>
						<div className='inline-block'>Healing the environment, </div>{' '}
						<div className='inline-block'>one tree at a time</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TopBanner;
