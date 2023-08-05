import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="flex flex-row bg-slate-50 items-center py-10">
      <div className="w-2/5 py-16 pl-24">
        <h1 className="text-3xl font-bold text-black relative inline-block">
          Who We Are
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform translate-y-1"></div>
        </h1>
        <p className="mt-6 text-xl font-light text-slate-800">
          As a volunteer-driven non-profit, we are passionate about making a
          positive impact on the environment through tree plantation
          initiatives. Together, we strive to create a greener future by
          planting trees, raising awareness about their importance, and
          fostering a sense of environmental stewardship within our communities.
        </p>
      </div>
      <div className="w-3/5 pr-24 py-10 flex justify-end">
        <Image
          className="rounded-3xl"
          src="/WhoWeAre.jpeg"
          alt="Who We Are"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "65%", height: "auto" }} // optional
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
