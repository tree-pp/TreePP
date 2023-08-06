"use client";
import SearchBar from '../../components/SearchBar';
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
        <p className='pt-8 font-semibold text-sm w-2/3'>Each of our tree is tagged and is uniquely trackable. To find the details of any tree search with the tree details.</p>
        <div className='flex flex-col items-start w-2/3'>
            <p className='font-bold pt-8'>Recent</p>
            <div>

            </div>

        </div>
    </div>
    )
    }
