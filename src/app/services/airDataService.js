import axios from "axios";

const Server_URL = "http://localhost:4000";

export const fetchData = async () => {
  try {
    const response = await axios.get(`${Server_URL}/api/fetch_data`);
    return response.data;
  } catch (error) {
    console.log('Error fetching data:', error);
    return { error: "Failed to fetch data from server." };
  }
};


export const sendLocationData = async (longitude, latitude) => {
  console.log('POST message sent to backend', longitude, latitude);
  try {
    const data = {
      coords: {
        longitude: longitude,
        latitude: latitude
      }
    };
    const response = await axios.post(`${Server_URL}/api/v1/fetch_air_quality`, data);
    return response.data;
    
  }
  catch (error) {
    console.log('Error sending data', error)
    return { error: "Failed to send data to server" }
  }
}