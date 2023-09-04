"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Group_Photo from "public/WhoWeAre.jpeg";

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
    <div className="flex flex-col md:flex-row items-center justify-center md:py-10 pt-10 mx-auto section-spacing">
      <div className="md:w-1/2 md:pr-20 md:order-1" ref={ref}>
        <motion.h1
          className="head-text relative inline-block"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={left}
          transition={{ duration: 0.5 }}
        >
          Who We Are
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </motion.h1>
        <motion.p
          className="tracking-normal md:mt-10 mt-5 paragraph-text"
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
      <motion.p
        className="md:w-1/2 pt-10 md:pt-0 md:flex md:justify-end md:order-2"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={right}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Image
          className="rounded-3xl w-full h-auto md:h-auto object-fill md:object-cover"
          src={Group_Photo}
          alt="Tree++ Group Photo"
        />
      </motion.p>
    </div>
  );
};

export default WhoWeAre;
