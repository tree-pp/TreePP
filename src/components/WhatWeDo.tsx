"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tree_Plant_Photo from "/public/WhatWeDo.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhatWeDo = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center section-spacing">
      <div className="md:w-1/2 md:pl-20 md:order-2 mr-2" ref={ref}>
        <motion.h1
          className="head-text relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          <b>What We Do</b>
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal md:mt-10 mt-5 paragraph-text"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          At Tree++, we lead the charge towards a sustainable future by offering
          carbon offsetting through tree plantation. Our digital platform
          empowers individuals to calculate and purchase carbon offsets, while
          providing landowners a way to contribute to reforestation efforts. For
          the youth, Tree++ presents a unique opportunity to actively engage in
          the green movement and be incentivized for their efforts.
        </motion.p>
        <div className="md:mt-10 mt-5 flex justify-end">
          <motion.p
            className="flex items-center uppercase tracking-wide text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-green-500"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0, delay: 0.2 }}
          >
            <Link href="/about" className="text-green-700">
              Learn More
            </Link>
            <AiOutlineArrowRight className="ml-1 text-green-700" />
          </motion.p>
        </div>
      </div>

      <motion.p
        className="md:w-1/2 pt-10 md:pt-0 md:flex md:justify-start md:order-1"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={Tree_Plant_Photo}
          alt="Tree++ Group Photo"
        />
      </motion.p>
    </div>
  );
};

export default WhatWeDo;

{
  /* <div className="mt-5 flex justify-end">
          <div className="flex items-center uppercase tracking-widest text-black md:text-xl text-sm font-light border-b-2 transition duration-300 border-transparent hover:border-iutdsred">
            <Link href="/achievements">...And So Much More</Link>
            <AiOutlineArrowRight className="ml-1" />
          </div> */
}
