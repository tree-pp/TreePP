"use client"
import React from 'react';
import SearchBar from '../../../components/SearchBar';
import TreeDetails from '../../../components/TreeDetails';
import TreeNotFound from '../../../components/TreeNotFound';

const treeList = ["000182", "000183", "000184"];

export default function Page({ params }: { params: { treeId: string } }) {
  const isTreeInList = treeList.includes(params.treeId);

  return (
    <div>{
      isTreeInList ? (
        <div className='flex flex-col justify-center items-center'>
          <div className='pt-10'><SearchBar /></div>
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
        </div>) : (<TreeNotFound />)
    }
    </div>


  );
}

