import axios from "axios";



const AQ_API = process.env.NEXT_PUBLIC_OPEN_AQ;

export const getAirQuality = async (coords) => {
  try {

    const longitude = coords[0];
    const latitude = coords[1];
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${AQ_API}`);
    
    // forecast http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid={API key}
   // history http://api.openweathermap.org/data/2.5/air_pollution/history?lat={lat}&lon={lon}&start={start}&end={end}&appid={API key}
    const airQualityData = response.data.list[0];
    const aqi = airQualityData.main.aqi;
    const dateTime = airQualityData.dt;
    const components = airQualityData.components;
    
    //console.log("dt", dateTime);
    //console.log("aqi:", aqi);
    //console.log("components:", components);
    return {aqi, components, dateTime};

  }
   catch (error) {
    if (error.response && error.response.status) {
      alert(`Failed to fetch air quality data. Status: ${error.response.status} - ${error.response.statusText}`);
    } else {
      alert('Failed to fetch air quality data. Please try again later.');
    }
    throw error;
  }
};


