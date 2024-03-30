'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import SSCards from './SSCards';

const cardData = [
	{
		src: '/adv-kma.jpg',
		name: 'Kazi Masudul Alam, PhD',
		designation: 'Professor of CSE at Khulna University',
		quote:
			"As an technical professional passionate about environmental sustainability, I'm impressed by the vision of Tree++. Their innovative use of technology to facilitate tree planting and carbon offsetting is a testament to the power of digital solutions in addressing global challenges. I'm excited to collaborate with the team and leverage ICT tools to maximize the impact of their initiatives"
	},
	{
		src: '/adv-ssr.png',
		name: 'Sana Shaminur Rahman',
		designation: 'Additional DIG of Bangladesh Police',
		quote:
			"Tree++ offers a game-changing solution to combat climate change through tree planting and carbon offsetting. Their digital platform empowers individuals and organizations to take meaningful action towards a greener future. I'm proud to support their mission and encourage others to join the movement."
	},
	{
		src: '/adv-kr.png',
		name: 'Kaiser Rashid',
		designation: 'Director (ret.) of Bridge Board Authority',
		quote:
			'As a retiree with a lifelong dedication to public service, I am delighted to witness initiatives like Tree++ emerge in the fight against climate change. Having worked within government, I understand the challenges we face in addressing such complex issues. Tree++ offers a refreshing approach, leveraging technology and community engagement to make a tangible difference. I offer my full support to this worthy cause and encourage others to join in preserving our planet for future generations'
	},
	{
		src: '/adv-tfa.png',
		name: 'Tanzeen Ferdous Alam',
		designation: 'CMO of Berger Paints Bangladesh',
		quote:
			"As a representative of a multinational corporation committed to corporate social responsibility, I am impressed by the initiative shown by Tree++. Their digital platform not only provides a practical solution for carbon offsetting but also aligns with our company's sustainability goals. We see great potential in partnering with Tree++ to support their efforts and make a meaningful impact on combating climate change"
	},
	{
		src: '/adv-ni.png',
		name: 'Nazrul Islam',
		designation: 'Deputy Country Director of Relief Internation',
		quote:
			"As an advocate for environmental sustainability within the NGO sector, I'm thrilled to see the launch of Tree++. Their innovative platform offers a practical and accessible solution for individuals and communities to contribute to carbon offsetting and tree planting efforts. I wholeheartedly support their mission and look forward to collaborating with Tree++ to amplify our impact and create positive change for our planet."
	},
	{
		src: '/adv-fa.png',
		name: 'Dr. Ferdousi Akter',
		designation: 'Deputy Director, Director of Health Office, Khulna ',
		quote:
			'As a representative of the government, I commend the Tree++ team for their proactive approach to environmental conservation. Their digital platform not only aligns with our climate action goals but also fosters community engagement and empowerment. I encourage citizens to embrace this initiative as we work together towards a more sustainable future for our planet.'
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
