//Early Version of Search with Switch Case Statement

import { useState, useEffect, useCallback } from "react";
import { FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import { getLocation } from "../../services/getLocation";
import { getAirQuality } from "../../services/getAirQuality";

import SearchButton from "./search/SearchButton";
import debounce from "lodash/debounce";

const Search = ({
  onBackgroundColourChange,
  onAirQualityData,
  onLocationName,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [shouldFetch, setShouldFetch] = useState(true);
  const [coordinates, setCoordinates] = useState([]);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [airQualityData, setAirQualityData] = useState(null);

  const debouncedFunction = useCallback(
    debounce((value) => {
      console.log(value);
    }, 700),
    []
  );

  const handleInputChange = (e) => {
    const updatedValue = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    debouncedFunction(updatedValue);
    setInputValue(updatedValue);
    setShouldFetch(true);
    setShowSuggestions(true);
  };

  const selectSuggestion = async (location) => {
    try {
      const { suggestions, locationCoordinates } =
        await getLocation(location);
      setSuggestions("");
      const formattedCoords = formatCoordinates(locationCoordinates);
      setSelectedCoordinates(formattedCoords);
      setInputValue(location);
      onLocationName(location);
      setShouldFetch(false);
      setShowSuggestions(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await getAirQuality(selectedCoordinates);
      processResponseData(response);
      console.log(onLocationName);
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

    switch (data.aqi) {
      case 1:
        onBackgroundColourChange("#a6db85");
        break;
      case 2:
        onBackgroundColourChange("#fadf88");
        break;
      case 3:
        onBackgroundColourChange("#faaf99");
        break;
      case 4:
        onBackgroundColourChange("#e39292");
        break;
      case 5:
        onBackgroundColourChange("#b57d86");
        break;
      default:
        onBackgroundColourChange("#0d0d0d");
    }
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
          console.log(error);
        }
      };
      fetchData();
    }
  }, [inputValue, shouldFetch]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 ">
            <FaMapMarkerAlt className="z-20 w-5 h-5 hover:scale-110 duration-300 cursor-pointer text-gray-500 " />
          </div>
          <input
            type="text"
            id="default-search"
            className="block w-full text-sm p-4 pl-10 input"
            placeholder="Search for a City..."
            autoComplete="off"
            onChange={handleInputChange}
            value={inputValue}
          />

          {showSuggestions && suggestions.length > 0 && (
            <>
              <ul className="absolute z-10 w-full ">
                {suggestions.map((location, index) => (
                  <li key={index}>
                    <button
                      className=" border-b border-l z-10 bg-component border-r rounded-md text-sm p-2  hover:bg-accent hover:text-component w-full text-start duration-300"
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
