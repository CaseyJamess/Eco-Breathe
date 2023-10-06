import axios from "axios";

const Server_URL = "http://localhost:4000";

export const getAirQualityData = async (latitude, longitude) => {
  // Note: The air quality API expects the order to be latitude then longitude. 
  // Latitude: North-South measurement, with Equator at 0.
  // Longitude: East-West measurement, with Prime Meridian at 0.
  console.log('POST message sent to backend', latitude, longitude);
  try {
    const data = {
      coords: {
        longitude: longitude,
        latitude: latitude
      }
    };

    const response = await axios.post(`${Server_URL}/api/v1/fetch_air_quality`, data);
    console.log("In airDataService, the response is: ", response.data);
    return response.data;


  }
  catch (error) {
    console.log('Error sending data', error)
    return { error: "Failed to send data to server" }
  }
}

/* 
 // Functionality Used in Development
 
export const fetchData = async () => {
  try {
    const response = await axios.get(`${Server_URL}/api/fetch_data`);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return { error: "Failed to fetch data from server." };
  }
};
*/