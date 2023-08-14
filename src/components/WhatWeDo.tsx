"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
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
    <div className="flex flex-row bg-white items-center py-10">

      <motion.p
          className="w-3/5 pl-24 py-15 flex justify-start"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
        <Image
          className="rounded-3xl"
          src="/WhatWeDo.png"
          alt="What We Do"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          style={{ width: "65%", height: "auto" }} // optional
        />
      </motion.p>
      <div className="w-2/5 py-16 pr-24 flex flex-col items-end" ref={ref}>
        <motion.h1
          className="relative text-3xl font-bold text-black text-right"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          What We Do
          <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></span>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl font-light text-slate-800 text-right"
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
            className="uppercase tracking-widest text-black text-xl font-light border-b-2 transition duration-300 border-transparent hover:border-green-400"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0, delay: 0 }}
         >
            <Link href="/about">
            Learn More
            </Link>
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
