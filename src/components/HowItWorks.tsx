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
    <div className="flex flex-col md:flex-row bg-slate-50 items-center md:py-10">
      <div
        className="md:w-1/2 pt-10 pb-4 md:py-10 md:pl-20 pl-6 md:order-1 mr-4 md:mr-20"
        ref={ref}
      >
        <motion.h1
          className="head-text relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          How It Works
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal mt-5 text-xl font-light text-slate-800 mr-10"
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
      <motion.p className="md:w-2/5 pr-4 md:pr-6 md:pt-10 pl-4 md:flex md:justify-end md:order-2"
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={variants}
       transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl"
          src="/HowItWorks.png"
          alt="How it works"
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

export default HowItWorks;


















