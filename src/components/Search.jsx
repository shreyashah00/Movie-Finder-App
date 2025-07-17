import React from 'react';

const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex justify-center mt-16"> {/* centers the search bar horizontally */}
      <div className="flex items-center bg-gray-800 px-4 py-2 rounded-md w-full max-w-md">
        <img
          src="search.svg"
          alt="search"
          className="w-5 h-5 text-white"
        />
        <input
          type="text"
          placeholder="Search Thousands of Words"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow bg-transparent placeholder-white text-white outline-none ml-3"
        />
      </div>
    </div>
  );
};

export default Search;
