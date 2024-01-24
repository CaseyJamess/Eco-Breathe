"use client";

import React, { useEffect } from "react";
import GaugeChart from "react-gauge-chart";
import timestamp from "time-stamp";

function Gauge({ airQualityData, locationDisplayName, onMount }) {
  const { aqi, components, dateTime } = airQualityData;
  const time = timestamp("HH:mm", new Date(dateTime * 1000));

  useEffect(() => {
    onMount = true;
  }, []); // Include onMount in the dependency array

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
    <div className="flex flex-col">
      <GaugeChart
        id="gauge"
        nrOfLevels={5}
        needleColor={"#728087"}
        needleBaseColor={"#728087"}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8"]}
        percent={aqiPercent}
        arcWidth={0.12}
        arcPadding={0.01}
        hideText={true}
        animDelay={0}
        animateDuration={4000}
      />
      <div
        id="responseData"
        className="text-center flex flex-col justify-center items-center "
      >
        <div className="flex flex-col ">
          {locationDisplayName && (
            <div className="flex flex-col flex-wrap">
              <p className="p">Showing Results For:</p>
              <p className=" text-green-600 text-base lg:text-lg">
                {locationDisplayName}{" "}
                <span className="">
                  at {time}
                </span>
              </p>
            </div>
          )}
          <div className="rounded-xl mt-4">
            {airQualityData && (
              <div className="flex flex-row text-sm lg:text-base">
                {Object.keys(components).map((key) => (
                  <p className="mr-2 " key={key}>
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
