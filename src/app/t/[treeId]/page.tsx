"use client"
import React from 'react';
import SearchBar from '../../../components/SearchBar';
import TreeDetails from '../../../components/TreeDetails';

export default function Page({ params }: { params: { treeId: string } }) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <SearchBar />
      <TreeDetails
        id={params.treeId}
        name='Swietenia Mahogoni'
        commonName='Mahogoni'
        datePlanted='26/03/2023'
        donor='Mr. X'
        landOwner='Mr. Y'
        location='Gilatala, Khulna'
        landType='Household Yard'
        image='../tree.jpeg'
      />
    </div>


  );
}

