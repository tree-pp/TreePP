import Link from "next/link";
import React from "react";
import Image from "next/image";

type AcitivityImageCardProps={
  src:string
  caption:string
}

export default function ActivityImageCard(props:AcitivityImageCardProps) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <Image src={props.src} width={300} height={300} alt="Name of tree" className="rounded-lg shadow-lg object-center object-cover" />
      <span className='text-slate-500 text-sm font-normal italic'>{props.caption}</span>
    </div>
  );
}