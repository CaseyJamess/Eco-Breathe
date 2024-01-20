import axios from "axios";

export const getLocation = async (searchTerm) => {
  
  try {
    const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
    const response = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(searchTerm)}.json?access_token=${MAPBOX_API_KEY}&types=place`);
    const places = response.data.features;
    const locationCoordinates = places.map((place) => place.geometry.coordinates);
    const suggestions = places.map((place) => place.place_name);
    return { suggestions, locationCoordinates };
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};
