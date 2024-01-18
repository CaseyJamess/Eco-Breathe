import React from "react";
import Search from "./components/Search";
import About from "./components/About";

import { MdOutlineAir } from "react-icons/md";
import { WiDust } from "react-icons/wi";




// Inside your component

function LandingPage() {
  return (
    <div className="max-w-screen-xl mx-2 px-2 my-4 lg:my-8 xl:mx-auto">
      <div className="grid-layout">
        <section className="component">
          <About />
        </section>
        <section className=" bg-component border-component border rounded-xl shadow-md shadow-dark1 p-4 lg:p-8">
          <div className="w-full my-4">
            <div className="flex flex-row items-center space-x-4">
              <h3 className="h3">Displaying results for:</h3>
            <MdOutlineAir  className="text-5xl"/>
            <WiDust className="text-7xl" />
            </div>
         
            <Search />
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;
