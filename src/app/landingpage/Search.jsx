'use client'

import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaMapMarkerAlt } from 'react-icons/fa';



function Search() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true); // New state variable

  const fetchSuggestions = async (searchTerm) => {
    if (!shouldFetch) { // Check whether we should fetch suggestions
      return;
    }
    try {
      const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${MAPBOX_API_KEY}&types=place`);
      const places = response.data.features;
      const newSuggestions = places.map((place) => place.place_name);
      setSuggestions(newSuggestions);
      setShowSuggestions(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (term) => {
    const searchValue = term || inputValue;
    console.log('Searching for:', searchValue);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  const selectSuggestion = (suggestion) => {
    setInputValue(suggestion);
    setShouldFetch(false); // Stop fetching when a suggestion is selected
    handleSearch(suggestion);
  };

  useEffect(() => {
    if (inputValue.length > 2) {
      fetchSuggestions(inputValue);
    } else {
      setShowSuggestions(false);
    }
    setShouldFetch(true); // Reset to allow fetching again
  }, [inputValue]);
  ;

  return (
    <div >
      <form>
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <FaMapMarkerAlt className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full text-xs p-4 pl-10  input"
            placeholder="Search for a City..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            required
          />
          {showSuggestions && (
            <ul className="absolute z-10 w-full bg-neutral-50 dark:bg-gray-900">
              {suggestions.map((suggestion, index) => (
                <li key={index}>
                  <button className="hover:bg-blue-700 border-b border-l border-r rounded-md text-sm p-2 border-gray-500 dark:hover:bg-blue-600 hover:text-white w-full text-start duration-200" type="button" onClick={() => selectSuggestion(suggestion)}>
                    {suggestion}
                  </button>
                </li>
              ))}
            </ul>
          )}
          <button
            type="submit"
            className="text-white absolute right-1 transform -translate-y-1/2 top-1/2 bg-blue-700 duration-300 hover:bg-blue-900 focus:outline-none rounded-xl md:text-base text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 "
            onClick={(e) => {
              e.preventDefault();
              handleSearch();
            }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;