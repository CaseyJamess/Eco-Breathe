import { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { getLocation } from "../../services/getLocation";
import { getAirQuality } from "../../services/getAirQuality";

import SearchButton from "./SearchButton";
import debounce from "lodash/debounce";

const Search = ({ onAirQualityData, onLocationName }) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const debouncedFunction = useCallback(
    debounce(() => {}, 700),
    []
  );

  const handleInputChange = (e) => {
    const updatedValue = e.target.value.replace(/[^a-zA-Z,\s]/g, "");
    debouncedFunction(updatedValue);
    setInputValue(updatedValue);
    setShouldFetch(true);
    setShowSuggestions(true);
  };

  const selectSuggestion = async (location) => {
    try {
      const { suggestions, locationCoordinates } = await getLocation(location);
      setSuggestions("");
      const formattedCoords = formatCoordinates(locationCoordinates);
      setSelectedCoordinates(formattedCoords);
      setInputValue(location);
      setShouldFetch(false);
      setShowSuggestions(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      onLocationName(inputValue);
      const response = await getAirQuality(selectedCoordinates);
      processResponseData(response);
      setInputValue("");
      setShowSuggestions(false);
    } catch (error) {
      console.error("Error fetching air quality data:", error);
    }
  };

  const formatCoordinates = (coords) => {
    return Array.isArray(coords) ? coords[0] : coords;
  };

  const processResponseData = (data) => {
    onAirQualityData(data);
  };

  useEffect(() => {
    if (inputValue !== "" && shouldFetch) {
      const fetchData = async () => {
        try {
          const { suggestions, locationCoordinates } =
            await getLocation(inputValue);
          setSuggestions(suggestions);
          setCoordinates(locationCoordinates);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }
  }, [inputValue, shouldFetch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative w-11/12 mt-4 md:mt-6">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <FaMapMarkerAlt className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer text-stone-500 dark:text-stone-400" />
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full text-xs lg:text-sm p-4 pl-10 input"
            placeholder="Search for a City..."
            autoComplete="off"
            onChange={handleInputChange}
            value={inputValue}
          />

          {showSuggestions && suggestions.length > 0 && (
            <>
              <ul className="absolute z-30 w-full ">
                {suggestions.map((location, index) => (
                  <li key={index}>
                    <button
                      className=" border-b border-l z-10 bg-stone-50 border-r rounded-md text-sm p-2  hover:bg-green-700 hover:text-stone-50 w-full text-start duration-100"
                      type="button"
                      onClick={() => selectSuggestion(location)}
                    >
                      {location}
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          <SearchButton />
        </div>
      </form>
    </>
  );
};

export default Search;
