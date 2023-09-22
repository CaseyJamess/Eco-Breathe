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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-40 gap-2 mt-4 lg:mt-16">
          {/* Left Col */}
          <div>

            <h1 className="text-3xl leading-normal xl:text-5xl">
              Welcome To AirActive
            </h1>
            <h2 className="mt-4 accent font-semibold text-xl xl:text-2xl">Your real-time air quality companion</h2>


            <p className="mt-4">
              With AirActive, you get up-to-the-minute readings on air quality, ensuring you and your
              loved ones stay safe and informed. Whether you're planning an
              outdoor activity or just want to keep a tab on the environment,
              AirActive has got you covered.
            </p>
            <button className=" mt-4 button-style">
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
