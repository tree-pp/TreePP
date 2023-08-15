import React from "react";
import Image from "next/image";
import Tree_Photo from "public/HowItWorks.png";

const HowItWorks = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:py-10 container mx-auto">
      <div className="w-full md:w-3/4">
        <h1 className="head-text relative inline-block">
          How It Works
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </h1>
        <p className="mt-6 paragraph-text">
          Tree++ aims to achieve net zero by offering carbon offsetting through
          tree plantation. Individuals can calculate their carbon footprint and
          purchase carbon offsets on the digital platform. Landowners with
          unused plantation-ready lands can enlist them on the same platform.
          Tree++ provides a unique opportunity for youth to actively participate
          in the green movement, receiving incentives for their efforts.
          Corporations of any size can offset their carbon emissions effectively
          through Tree++. This novel platform connects all stakeholders involved
          in carbon offsetting through tree plantation in a win-win-win manner.
        </p>
      </div>
      <div className="w-full md:flex">
        <Image
          className="rounded-3xl w-3/4 h-auto md:h-auto object-fill md:object-cover mx-auto"
          src={Tree_Photo}
          alt="Planted Tree"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
