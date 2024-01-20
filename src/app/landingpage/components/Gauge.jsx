"use client";

import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import timestamp from "time-stamp";

function Gauge({ airQualityData, locationDisplayName }) {
  const { aqi, components, dateTime } = airQualityData;
  const time = timestamp("HH:mm", new Date(dateTime * 1000));

  console.log("components,", components);

  /*

airQualityData returns: 

aqi: 5
components: Object { co: 5233.77, no: 50.96, no2: 128.87, … }
dateTime: 1705759973
*/

  const calculateAqiPercent = (aqiValue) => {
    const maxAqi = 5;
    // -0.1 to get the Gauge Needle in the middle
    return aqiValue ? aqiValue / maxAqi - 0.1 : 0;
  };

  const aqiPercent = calculateAqiPercent(aqi);

  return (
    <div className="flex mb-4 flex-col">
      <GaugeChart
        id="gauge"
        nrOfLevels={5}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8"]}
        percent={aqiPercent}
        arcWidth={0.10}
        arcPadding={0.02}
        hideText={true}
      />
      <div
        id="responseData"
        className="text-center flex flex-col justify-center items-center h-20"
      >
        <div className="flex flex-col ">
          {locationDisplayName && (
            <div className="flex flex-col mt-16 flex-wrap">
              <p className="p">Showing Results For:</p>
              <p className=" text-accent p">
                {locationDisplayName}{" "}
                <span className="text-white">at {time}</span>
              </p>
            </div>
          )}
          <div className="rounded-xl mt-4">
            {airQualityData && (
              <div className="flex flex-row text-sm md:text-base">
                {Object.keys(components).map((key) => (
                  <p key={key}>
                    {key}: {components[key]}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
