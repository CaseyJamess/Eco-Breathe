//import Axios from 'axios';
//import { setupCache } from 'axios-cache-interceptor';

//const instance = Axios.create(); 
//const axios = setupCache(instance);

//const [res1, res2] = await Promise.all([req1, req2]);


import { getAirQuality } from '../services/getAirQuality';

const axios = require('axios');

jest.mock('axios');

describe('Weather Service', () => {
  it('fetches air pollution data successfully', async () => {
    const mockResponse = {
      data: {
        "coord":[
          50,
          50
        ],
        "list":[
          {
            "dt":1605182400,
            "main":{
              "aqi":1
            },
            "components":{
              "co":201.94053649902344,
              "no":0.01877197064459324,
              "no2":0.7711350917816162,
              "o3":68.66455078125,
              "so2":0.6407499313354492,
              "pm2_5":0.5,
              "pm10":0.540438711643219,
              "nh3":0.12369127571582794
            }
          }
        ]
      },
      status: 200,
    };

    axios.get.mockResolvedValue(mockResponse);

    const latitude = 12.34; 
    const longitude = 56.78; 
    const AQ_API = 'your_api_key_here'; 

    const result = await getAirPollutionData(latitude, longitude, AQ_API);

    expect(result).toEqual(mockResponse.data);
    expect(axios.get).toHaveBeenCalledWith(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${AQ_API}`);
  });

  const req1 = axios.get('https://api.example.com/'); 
  const req2 = axios.get('https://api.example.com/'); 


  it('handles errors when fetching air pollution data', async () => {
    axios.get.mockRejectedValue(new Error('Network error'));

    const latitude = 12.34; 
    const longitude = 56.78; 
    const AQ_API = 'your_api_key_here';

    await expect(getAirPollutionData(latitude, longitude, AQ_API)).rejects.toThrow('Failed to fetch air pollution data');
  });

  it('handles missing latitude and longitude', async () => {


    await expect(getAirPollutionData(undefined, 56.78, AQ_API)).rejects.toThrow('Latitude and longitude are required');
    await expect(getAirPollutionData(12.34, undefined, AQ_API)).rejects.toThrow('Latitude and longitude are required');
    await expect(getAirPollutionData(undefined, undefined, AQ_API)).rejects.toThrow('Latitude and longitude are required');
  });

  it('handles invalid latitude and longitude', async () => {
    const latitude = 'invalid'; 
    const longitude = 'invalid'; 
    const AQ_API = 'your_api_key_here'; 

    await expect(getAirPollutionData(latitude, longitude, AQ_API)).rejects.toThrow('Invalid latitude or longitude');
  });
});
