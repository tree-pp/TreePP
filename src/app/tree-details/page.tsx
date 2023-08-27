"use client";
import SearchBar from '../../components/SearchBar';
import TreeDetails from '../../components/TreeDetails';
import Image from "next/image";

// const treeProps={
//     id: '000182',
//     name: 'Swietenia Mahogoni',
//     datePlanted: '000182',
//     donor: 'Mr. X',
//     landOwner: 'Mr. Y',
//     location: 'Gilatala, Khulna',
//     landType: 'Household Yard',
//     image: './tree.jpeg'
// }

export default function tree_details() {
    return (
        <div className='flex flex-col justify-center items-center'>
            <SearchBar />
            <TreeDetails
                id='000182'
                name='Swietenia Mahogoni'
                commonName='Mahogoni'
                datePlanted='000182'
                donor='Mr. X'
                landOwner='Mr. Y'
                location='Gilatala, Khulna'
                landType='Household Yard'
                image='./tree.jpeg'
            />
        </div>
    )
}
