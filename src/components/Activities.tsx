"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ActivityImageCard from "./ActivityImageCard";
import ActivityImageCardMobile from "./ActivityImageCardMobile";
import { useInView } from "react-intersection-observer";

export default function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const [isLargeScreen, setIsLargeScreen] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  if (isLargeScreen) {
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
          <ActivityImageCard src="/tree.jpeg" name="Banayan" id="000182" />
            <ActivityImageCard src="/tree.jpeg" name="Shegun" id="000183" />
            <ActivityImageCard src="/tree.jpeg" name="Papaya" id="000184" />
            <ActivityImageCard src="/tree1.jpeg" name="Mango" id="000185" />
            <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186" />
          </div>
        </div>
        <div className="bg-red"></div>
      </div>
    );
  }
  else {
    return (
      <div className="py-5" ref={ref}>
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
        <div className="mx-auto pl-5 pr-5 w-2xl my-5 text-slate-700">
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
          <div className="text-slate-700 flex-col justify-center items-center">
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
          <div className="flex flex-col md:flex-row gap-x-5 gap-y-5 my-5 pl-2.5 pb-5 justify-center items-center"> {/* Center align */}
            <div className="flex flex-row flex-wrap gap-3"> {/* Adding gap between cards */}
              <ActivityImageCardMobile src="/tree.jpeg" name="Banayan" />
              <ActivityImageCardMobile src="/tree.jpeg" name="Shegun" />
              <ActivityImageCardMobile src="/tree.jpeg" name="Papaya" />
            
              <ActivityImageCardMobile src="/tree1.jpeg" name="Mango" />
              <ActivityImageCardMobile src="/tree1.jpeg" name="Apple" />
              <ActivityImageCardMobile src="/tree1.jpeg" name="Apple" />
            </div>
          </div>
        </div>
        <div className="bg-red"></div>
      </div>
    );

  }
}
