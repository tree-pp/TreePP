import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <div className="flex flex-col md:flex-row bg-slate-50 items-center md:py-10">
      <div className="md:w-1/2 pt-10 pb-4 md:py-10 md:pl-20 pl-6 md:order-1 mr-4 md:mr-20">
        <h1 className="text-3xl font-bold text-black relative inline-block">
          Who We Are
          <div className="absolute bottom-0 left-0 w-1/2 h-1 bg-green-500 transform rounded-lg translate-y-1"></div>
        </h1>
        <p className="tracking-normal mt-3 text-xl font-light text-slate-800 mr-10">
          As a volunteer-driven non-profit, we are passionate about making a
          positive impact on the environment through tree plantation
          initiatives. Together, we strive to create a greener future by
          planting trees, raising awareness about their importance, and
          fostering a sense of environmental stewardship within our communities.
        </p>
      </div>
      <div className="md:w-2/5 pr-4 md:pr-6 md:pt-10 pl-4 md:flex md:justify-end md:order-2">
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
      </div>
    </div>
  );
};

export default WhoWeAre;
