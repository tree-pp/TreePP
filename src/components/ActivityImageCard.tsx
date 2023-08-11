import Link from "next/link";
import React from "react";

type AcitivityImageCardProps={
  src:string
  caption:string
}

export default function ActivityImageCard(props:AcitivityImageCardProps) {
  return (
    <div className="flex flex-col items-center gap-y-4">
      <img src={props.src} alt="Name of tree" className="h-21 w-21 rounded-lg shadow-lg object-center object-cover" />
      <span className='text-slate-500 text-sm font-normal italic'>{props.caption}</span>
    </div>
  );
}