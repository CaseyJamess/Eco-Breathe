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


export const sendData = async (payload) => {

  try {

    const response = await axios.post(`${Server_URL}/api/send_data`, payload);
    return response.data;

  }
  catch (error) {
    console.log('Error sending data', error)
    return { error: "Failed to send data to server" }
  }
}