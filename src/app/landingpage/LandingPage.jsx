import React from "react";
import Search from "./Search";
import Info from "./Info";

function LandingPage() {

  return (
    <div className="flex shadow-md shadow-neutral-100 flex-col w-full items-center">
      <div className="max-w-screen-xl mx-2 px-2 xl:mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-20 gap-10 mt-4 lg:mt-8 ">
          {/* Left Col */}
          <div>

            <h1 className="h1">
              Welcome To AirActive
            </h1>
            <h2 className="mt-4 accent font-semibold h2">Your real-time air quality companion</h2>

            <p className="mt-4 p">
            <strong>AirActive</strong> is your trusted source for real-time global air quality information. We prioritise your health by delivering accurate, hourly updates. Whether you're preparing for an outdoor excursion or just keeping tabs on your local environment, choose AirActive for reliable insights.
            </p>
            <p className="mt-4 p">
            <strong>To begin</strong>, simply enter a location in the search bar and let us handle the rest.
            </p>
            <p className="mt-4 p">
            <strong>Please note:</strong> The air quality data may come from the closest monitoring station to your searched location.
            </p>


            <button className=" mt-4 button-style">
              More Info
            </button>
          </div>
          {/* Right Col */}
          <div className="flex mt-8 md:mt-0 flex-col justify-center items-center">
            <div className="justify-center w-10/12">
              <Search/>
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
