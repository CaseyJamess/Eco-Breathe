"use client"

import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { getLocation } from "../services/getLocation";
import { getAirQuality } from "../services/getAirQuality";

import Gauge from "./Gauge";

const Search = () => {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const handleInputChange = (e) => {
    const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setInputValue(updatedValue);
    setShouldFetch(true);
    setShowSuggestions(true); 
  };

  const selectSuggestion = async (suggestion) => {

    try {
      const { suggestions, locationCoordinates } = await getLocation(suggestion);
      setSuggestions(suggestions);
      const formattedCoords = formatCoordinates(locationCoordinates);
      setSelectedCoordinates(formattedCoords);
      setInputValue(suggestion);
      setShouldFetch(false);
      setShowSuggestions(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
      getAirQuality(selectedCoordinates);
      setShowSuggestions(false);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
    }
  };

  const formatCoordinates = (coords) => {
    return Array.isArray(coords) ? coords[0] : coords;
  };
  
  

  useEffect(() => {
    if (inputValue !== "" && shouldFetch) {
      const fetchData = async () => {
        try {
          const { suggestions, locationCoordinates } = await getLocation(inputValue);
          setSuggestions(suggestions);
          setCoordinates(locationCoordinates);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [inputValue, shouldFetch]);

  return (
    <>
   
       <form onSubmit={handleSubmit}>
        <div className="mt-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <FaMapMarkerAlt className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer text-gray-500 dark:text-gray-400" />
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full text-xs p-4 pl-10 input"
            placeholder="Search for a City..."
            autoComplete="off"
            onChange={handleInputChange}
            value={inputValue}
          />

          {showSuggestions && suggestions.length > 0 && (
            <>
              <ul className="absolute z-10 w-full bg-neutral-50 dark:bg-gray-900">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>
                    <button
                      className="hover:bg-blue-700 border-b border-l border-r rounded-md text-sm p-2 border-gray-500 dark:hover:bg-blue-600 hover:text-white w-full text-start duration-200"
                      type="button"
                      onClick={() => selectSuggestion(suggestion)}
                    >
                      {suggestion}
                    </button>
                  </li>
                ))}
              </ul>
              
            </>
          )}
          <button
                type="submit"
                className="text-white absolute right-1 transform -translate-y-1/2 top-1/2 bg-blue-700 duration-300 hover:bg-blue-900 focus:outline-none rounded-xl md:text-base text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                <FaSearch className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer" />
              </button>
        </div>
      </form>
    </>
  );
};

export default Search;
