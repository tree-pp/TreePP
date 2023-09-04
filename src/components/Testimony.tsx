"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Advisor_Photo from "public/advisor.jpg";

const imageStyle = {
  borderRadius: "50%",
  border: "1px solid #fff",
};

const imageStyle2 = {
  borderRadius: "1%", // border radius of the image
  border: "1px solid #fff", // change the #fff to #000 to see the border
};

const Testimony = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col section-spacing items-center justify-center pb-10">
      <div className="head-text text-center">
        <span>Testimony</span>
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
      </div>
      <div className="flex md:flex-row flex-col mt-10">
        <div className="md:w-1/2 flex flex-col justify-center items-center pl-5">
          <Image
            src={Advisor_Photo}
            width={250}
            height={250}
            alt="advisor"
            className="rounded-full"
          ></Image>
          <div className="sub-head-text mt-5">John Doe</div>
          <div className="caption-text">
            Chairperson, XYZ Wildlife Foundation
          </div>
        </div>
        <div className="md:w-1/2 paragraph-text pt-5">
          I have had the privilege of advising Tree++ for the past year, and I'm
          continually impressed by their dedication to reforestation and
          environmental sustainability. Their commitment to sustainable planting
          practices, engagement of volunteers, especially students and faculty,
          and their collaborative approach with various stakeholders make Tree++
          an exemplary organization in the field. Their work not only
          contributes to a healthier planet but also empowers individuals with
          the knowledge and skills to make a positive impact on our
          environment's future. I have no doubt that Tree++ will continue to be
          a driving force for change in the years ahead.
        </div>
      </div>
    </div>
  );
};

export default Testimony;
