"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Tree_Photo from "public/HowItWorks.png";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const left = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };
  const right = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:py-10 pt-10 mx-auto max-w-screen-2xl">
      <div className="md:w-1/2 md:pr-20 md:order-1" ref={ref}>
        <motion.h1
          className="text-3xl font-bold text-black relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          transition={{ duration: 0.5 }}
        >
          How It Works
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal mt-5 paragraph-text mr-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Tree++ aims to achieve net zero by offering carbon offsetting through
          tree plantation. Individuals can calculate their carbon footprint and
          purchase carbon offsets on the digital platform. Landowners with
          unused plantation-ready lands can enlist them on the same platform.
          Tree++ provides a unique opportunity for youth to actively participate
          in the green movement, receiving incentives for their efforts.
          Corporations of any size can offset their carbon emissions effectively
          through Tree++. This novel platform connects all stakeholders involved
          in carbon offsetting through tree plantation in a win-win-win manner.
        </motion.p>
      </div>
      <motion.p
        className="md:w-1/2 pt-10 md:pt-0 md:flex md:justify-end md:order-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={right}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={Tree_Photo}
          alt="Tagged Tree"
        />
      </motion.p>
    </div>
  );
};

export default HowItWorks;
