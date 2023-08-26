"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Advisor_Photo from "public/advisor.jpg";

const imageStyle = {
    borderRadius: "50%",
    border: "1px solid #fff",
};

const imageStyle2 = {
    borderRadius: "1%", // border radius of the image
    border: "1px solid #fff", // change the #fff to #000 to see the border
};

const Testimony = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    const variants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <div className="flex flex-col items-center md:py-10 container mx-auto">
            <div className="font-semibold text-3xl ">
                <span>Testimony</span>
                <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
            </div>
            <div className="flex flex-row justify-between mt-10">
                <div className="flex flex-col w-2/12 justify-center items-center">

                    <Image src={Advisor_Photo} width={500} height={500} alt="advisor" className="rounded-full pl-25"></Image>
                    <div className="font-semibold text-xl pt-10">
                        Firstname Lastname
                    </div>
                </div>
                <div className="w-1/2">
                    Tree++ is a very nice initiative.
                     I am very happy to be a part of it. I stayed with them since their begining.
                </div>
            </div>

        </div>
    );
};

export default Testimony;