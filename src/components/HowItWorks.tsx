'use client';
import React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Tree_Photo from 'public/HowItWorks.webp';

const HowItWorks = () => {
	const [ref, inView] = useInView({
		triggerOnce: true
	});

	return (
		<div className='flex flex-col md:flex-row items-center justify-center section-spacing'>
			<div className='md:w-1/2 md:pr-20 md:order-1' ref={ref}>
				<h1 className='head-text relative inline-block'>
					<b>How It Works</b>
					<div className='absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1'></div>
				</h1>
				<p className='tracking-normal md:mt-10 mt-5 paragraph-text'>
					At the core of Tree++ is a powerful digital platform that includes an
					AI-powered open-source carbon footprint calculator, a smart carbon
					offsetting engine and a sustainable marketplace. <br /> With the end
					user application users can measure your carbon footprint, whether it's
					a product, service or activity, simply like scanning a QR code. After
					measureing the carbon footprint, Tree++ prompts users to offset it
					fully or partially by connecting the offsetting request to right land
					and volunteers in the field. Tree++ allows the users to check the
					status of the trees they plant through it's built in monitoring and
					tracking system. <br />
					The ecosystem keeps users engaged by rewarding them one Tree++ coin on
					each tree they plants and the users can redeem these coins to purchase
					from the Tree++ marketplace where our partners merchants sell
					eco-friendly and sustainable products and services.
				</p>
			</div>
			<p className='md:w-1/2 pt-10 md:pt-0 md:flex md:justify-end md:order-2'>
				<Image
					className='rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover'
					src={Tree_Photo}
					alt='Tagged Tree'
				/>
			</p>
		</div>
	);
};

export default HowItWorks;
