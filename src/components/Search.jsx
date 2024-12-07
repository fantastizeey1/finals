import React from "react";
import { MdSearch } from "react-icons/md";

const Search = ({ handleSearchNote }) => {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg md:w-[50%] mx-auto shadow-md p-2">
      <MdSearch
        className="text-gray-500 dark:text-gray-400 mr-2"
        size="1.5em"
      />
      <input
        type="text"
        placeholder="Type to search..."
        onChange={(event) => handleSearchNote(event.target.value)}
        className="flex-1 bg-transparent text-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none "
      />
    </div>
  );
};

export default Search;
