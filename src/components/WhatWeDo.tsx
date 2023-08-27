"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tree_Plant_Photo from "/public/WhatWeDo.png";
import { FaArrowRight } from "react-icons/fa";
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
    <div className="flex flex-col md:flex-row bg-white items-center md:py-10">
      <div
        className="md:w-1/2 pt-10 pb-4 md:py-10 md:pl-10 pl-6 md:order-2 mr-2 md:mr-10"
        ref={ref}
      >
        <motion.h1
          className="text-3xl font-bold text-black relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          What We Do
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal mt-5 text-xl font-light text-slate-800 mr-5 "
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
        <div className="mt-5">
        <motion.p
            className="uppercase tracking-widest text-black text-xl font-light hover:text-green-400"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0, delay: 0.2 }}
         >
            <Link className="border-b-2 transition duration-300 border-transparent hover:border-green-500" href="/about">
            Learn More
            </Link>
          </motion.p>
          
        </div>
      </div>
      <motion.p className="md:w-2/5 pr-4 md:pr-6 md:pt-10 md:pl-20 pl-4 md:flex md:justify-start md:order-1"
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variants}
       transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl"
          src="/WhatWeDo.png"
          alt="What We Do"
          layout="responsive"
          width={300}
          height={200}
          sizes="
            (max-width: 320px) 100vw,
            (max-width: 768px) 70vw,
            60vw
          "
        />
      </motion.p>
    </div>
  );
};

export default WhatWeDo;
