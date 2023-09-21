"use client"
import React from 'react';

export default function Dashboard() {
    return (
        <div className='flex justify-center items-center'>
        <div className='flex flex-col justify-start my-10 items-start w-5/6 bg-red-200'>
            <span className='font-semibold text-2xl'>Dashboard</span>
            <div className='flex md:flex-col'>
                <span>Name : ABC org</span>
                <div className='flex flex-row'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col'>
                            <span>Total Tree   </span>
                            <span>Total Batch  </span>
                        </div>
                        <div className='flex flex-col pl-10 items-start min-w-max font-semibold'>
                            <span>100</span>
                            <span>20ddd0</span>
                        </div>
                    </div>
                    <div className='flex flex-row pl-20'>
                        <div className='flex flex-col'>
                            <span>Active Tree :</span>
                        </div>
                        <div className='flex flex-col pl-10'>
                            <span>100</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col'></div>
        </div>

        </div>
    );
}