"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import ActivityImageCard from "./ActivityImageCard";
import { useInView } from "react-intersection-observer";
export default function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-10" ref={ref}>
        <div className="text-center">
        <motion.h2
          className="head-text relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
            Our Activities
            <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
          </motion.h2>
        </div>
      <div className="mx-auto pl-40 pr-20 w-2xl my-16">
        <motion.h6
          className="text-xl font-bold inline relative "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Pilot 3
        </motion.h6>
        <div className="border-t-2 border-black  border-solid h-4  my-2 "></div>
        <div className="text-slate-700">
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <b>Location: </b> Khulna Govt. Girls School, Khulna
          </motion.p>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Some more text
          </motion.p>
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Even more text
          </motion.p>
        </div>
        <div className="flex flex-col md:flex-row gap-x-10 items-center my-4 pl-2.5">
          <ActivityImageCard src="/tree1.jpeg" caption="Banayan" />
          <ActivityImageCard src="/tree1.jpeg" caption="Shegun" />
          <ActivityImageCard src="/tree1.jpeg" caption="Papaya" />
          <ActivityImageCard src="/tree1.jpeg" caption="Mango" />
          <ActivityImageCard src="/tree1.jpeg" caption="Apple" />
        </div>
      </div>
      <div className="bg-red"></div>
    </div>
  );
}
