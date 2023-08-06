import { useState } from 'react';

const SearchBar = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    // Perform search operation using the searchText
    console.log('Search Text:', searchText);
  };

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="flex items-stretch pt-5">
      <input
        type="text"
        placeholder="Type tree ID here ..."
        value={searchText}
        onChange={handleChange}
        className="placeholder:font-light placeholder:text-slate-300 text-sm py-2 px-4 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
      />
      <button
        type="button"
        onClick={handleSearch}
        className="text-sm bg-slate-400 hover:bg-slate-500 text-white px-4 rounded-r-lg shadow-2xl transition duration-300"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;