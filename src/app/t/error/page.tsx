"use client"
import React from 'react';
import SearchBar from '../../../components/SearchBar';

export default function Page() {
    return (
      <div className='flex flex-col justify-center items-center h-1/2'>
        <div className=''><SearchBar /></div>
        <p className='text-4xl font-bold my-56'>
            This tree is being planted!
        </p>
      </div>
  
  
    );
  }