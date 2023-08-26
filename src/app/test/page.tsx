"use client"
import React from 'react';
import SlideshowCard from '../../components/SlideshowCard';

export default function Page({ params }: { params: { treeId: string } }) {
  return (
    <div className='flex flex-col justify-center items-center my-10'>
        <SlideshowCard />
    </div>


  );
}

