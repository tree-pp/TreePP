"use client"
import React from 'react';
import SearchBar from '../../../components/SearchBar';
import TreeDetails from '../../../components/treeDetails';

export default function Page({ params }: { params: { treeId: string } }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <SearchBar />
      <TreeDetails
        id={params.treeId}
        name='Swietenia Mahogoni'
        datePlanted='000182'
        donor='Mr. X'
        landOwner='Mr. Y'
        location='Gilatala, Khulna'
        landType='Household Yard'
        image='../tree.jpeg'
      />
    </div>


  );
}

