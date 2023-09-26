import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

// // Functionality Used in Development
//import { fetchData } from "../services/airDataService";

function Gauge() {
  const [airData, setAirData] = useState(null);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    // This will run every time airData changes
    console.log("air data is:", airData);
  }, [airData]);

  const handleRequest = async () => {
    try {
      console.log("About to fetch air data...");
      const result = await fetchData();
      console.log("Received data from API:", result);
      setAirData(result);
      setHasFetched(true);

    } catch (error) {
      console.log(error, "failed to return air quality data");
    }
  };
  return (
    <div className="w-10/12 lg:w-9/12">
      <GaugeChart
        id="gauge"
        nrOfLevels={5}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#5b21b6"]} // Tailwind's green, yellow, orange, red, purple
        percent={0}
        arcWidth={0.3}
        hideText={true}
      />

      {/*
      // Functionality Used in Development
      <button onClick={handleRequest}>Fetch Data</button>*/}

      {airData?.data?.current?.weather ? (
        <div>
          <h3>
            Showing Air Quality for{" "}
            <strong>
              {airData.data.city}, {airData.data.country}
            </strong>
          </h3>
          <p>Timestamp: {airData.data.current.weather.ts}</p>
          <p>AQI (US EPA Standard): {airData.data.current.pollution.aqius}</p>
        </div>
      ) : hasFetched ? (
        // JSX when condition is false
        <p>Loading or no data available...</p>
      ) : null}
    </div>

  );
}

export default Gauge;
