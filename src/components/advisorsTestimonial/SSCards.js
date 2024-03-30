'use-client';
import { React } from 'react';
import Image from 'next/image';

export default function SSCards({ isEntering, cardData, currentCard }) {
	return (
		<div className='flex flex-col  justify-center'>
			<div
				className={`flex flex-row  pt-10 -mb-3  justify-center  transition-opacity duration-1000 ${
					isEntering ? 'opacity-100' : 'opacity-0'
				}`}
			>
				<div className='h-20 w-20 relative'>
					<Image
						src={cardData[currentCard].src}
						alt='advisor'
						className='rounded-full p-2 '
						layout='fill'
					/>
				</div>
				<div className='flex flex-col pl-2 justify-start'>
					<p
						className={`font-sans Roboto text-lg mt-4 transition-opacity duration-500 ${
							isEntering ? 'opacity-100' : 'opacity-0'
						}`}
					>
						{cardData[currentCard].name}
					</p>
					<p
						className={`text-sm text-gray-500 transition-opacity duration-500 ${
							isEntering ? 'opacity-100' : 'opacity-0'
						}`}
					>
						{cardData[currentCard].designation}
					</p>
				</div>
			</div>
			<div className='flex justify-center'>
				<div style={{ whiteSpace: 'pre-wrap' }}>
					<div
						class='max-w-4xl p-4 text-gray-800 bg-amber-0 rounded-lg shadow transition-opacity duration-1000'
						style={{ opacity: isEntering ? 1 : 0 }}
					>
						<div class='mb-2'>
							<div class='-mb-12 text-7xl italic text-left text-gray-400'>
								“
							</div>
							<p class='indent-6 px-4 text-lg text-center italic font-serif text-gray-600'>
								{cardData[currentCard].quote}
							</p>
							<div class='-mb-12 -mt-1 -mr-0 text-7xl italic text-right text-gray-300'>
								”
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
