import React, { useState } from 'react';
import { useRouter } from 'next/navigation'
import { FaSearch } from 'react-icons/fa';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    // Perform search operation using the searchText
    console.log('Search Text:', searchText);

    // Construct the URL with the searched text and navigate to it
    router.push(`/t/${encodeURIComponent(searchText)}`);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex items-stretch">
      <input
        type="text"
        placeholder="Type tree ID here ..."
        value={searchText}
        onChange={handleChange}
        className="w-72 h-12 placeholder:font-light placeholder:text-slate-300 text-base py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg text-slate-600"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="flex items-center text-base bg-green-400 hover:bg-green-700 text-slate-700 hover:text-white px-4 rounded-r-lg transition duration-300 shadow-lg"
      >
        <FaSearch className="mr-2" />Search
      </button>
    </div>
  );
};

export default SearchBar;
