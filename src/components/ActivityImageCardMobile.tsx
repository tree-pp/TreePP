import Link from "next/link";
import React from "react";
import Image from "next/image";

type ActivityImageCardProps = {
  src: string;
  name: string;
};

export default function ActivityImageCardMobile(props: ActivityImageCardProps) {
  return (
    <div className='flex flex-col relative rounded-lg overflow-hidden w-2/5'> {/* Adjust the width for mobile */}
      <Image src={props.src} width={500} height={500} alt='Tree' className='' /> {/* Adjust width and height as needed */}

      <div className='absolute bottom-0 inset-x-0 px-4 pb-1 pt-8 bg-gradient-to-t from-black/90 to-black/0 flex justify-center items-end text-slate-300'>
        <span className="font-semibold">{props.name}</span>
      </div>
    </div>
  );
}
