"use client"
import React from 'react';
import Image from 'next/image';

export default function Page() {
  return (

    <div className='flex flex-col justify-center items-center text- h-1/2 text-slate-700 text-center bg-white pt-10'>
      <Image src="/UnderConstruction.png" width={600} height={300} alt='Construction' />
      <p className='text-4xl font-medium mt-20'>
        Coming Soon!
      </p>
      <p className='text-xl font-medium mt-3 mb-32'>
        This page will be available soon.
      </p>
    </div>



  );
}