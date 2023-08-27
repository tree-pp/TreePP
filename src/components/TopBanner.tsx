import React from "react";
import Image from "next/image";
import TreePP_Topbanner from "public/TopBanner.svg";
import Link from "next/link";

const TopBanner = () => {
  return (
    <div className="relative flex flex-col md:flex-row items-center container mx-auto min-w-full z-0 rounded-full">
      <div className="w-full relative">
        <Image
          className="w-full h-auto md:h-auto object-fill md:object-cover"
          src={TreePP_Topbanner}
          alt="IUTDS Group Photo"
        />
        <div className="md:absolute md:top-1/2 md:left-0 md:transform text-center md:text-left md:translate-x-24 z-10 flex flex-col items-center">
          <div className="hidden md:block">
            <div className="tracking-tight font-extrabold leading-[0.8] text-black text-7xl">
              Tree Plus Plus
            </div>
            <div className="font-extralight text-center text-slate-700 text-2xl">
              Healing the environment, one tree at a time
            </div>
          </div>
          {/* <div className="md:hidden mt-20">
            {" "}
            <div className="text-xl tracking-tight font-extralight leading-[1.15] uppercase">
              Welcome to{" "}
            </div>
            <div className="text-3xl font-black uppercase">
              IUT Debating Society
            </div>
            <p className="text-sm tracking-tightest">
              Where logic meets rhetoric and prudence meets eloquence
            </p>
  </div> */}
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
