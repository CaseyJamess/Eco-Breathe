'use client'

import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

// // Functionality Used in Development
//import { fetchData } from "../services/airDataService";

function Gauge({ airData }) {

  //destructuring airData
  const {
    city,
    country,
    current: {
      weather: { ts } = {},
      pollution: { aqius } = {},
    } = {},
  } = airData || {};

  const formatDateAndTime = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      weekday: 'long',  // This will show days like 'Monday', 'Tuesday', etc.
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false     // Use 24-hour format and omit AM or PM.
    };
    
    return date.toLocaleString(undefined, options);
  };

  const formattedTs = formatDateAndTime(ts);


  useEffect(() => {
    // This will run every time airData changes
    console.log("the data in Gauge.js is: ", airData);
    console.log("airData:", airData);
    console.log("airData.data:", airData);
    console.log("airData.data.current:", airData && airData.current);

  }, [airData]);

  const calculateAqiPercent = (aqiValue) => {
    const maxAqi = 500;
    return aqiValue ? ((aqiValue / maxAqi)) : 0;
  }

  const aqiPercent = calculateAqiPercent(aqius);

  return (
    <div className="w-11/12 lg:w-11/12 flex flex-col justify-between items-center">
      <GaugeChart
        id="gauge"
        nrOfLevels={6}
        arcsLength={[0.1, 0.1, 0.1, 0.1, 0.2, 0.4]}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8", "#881337"]}
        percent={aqiPercent}
        arcWidth={0.3}
        arcPadding={0.03}
        hideText={true}
      />
      <div id="responseData" className="text-center flex flex-col justify-center items-center h-16"> {/* Adjust the h-value based on your needs */}
        {airData && city && country ? (
          <>
            <h3>
              <strong>
                {city}, {country}
              </strong>
            </h3>

            {ts && aqius ? (
              <>
                <p>{formattedTs}</p>
                <p>Air Quality Index: <strong>{aqius}</strong></p>
              </>
            ) : null}
          </>
        ) : (
          <p className="text-gray-600 dark:text-gray-400">Awaiting Air Quality data...</p>
        )}
      </div>


    </div>
  );
}

export default Gauge;