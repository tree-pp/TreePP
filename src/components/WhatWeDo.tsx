import React from "react";
import Image from "next/image";
import Link from "next/link";
import Tree_Plant_Photo from "/public/WhatWeDo.png";
import { FaArrowRight } from "react-icons/fa";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:py-10 container mx-auto">
      <div className="w-full py-10 md:flex">
        <Image
          className="rounded-3xl w-3/4 h-auto md:h-auto object-fill md:object-cover mx-auto"
          src={Tree_Plant_Photo}
          alt="Tree++ Group Photo"
        />
      </div>
      <div className="w-full md:w-3/4 md:py-10">
        <h1 className="head-text relative inline-block">
          What We Do
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </h1>
        <p className="mt-6 paragraph-text">
          At Tree++, we lead the charge towards a sustainable future by offering
          carbon offsetting through tree plantation. Our digital platform
          empowers individuals to calculate and purchase carbon offsets, while
          providing landowners a way to contribute to reforestation efforts. For
          the youth, Tree++ presents a unique opportunity to actively engage in
          the green movement and be incentivized for their efforts.
        </p>
        <div className="mt-5">
          <Link
            href="/about"
            className="text-black md:text-xl text-xs font-light"
          >
            <div className="flex items-center justify-end">
              <span className="mt-3 flex uppercase items-center border-b-2 border-transparent hover:border-green-400">
                Learn More <FaArrowRight className="md:ml-3 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
