'use-client';
import { React } from 'react';
import Image from 'next/image';

export default function SSCards({ isEntering, cardData, currentCard }) {
	return (
		<div>
			<div className='flex flex-col md:flex-row md:justify-between mt-5 items-center lg:w-full lg:px-8'>
				<div
					className={`flex flex-col md:flex-row pt-4 md:w-full md:justify-center items-center transition-opacity duration-1000 ${
						isEntering ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<Image
						src={cardData[currentCard].src}
						width={200}
						height={200}
						alt='advisor'
						className='rounded-full pl-25 bg-yellow-300'
					/>
					<div className='flex flex-col md:pl-10 text-center'>
						<div
							className={`sub-head-text mt-4 transition-opacity duration-1000 ${
								isEntering ? 'opacity-100' : 'opacity-0'
							}`}
						>
							{cardData[currentCard].name}
						</div>
						<span
							className={`caption-text transition-opacity duration-1000 ${
								isEntering ? 'opacity-100' : 'opacity-0'
							}`}
						>
							Big guy at big company
						</span>
					</div>
				</div>
				<div
					className={`paragraph-text md:w-full pl-8 pr-6 pt-10 lg:pt-6 lg:pr-20 text-center transition-opacity duration-1000 ${
						isEntering ? 'opacity-100' : 'opacity-0'
					}`}
				>
					<div style={{ whiteSpace: 'pre-wrap' }}>
						<div
							class='max-w-4xl p-4 text-gray-800 bg-amber-100 rounded-lg shadow transition-opacity duration-1000'
							style={{ opacity: isEntering ? 1 : 0 }}
						>
							<div class='mb-2'>
								<div class='h-5 text-3xl italic text-left text-gray-600'>“</div>
								<p class='px-4 text-lg text-center italic font-serif text-gray-600'>
									{cardData[currentCard].quote}
								</p>
								<div class='h-4 text-3xl italic text-right text-gray-600'>
									”
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
