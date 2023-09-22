'use client'

import React from "react";
import Search from "./Search";
import Gauge from "./Gauge";
import { useState } from "react";
import Info from "./Info";

function LandingPage() {
  const [hasSearched, setHasSearched] = useState(false);
  return (
    <div className="flex shadow-md shadow-neutral-100 flex-col w-full items-center">
      <div className="max-w-screen-xl mx-2 px-2 xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-40 gap-2 mt-4 xl:mt-10">
          {/* Left Col */}
          <div>
            <h2 className="text-2xl text-transparent leading-normal bg-gradient-to-br from-blue-600 via-sky-500 to-green-500 bg-clip-text xl:text-3xl">
              Know when it's best to step out. Monitor the air quality around
              you with AirActive.
            </h2>
            <h1 className="mt-4 font-semibold text-xl">Welcome to AirActive!</h1>
            <p className="mt-2">
              Your real-time air quality companion. With AirActive, you get
              up-to-the-minute readings on air quality, ensuring you and your
              loved ones stay safe and informed. Whether you're planning an
              outdoor activity or just want to keep a tab on the environment,
              AirActive has got you covered.
            </p>
            <button className="md:text-lg text-sm mt-4 text-center items-center bg-blue-500 py-2 px-4 text-white rounded-md hover:bg-blue-600 duration-300">
              More Info
            </button>
          </div>
          {/* Right Col */}
          <div className="flex mt-20 md:mt-0 flex-col justify-center items-center">
            <Gauge />
            <div className="justify-center mt-4 w-10/12">
              <Search />
            </div>
          </div>
        </div>

        <div className="my-20 w-full justify-center mx-auto">
          <Info />
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
