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
					Tree++ aims to achieve net zero by offering carbon offsetting through
					tree plantation. Individuals can calculate their carbon footprint and
					purchase carbon offsets on the digital platform. Landowners with
					unused plantation-ready lands can enlist them on the same platform.
					Tree++ provides a unique opportunity for youth to actively participate
					in the green movement, receiving incentives for their efforts.
					Corporations of any size can offset their carbon emissions effectively
					through Tree++. This novel platform connects all stakeholders involved
					in carbon offsetting through tree plantation in a win-win-win manner.
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
