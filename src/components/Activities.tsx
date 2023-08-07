import Link from "next/link";
import React from "react";
import ActivityImageCard from "./ActivityImageCard";


export default function Activities() {


  return (
    <div >
    <div className="text-center">
      <h2 className="text-2xl font-bold inline relative">
        Our activities
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
      </h2>
    </div>
      <div className="mx-auto pl-40 pr-20 w-2xl my-16">
        <h6 className="text-xl font-bold inline relative ">
        Pilot 3
        </h6>
        <div className="border-t-2 border-black  border-solid h-4  my-2 "></div>
      <p><b>Location: </b> Khulna Govt. Girls School, Khulna</p>
      <p>Some more text</p>
      <p>Even more text</p>
      <div className="flex flex-col md:flex-row gap-x-10 items-center my-4 pl-2.5">
          <ActivityImageCard src="/tree1.jpeg" caption="Banayan" />
          <ActivityImageCard src="/tree1.jpeg" caption="Shegun" />
          <ActivityImageCard src="/tree1.jpeg" caption="Papaya" />
          <ActivityImageCard src="/tree1.jpeg" caption="Mango" />
          <ActivityImageCard src="/tree1.jpeg" caption="Apple" />
      </div>
    </div>
      <div className="bg-red">

      </div>
  </div>
  );
}
