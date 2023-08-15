"use client";
import SearchBar from "../../components/SearchBar";
import ActivityImageCard from "../../components/ActivityImageCard";

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
    <div className="flex flex-col justify-center items-center">
      <SearchBar />
      <p className="pt-8 paragraph-text text-left">
        Each of our tree is tagged and is uniquely trackable. To find the
        details of any tree search with the tree details.
      </p>
      <div className="flex flex-col items-start w-2/3 mt-10">
        <p className="head-text">Recent</p>
        <div>
          <div className="flex flex-col md:flex-row gap-x-10 items-center my-10 pl-2.5 pb-5">
            <ActivityImageCard src="/tree.jpeg" name="Banayan" id="000182" />
            <ActivityImageCard src="/tree.jpeg" name="Shegun" id="000183" />
            <ActivityImageCard src="/tree.jpeg" name="Papaya" id="000184" />
            <ActivityImageCard src="/tree1.jpeg" name="Mango" id="000185" />
            <ActivityImageCard src="/tree1.jpeg" name="Apple" id="000186" />
          </div>
        </div>
      </div>
    </div>
  );
}
