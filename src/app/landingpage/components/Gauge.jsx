"use client";

import React, { useState, useEffect } from "react";
import GaugeChart from "react-gauge-chart";

function Gauge({ airQualityData, locationDisplayName }) {
 // console.log("dataa", airQualityData);
  // console.log("name", locationDisplayName);




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
  // console.log("city", city);

  return (
    <div className="flex flex-col">
      <GaugeChart
        id="gauge"
        nrOfLevels={5}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8"]}
        percent={0}
        arcWidth={0.12}
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

          {locationDisplayName &&(
              <div className="flex flex-col lg:flex-row flex-wrap">
                <p className="p">Showing Results For:</p>
                <p className="md:ml-2 text-accent p">{locationDisplayName}</p>
              </div>
            )}
            <div className="">
              <p className="mr-2 ">{}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
