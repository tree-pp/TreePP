'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SSCards from './SSCards';

const cardData = [
	{
		src: '/tree.png',
		name: 'Firstname Lastname',
		quote:
			'Tree++ is a very nice initiative. I am very happy to be a part of it. I stayed with them since their beginning.'
	},
	{
		src: '/tree.png',
		name: 'Oldname Newname',
		quote:
			'Tree++ is a very nice initiative. I like it. I stayed with them since their beginning.'
	},
	{
		src: '/tree.png',
		name: 'Name1 Name2',
		quote:
			'Tree++ is a very nice initiative. I want it. I stayed with them since their beginning.'
	},
	{
		src: '/tree.png',
		name: 'Your Name',
		quote:
			'Tree++ is a very nice initiative. Text, more text even more text and many more text. I love it. I stayed with them since their beginning.'
	}
];

const variants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0 }
};

export default function SlideshowCard() {
	const [currentCard, setCurrentCard] = useState(0);
	const [isEntering, setIsEntering] = useState(true);
	const [ref, inView] = useInView({
		triggerOnce: true
	});

	useEffect(() => {
		const interval = setInterval(() => {
			setIsEntering(false); // Set to false to start exit transition
			setTimeout(() => {
				setCurrentCard(prevCard => (prevCard + 1) % cardData.length);
				setIsEntering(true); // Set to true to start enter transition
			}, 700); // Adjust the delay to match your desired transition time
		}, 8000);

		return () => clearInterval(interval);
	}, []);

	const handleSlideChange = index => {
		setIsEntering(false); // Set to false to start exit transition
		setTimeout(() => {
			setCurrentCard(index);
			setIsEntering(true); // Set to true to start enter transition
		}, 400); // Adjust the delay to match your desired transition time
	};

	return (
		<div className='' ref={ref}>
			<motion.h2
				className='flex flex-col py-10 container mx-auto'
				initial='hidden'
				animate={inView ? 'visible' : 'hidden'}
				variants={variants}
				transition={{ duration: 0.5 }}
			>
				{/* <div className="flex flex-col py-10 container mx-auto">  */}
				<div className='head-text text-center'>
					<span>
						What Our <b>Advisors</b> Say
					</span>
					<div className='absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 md:w-28 md:ml-11 w-20 ml-8 rounded-full'></div>
				</div>
				{/* TODO :: send only the image, profile and testimonial */}
				<SSCards
					isEntering={isEntering}
					cardData={cardData}
					currentCard={currentCard}
				/>
				<div className='flex justify-center mt-2'>
					{cardData.map((_, index) => (
						<div
							key={index}
							className={`h-2 w-2 mx-1 rounded-full ${
								index === currentCard ? 'bg-white' : 'bg-gray-300'
							} cursor-pointer`}
							onClick={() => handleSlideChange(index)}
						/>
					))}
				</div>

				{/* </div> */}
			</motion.h2>
		</div>
	);
}
