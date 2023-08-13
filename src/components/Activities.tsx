import Link from "next/link";
import React from "react";
import ActivityImageCard from "./ActivityImageCard";


export default function Activities() {


  return (
    <div className="py-10">
    <div className="text-center">
        <h2 className="text-3xl font-bold text-black relative inline-block">
        Our Activities
        <div className="absolute bottom left-1/2 transform -translate-x-1/2 translate-y-1/2 h-1 bg-green-500 w-20"></div>
      </h2>
    </div>
      <div className="mx-auto pl-40 pr-20 w-2xl my-16">
        <h6 className="text-xl font-bold inline relative ">
        Pilot 3
        </h6>
        <div className="border-t-2 border-black  border-solid h-4  my-2 "></div>
        <div className='text-slate-700'>
      <p><b>Location: </b> Khulna Govt. Girls School, Khulna</p>
      <p>Some more text</p>
      <p>Even more text</p>
      </div>
      <div className="flex flex-col md:flex-row gap-x-10 items-center my-4 pl-2.5">
          <ActivityImageCard src="/tree1.jpeg" name="Banayan" id="000182"/>
          <ActivityImageCard src="/tree1.jpeg" name="Shegun" id="000183"/>
          <ActivityImageCard src="/tree1.jpeg" name="Papaya" id="000184"/>
          <ActivityImageCard src="/tree1.jpeg" name="Mango" id="000185"/>
          <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186"/>
      </div>
    </div>
      <div className="bg-red">

      </div>
  </div>
  );
}
