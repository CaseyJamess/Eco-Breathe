"use client";

import React, { useState, useEffect } from "react";
import Search from "./components/Search";
import About from "./components/About";
import Gauge from "./components/Gauge";
import { MdOutlineAir } from "react-icons/md";
import { WiDust } from "react-icons/wi";

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
    <div className="grid-layout min-h-dvh sm:min-h-full md:p-10">
      {/* left col*/}

      <div className="">
        <About />
      </div>
      <section className="mt-8 md:-mt-6 md:p-6 lg:-mt-8 lg:p-8">
        <Gauge
          airQualityData={airQualityData}
          locationDisplayName={locationName}
        />
        <Search
          onAirQualityData={handleAirQualityData}
          onLocationName={handleLocationName}
        />
      </section>
    </div>
  );
}

export default LandingPage;
