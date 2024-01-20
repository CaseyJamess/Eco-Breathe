import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchButton = ({}) => {
  return (
    <button
      type="submit"
      className="text-white absolute right-1 transform -translate-y-1/2 top-1/2  
        duration-300 bg-accent focus:outline-none rounded-xl md:text-base text-sm px-4 py-2"
    >
      <FaSearch className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer" />
    </button>
  );
};

export default SearchButton;
