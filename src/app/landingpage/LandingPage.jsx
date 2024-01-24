"use client";

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import About from "./components/About";
import Gauge from "./components/Gauge";

function LandingPage() {
  const [airQualityData, setAirQualityData] = useState("");
  const [locationName, setLocationName] = useState("");
  const [isGaugeMounted, setIsGaugeMounted] = useState(false);

  const handleAirQualityData = (data) => {
    setAirQualityData(data);
  };

  const handleLocationName = (data) => {
    setLocationName(data);
    //console.log("locationName is,", data);
  };

  const handleGaugeMount = (data) => {
    console.log("data, ", data);
    setIsGaugeMounted(true);
  };

  return (
    <div className="page lg:min-h-full xl:mx-auto">
    <div className="grid-layout mt-20 mb-36 min-h-dvh sm:min-h-auto lg:mt-40 lg:mb-60">
      <div className="">
        <About />
        <Search
          onAirQualityData={handleAirQualityData}
          onLocationName={handleLocationName}
        />
      </div>
      <section className="mt-2 md:-mt-2">
        <Gauge
          airQualityData={airQualityData}
          locationDisplayName={locationName}
          onMount={handleGaugeMount}
        />
      </section>
    </div>

    </div>
  );
}

export default LandingPage;
