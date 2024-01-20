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

  const handleBackgroundColourChange = (color) => {
    setBackgroundColour(color);
  };

  const handleAirQualityData = (data) => {
    setAirQualityData(data);
  };

  const handleLocationName = (data) => {
    setLocationName(data);
    //console.log("locationName is,", data);
  };

  return (
    <div className="">
      {/* left col*/}
      <section className="component grid-layout ">
        <About />
        <div className="flex flex-col ">
          <Gauge
            airQualityData={airQualityData}
            locationDisplayName={locationName}
          />

          <Search
            onAirQualityData={handleAirQualityData}
            onLocationName={handleLocationName}
          />
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
