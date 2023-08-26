import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cardData = [
    { src: '/tree.png', name: 'Firstname Lastname', quote: 'Tree++ is a very nice initiative.I am very happy to be a part of it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Oldname Newname', quote: 'Tree++ is a very nice initiative.I like it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Name1 Name2', quote: 'Tree++ is a very nice initiative.I want it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Your Name', quote: 'Tree++ is a very nice initiative.I love it. I stayed with them since their begining.' },
];

export default function SlideshowCard() {
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index) => {
        setCurrentCard(index);
    };

    return (<div>
        <div className="flex flex-col items-center md:py-10 container mx-auto">
            <div className="font-semibold text-3xl ">
                <span>Testimony</span>
                <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
            </div>
            <div className="flex flex-row justify-between mt-10">
                <div className="flex flex-col w-2/12 justify-center items-center">

                    <Image src={cardData[currentCard].src} width={500} height={500} alt="advisor" className="rounded-full pl-25"></Image>
                    <div className="font-semibold text-xl pt-10">
                        {cardData[currentCard].name}
                    </div>
                </div>
                <div className="w-1/2">
                    {cardData[currentCard].quote}
                </div>
            </div>

        </div>
        <div className="flex justify-center mt-2">
            {cardData.map((_, index) => (
                <div
                    key={index}
                    className={`h-2 w-2 mx-1 rounded-full ${index === currentCard ? 'bg-white' : 'bg-gray-300'
                        } cursor-pointer`}
                    onClick={() => handleSlideChange(index)} // Update currentCard on click
                />
            ))}
        </div>
    </div>
    );
}