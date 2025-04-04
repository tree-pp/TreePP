'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Tree_Plant_Photo from '/public/WhatWeDo.webp';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { useInView } from 'react-intersection-observer';

const WhatWeDo = () => {
	const [ref, inView] = useInView({
		triggerOnce: true
	});

	return (
		<div className='flex flex-col md:flex-row items-center justify-center section-spacing'>
			<div className='md:w-1/2 md:pl-20 md:order-2 mr-2' ref={ref}>
				<h1 className='head-text relative inline-block'>
					<b>What We Do</b>
					<div className='absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1'></div>
				</h1>
				<p className='tracking-normal md:mt-10 mt-5 paragraph-text'>
					Tree++ offers individuals and businesses to take real climate action.
					Through our digital platform, users can instantly measure their carbon
					emissions, offset them by planting trees and get rewarded for their
					efforts. At the same time, we connect sustainable product merchants,
					volunteers and landowners into a single ecosystem that powers
					collective impact and builds a regenerative future.
				</p>
				<div className='md:mt-10 mt-5 flex justify-end'>
					<p className='flex items-center uppercase tracking-wide text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-green-500'>
						<Link href='/about' className='text-green-700'>
							Learn More
						</Link>
						<AiOutlineArrowRight className='ml-1 text-green-700' />
					</p>
				</div>
			</div>

			<p className='md:w-1/2 pt-10 md:pt-0 md:flex md:justify-start md:order-1'>
				<Image
					className='rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover'
					src={Tree_Plant_Photo}
					alt='Tree++ Group Photo'
				/>
			</p>
		</div>
	);
};

export default WhatWeDo;

{
	/* <div className="mt-5 flex justify-end">
          <div className="flex items-center uppercase tracking-widest text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-iutdsred">
            <Link href="/achievements">...And So Much More</Link>
            <AiOutlineArrowRight className="ml-1" />
          </div> */
}
