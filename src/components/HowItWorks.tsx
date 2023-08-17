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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:py-10 container mx-auto">
      <div className="w-full md:w-3/4" ref={ref}>
        <motion.h1
          className="head-text relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          How It Works
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="mt-6 paragraph-text"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
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
      <motion.p className="w-full md:flex"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          className="rounded-3xl w-3/4 h-auto md:h-auto object-fill md:object-cover mx-auto"
          src={Tree_Photo}
          alt="Planted Tree"
        />
      </motion.p>
    </div>
  );
};

export default HowItWorks;
