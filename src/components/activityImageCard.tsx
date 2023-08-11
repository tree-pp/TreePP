import Link from "next/link";
import React from "react";
import Image from 'next/image'

type AcitivityImageCardProps={
  src:string
  id:string
  caption:string
}

export default function ActivityImageCard(props:AcitivityImageCardProps) {
  return (
    <div className='flex flex-col relative rounded-lg overflow-hidden w-1/4'>
                    {/* <img src={props.src} alt='Tree' className='' /> */}
                    <Image src={props.src} height={250} width={250} alt='Tree' objectFit='cover' />

                    <div className='absolute bottom-0 inset-x-0 px-4 pb-2 pt-8 bg-gradient-to-t from-black/90 to-black/0 flex justify-between items-end text-slate-300'>

                        <span className="font-light">#{props.id}</span>
                        <span className="font-medium">{props.caption}</span>
                    </div>
                </div>
    // <div className="flex flex-col items-center gap-y-4">
    //   <img src={props.src} alt="Name of tree" className="h-21 w-21 rounded-lg shadow-lg object-center object-cover" />
    //   <span className='text-slate-500 text-sm font-normal italic'>{props.caption}</span>
    // </div>
  );
}