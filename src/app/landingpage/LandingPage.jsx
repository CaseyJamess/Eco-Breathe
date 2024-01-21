"use client";

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import About from "./components/About";
import Gauge from "./components/Gauge";
import Key from "./components/Key";

function LandingPage() {
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
    <div className="grid-layout min-h-dvh sm:min-h-full md:py-10 xl:mx-auto">
      <div className="">
        <About />
        <Search
          onAirQualityData={handleAirQualityData}
          onLocationName={handleLocationName}
        />
      </div>
      <section className="mt-2 md:-mt-2  ">
        <Gauge
          airQualityData={airQualityData}
          locationDisplayName={locationName}
        />
      </section>
    </div>
  );
}

export default LandingPage;
