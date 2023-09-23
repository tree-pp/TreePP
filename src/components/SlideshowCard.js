"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cardData = [
    { src: '/tree.png', name: 'Firstname Lastname', quote: 'Tree++ is a very nice initiative. I am very happy to be a part of it. I stayed with them since their beginning.' },
    { src: '/tree.png', name: 'Oldname Newname', quote: 'Tree++ is a very nice initiative. I like it. I stayed with them since their beginning.' },
    { src: '/tree.png', name: 'Name1 Name2', quote: 'Tree++ is a very nice initiative. I want it. I stayed with them since their beginning.' },
    { src: '/tree.png', name: 'Your Name', quote: 'Tree++ is a very nice initiative. Text, more text even more text and many more text. I love it. I stayed with them since their beginning.' },
];

export default function SlideshowCard() {
    const [currentCard, setCurrentCard] = useState(0);
    const [isEntering, setIsEntering] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsEntering(false); // Set to false to start exit transition
            setTimeout(() => {
                setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
                setIsEntering(true); // Set to true to start enter transition
            }, 400); // Adjust the delay to match your desired transition time
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index) => {
        setIsEntering(false); // Set to false to start exit transition
        setTimeout(() => {
            setCurrentCard(index);
            setIsEntering(true); // Set to true to start enter transition
        }, 500); // Adjust the delay to match your desired transition time
    };

    return (
        <div className="flex flex-col py-10 container mx-auto">
            <div className="head-text text-center">
                <span>What Our <b>Advisors</b> Say</span>
                <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row md:justify-between mt-5 items-center lg:w-full lg:px-8">
                    <div className={`flex flex-col md:flex-row pt-4 md:w-full md:justify-center items-center transition-opacity ${isEntering ? 'opacity-100' : 'opacity-0'}`}>
                        <Image src={cardData[currentCard].src} width={200} height={200} alt="advisor" className="rounded-full pl-25 bg-yellow-300" />
                        <div className="flex flex-col md:pl-10 text-center">
                            <div className={`sub-head-text mt-4 transition-opacity ${isEntering ? 'opacity-100' : 'opacity-0'}`}>
                                {cardData[currentCard].name}
                            </div>
                            <span className={`caption-text transition-opacity ${isEntering ? 'opacity-100' : 'opacity-0'}`}>Big guy at big company</span>
                        </div>
                    </div>
                    <div className={`paragraph-text md:w-full pl-8 pr-6 pt-10 lg:pt-6 lg:pr-20 text-center transition-opacity ${isEntering ? 'opacity-100' : 'opacity-0'}`}>
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                            <div class="max-w-4xl p-4 text-gray-800 bg-green-200 rounded-lg shadow transition-opacity" style={{ opacity: isEntering ? 1 : 0 }}>
                                <div class="mb-2">
                                    <div class="h-3 text-3xl text-left text-gray-600">“</div>
                                    <p class="px-4 text-sm text-center italic font-serif text-gray-600">
                                        {cardData[currentCard].quote}
                                    </p>
                                    <div class="h-3 text-3xl text-right text-gray-600">”</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center mt-2">
                {cardData.map((_, index) => (
                    <div
                        key={index}
                        className={`h-2 w-2 mx-1 rounded-full ${index === currentCard ? 'bg-white' : 'bg-gray-300'
                            } cursor-pointer`}
                        onClick={() => handleSlideChange(index)}
                    />
                ))}
            </div>
        </div>
    );
}
