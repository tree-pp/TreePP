"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const HowItWorks = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-row bg-slate-50 items-center py-10">
      <div className="w-2/5 py-16 pl-24" ref={ref}>
        <motion.h1
          className="text-3xl font-bold text-black relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{ duration: 0.5 }}
        >
          How It Works
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="mt-6 text-xl font-light text-slate-800"
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
      <motion.p className="w-3/5 pr-24 py-10 flex justify-end"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: 0.2 }}>
        <Image
          className="rounded-3xl"
          src="/HowItWorks.png"
          alt="How It Works"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "65%", height: "auto" }} // optional
        />
      </motion.p>
    </div>
  );
};

export default HowItWorks;
