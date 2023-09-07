"use client";

import React from "react";
import Search from "./Search";
import Gauge from "./Gauge";

import { useState } from "react";

function LandingPage() {
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <div
      className="flex shadow-md shadow-neutral-100
    flex-col min-h-screen w-full items-center"
    >
      <div className="max-w-screen-xl mx-2 px-2 xl:mx-auto">
        <div className="flex flex-col mt-4 lg:mt-20 lg:flex-row ">
          {/* Left Col */}
          <div className="flex flex-col items-start w-full lg:w-6/12">
            <h1 className="text-xl text-transparent leading-normal bg-gradient-to-br from-blue-600 via-sky-500 to-green-500 bg-clip-text xl:text-3xl">
              Know when it's best to step out. Monitor the air quality around
              you with AirActive.
            </h1>
            <h5 className=" mt-4 font-semibold text-xl">
              Welcome to AirActive!
            </h5>
            <p className="mt-2 ">
              Your real-time air quality companion. With AirActive, you get
              up-to-the-minute readings on air quality, ensuring you and your
              loved ones stay safe and informed. Whether you're planning an
              outdoor activity or just want to keep a tab on the environment,
              AirActive has got you covered.
            </p>
            <button className="text-xl mt-4 text-center items-center bg-cyan-500 py-2 px-4  text-white rounded-md hover:bg-sky-600 duration-300">
              More Info
            </button>
          </div>

          {/* Right Col */}
          <div className="flex flex-col mt-10 md:mt-0 justify-center items-center mx-auto w-full lg:w-6/12">
            <Gauge/>
            <div className="justify-center mt-4 w-10/12">
              <Search />
            </div>
          </div>
        </div>

        <div className="max-w-screen-md mt-20 w-full justify-center mx-auto"></div>
      </div>
    </div>
  );
}

export default LandingPage;
