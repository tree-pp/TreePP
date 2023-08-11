"use client";
import SearchBar from '../../components/SearchBar';
import ActivityImageCard from '../../components/ActivityImageCard';

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
                <div >
                    <div className="flex flex-col md:flex-row gap-x-10 items-center my-10 pl-2.5 pb-5">
                        <ActivityImageCard src="/tree.jpeg" id="000182" caption="Banayan" />
                        <ActivityImageCard src="/tree.jpeg" id="000183" caption="Shegun" />
                        <ActivityImageCard src="/tree.jpeg" id="000184" caption="Papaya" />
                        <ActivityImageCard src="/tree1.jpeg" id="000185" caption="Mango" />
                        <ActivityImageCard src="/tree1.jpeg" id="000186" caption="Apple" />
                    </div>
                </div>

            </div>
        </div>
    )
}
