import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const WhatWeDo = () => {
  return (
    <div className="flex flex-row bg-white items-center py-10">
      <div className="w-3/5 pl-24 py-15 flex justify-start">
        <Image
          className="rounded-3xl"
          src="/WhatWeDo.png"
          alt="What We Do"
          width={0}
          height={0}
          sizes="100vw"
          quality={100}
          style={{ width: "65%", height: "auto" }} // optional
        />
      </div>
      <div className="w-2/5 py-16 pr-24 flex flex-col items-end">
        <h1 className="relative text-3xl font-bold text-black text-right">
          What We Do
          <span className="absolute bottom-0 right-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></span>
        </h1>
        <p className="mt-6 text-xl font-light text-slate-800 text-right">
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
            className="uppercase tracking-widest text-black text-xl font-light border-b-2 transition duration-300 border-transparent hover:border-green-400"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
