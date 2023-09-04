import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const cardData = [
    { src: '/tree.png', name: 'Firstname Lastname', quote: 'Tree++ is a very nice initiative.I am very happy to be a part of it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Oldname Newname', quote: 'Tree++ is a very nice initiative.I like it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Name1 Name2', quote: 'Tree++ is a very nice initiative.I want it. I stayed with them since their begining.' },
    { src: '/tree.png', name: 'Your Name', quote: 'Tree++ is a very nice initiative. Text, more text even more text and many more text. I love it. I stayed with them since their begining.' },
];

export default function SlideshowCard() {
    const [currentCard, setCurrentCard] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentCard((prevCard) => (prevCard + 1) % cardData.length);
        }, 700);

        return () => clearInterval(interval);
    }, []);

    const handleSlideChange = (index) => {
        setCurrentCard(index);
    };

    return (

        <div className="flex flex-col items-stretch md:py-5 container mx-auto ">
            <div className="font-normal text-3xl text-center">
                <span>What Our <b>Advisors</b> Say</span>
                <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
            </div>
            <div>
                <div className="flex flex-col md:flex-row md:justify-between mt-5 items-center w-full px-32">
                    <div className="flex flex-col md:flex-row w-5/12 md:justify-start items-center" >

                        <Image src={cardData[currentCard].src} width={200} height={200} alt="advisor" className="rounded-full pl-25 bg-yellow-300"></Image>
                        <div className="flex flex-col pl-10 ">
                            <div className="font-semibold text-xl pt-10 " >
                                {cardData[currentCard].name}
                            </div>
                            <span className='text-xs'>Big guy at big company</span>
                        </div>
                    </div>
                    <div className="w-7/12 bg-slate-50 p-10 rounded-xl text-start" >
                        <div style={{ whiteSpace: 'pre-wrap' }}>
                            {cardData[currentCard].quote}
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