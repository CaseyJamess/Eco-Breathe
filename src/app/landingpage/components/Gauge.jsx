"use client";

import React, { useEffect } from "react";
import GaugeChart from "react-gauge-chart";

function Gauge({ airQualityData, locationName }) {


console.log("dataa", airQualityData);

  const { city, country } = locationName || {};
  /* const formatDateAndTime = (airQualityData.dt) => {
    const date = new Date(timestamp);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleString(undefined, options);
  };

  */
  //const formattedTs = formatDateAndTime(ts);


  return (
    <div className="lg:w-11/12 flex flex-col justify-between items-center">
      <GaugeChart
        id="gauge"
        nrOfLevels={5}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8"]}
        percent={0}
        arcWidth={0.15}
        arcPadding={0.03}
        hideText={true}
      />
      <div
        id="responseData"
        className="text-center flex flex-col justify-center items-center h-20"
      >
        <div className="my-4 rounded-xl p-4 md:p-8">
          <h3 className="h3 text-black"></h3>
          <div className="flex flex-col md:flex-row">
            {/* Display information from the passed onHandleLocationName prop */}
            <div className="">
              <p className="mr-2 text-black">City: {}</p>
            </div>
            <div className="">
              <p className="mr-2 text-black">Country: {}</p>
            </div>
            {/* Access components properties as needed */}
            <div className="">
              <p className="mr-2 text-black">Component Value: {}</p>
            </div>
            {/* Display other properties like aqi and formattedDateTime */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;