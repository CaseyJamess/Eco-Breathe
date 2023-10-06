'use client'

import React, { useState, useEffect } from "react";
import axios from 'axios';
import Gauge from "./Gauge";
import { FaMapMarkerAlt } from 'react-icons/fa';
import { getAirQualityData } from "../services/airDataService";

// Function Search() utilises the Mapbox API to suggest place names for the user - https://www.mapbox.com/
// When a location is chosen, the function returns the co-ordinates of the location to be used to grab air quality data
function Search() {

  //  STATE VARIABLE DECLERATIONS for the search input, suggestions, coordinates, etc.
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true); // Flag to control API fetching
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [airQualityData, setAirQualityData] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");


  // Fetch suggestions based on search term
  const fetchSuggestions = async (searchTerm) => {
    if (!shouldFetch) {
      return;
    }
    try {
      const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
      const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${MAPBOX_API_KEY}&types=place`);
      const places = response.data.features;

      // Storing coordinates as an object
      const locationCoordinates = {};
      places.forEach((place) => {
        locationCoordinates[place.place_name] = place.geometry.coordinates;
      });

      // Creating Suggestions to be listed by the place name
      const newSuggestions = places.map((place) => place.place_name);
      //updateState from parsed response
      setSuggestions(newSuggestions);
      setCoordinates(locationCoordinates);
      setShowSuggestions(true);
      //error handling
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // EVENT HANDLERS
  // handles the change of the input field and doesn't allow for non letter submissions via regular expessions
  const handleInputChange = (e) => {
    const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setInputValue(updatedValue);
    setFeedbackMessage("");
  }

  // The actual search handler
  const handleSearch = (term) => {
    const searchValue = term || inputValue;
    console.log('Searching for:', inputValue);
    console.log('The latitude is: ', selectedCoordinates[0], 'The latitude is: ', selectedCoordinates[1]);
    sendCoordinates(selectedCoordinates);
    setSuggestions([]);
    setShowSuggestions(false);
  };

  // Handling the enter key
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !selectedCoordinates) {
      e.preventDefault();
        setFeedbackMessage("Please select a location from the drop down menu");
    }
  }

  // UI RENDERING
  // Selecting a suggestion and logging its coordinates
  const selectSuggestion = (suggestion) => {
    setInputValue(suggestion);  // Update the input with the selected suggestion
    const coords = coordinates[suggestion];   // Fetch the coordinates of the selected suggestion
    setSelectedCoordinates(coords);
    console.log('Selected coordinates are', selectedCoordinates);  // Log the coordinates
    setFeedbackMessage("");
    setShouldFetch(false);      // Stop fetching when a suggestion is selected
    setShowSuggestions(false);  // Hide the suggestion list
  };

  const getCurrentLocation = () => {
    // to be finished
  }
  // send the desired location Coordinates to the server for use on the back end
  const sendCoordinates = async (coords) => {
    if (!coords) throw new Error("Coordinates are required");
    setAirQualityData(null);
    try {
      const longitude = parseFloat(coords[0].toFixed(4));
      const latitude = parseFloat(coords[1].toFixed(4));
      console.log('sending coords to back end');
      const response = await getAirQualityData(latitude, longitude);
      setAirQualityData(response.data);
      setSelectedCoordinates(null);
      // console.log('setAirQualityData is : ', setAirQualityData);
    }
    catch (error) {
      console.error('Error retrieving air quality data:', error);
    }
  }


  // Run fetchSuggestions whenever inputValue changes (and if the term is long enough)
  useEffect(() => {
    if (inputValue.length > 1) {
      fetchSuggestions(inputValue);
    } else {
      setShowSuggestions(false);
    }
    setShouldFetch(true);
  }, [inputValue]);



  return (
    <div>
      <Gauge airData={airQualityData} feedbackMessage={feedbackMessage} />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleSearch();
      }}>

        <div className=" mt-4 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <FaMapMarkerAlt className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer text-gray-500 dark:text-gray-400" onClick={getCurrentLocation} />
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full text-xs p-4 pl-10 input"
            placeholder="Search for a City..."
            autoComplete="off"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
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