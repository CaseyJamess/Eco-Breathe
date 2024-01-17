import axios from "axios";

export const getAirQuality = async (coords) => {
  try {

    console.log("coords are", coords);
    const longitude = coords[0];
    const latitude = coords[1];

    console.log("lat is", latitude);
    console.log("long is", longitude);

    const AQ_API = process.env.NEXT_PUBLIC_OPEN_AQ;

    const response = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${AQ_API}`);

    const airQualityData = response.data.list[0];
  
    // Accessing specific components
    const aqi = airQualityData.main.aqi;
    const components = airQualityData.components;
    
    console.log("aqi:", aqi);
    console.log("components:", components);

    return response.data;
  } catch (error) {
    console.error('Error fetching air quality data:', error);
    throw error;
  }
};


