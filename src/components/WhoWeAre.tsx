import React from "react";
import Image from "next/image";
import Group_Photo from "public/WhoWeAre.jpeg";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:py-10 container mx-auto">
      <div className="w-full md:w-3/4">
        <h1 className="head-text relative inline-block">
          Who We Are
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </h1>
        <p className="mt-6 paragraph-text">
          As a volunteer-driven non-profit, we are passionate about making a
          positive impact on the environment through tree plantation
          initiatives. Together, we strive to create a greener future by
          planting trees, raising awareness about their importance, and
          fostering a sense of environmental stewardship within our communities.
        </p>
      </div>
      <div className="w-full md:flex">
        <Image
          className="rounded-3xl w-3/4 h-auto md:h-auto object-fill md:object-cover mx-auto"
          src={Group_Photo}
          alt="Tree++ Group Photo"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
