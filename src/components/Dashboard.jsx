"use client";

import React, { useState, useEffect } from "react";
import Search from "./dashboard/Search";
import About from "./dashboard/About";
import Gauge from "./dashboard/Gauge";

function Dashboard() {
  const [airQualityData, setAirQualityData] = useState("");
  const [locationName, setLocationName] = useState("");

  const handleAirQualityData = (data) => {
    setAirQualityData(data);
  };

  const handleLocationName = (data) => {
    setLocationName(data);
    //console.log("locationName is,", data);
  };

  return (
    <div className="text-page min-h-dvh lg:min-h-full xl:mx-auto">
      <div className="grid-layout mt-10 mb-24 sm:min-h-auto md:mt-28 md:mb-80">
        <div className="">
        <About/>
          <Search
            onAirQualityData={handleAirQualityData}
            onLocationName={handleLocationName}
        />
        </div>
        <section className="mt-2 md:-mt-2">
          <Gauge
            airQualityData={airQualityData}
            locationDisplayName={locationName}
          />
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
