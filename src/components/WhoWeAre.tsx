"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WhoWeAre = () => {
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
    <div className="flex flex-col md:flex-row bg-slate-50 items-center md:py-10">
      <div
        className="md:w-1/2 pt-10 pb-4 md:py-10 md:pl-20 pl-6 md:order-1 mr-4 md:mr-20"
        ref={ref}
      >
        <motion.h1
          className="text-3xl font-bold text-black relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          transition={{ duration: 0.5 }}
        >
          Who We Are
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal mt-5 text-xl font-light text-slate-800 mr-10"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          As a volunteer-driven non-profit, we are passionate about making a
          positive impact on the environment through tree plantation
          initiatives. Together, we strive to create a greener future by
          planting trees, raising awareness about their importance, and
          fostering a sense of environmental stewardship within our communities.
        </motion.p>
      </div>
      <motion.p className="md:w-2/5 pr-4 md:pr-6 md:pt-10 pl-4 md:flex md:justify-end md:order-2"
       initial="hidden"
       animate={inView ? "visible" : "hidden"}
       variants={right}
       transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl"
          src="/WhoWeAre.jpeg"
          alt="Who We Are"
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

export default WhoWeAre;
