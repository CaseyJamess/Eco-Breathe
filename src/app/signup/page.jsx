import React from "react";
import SignUp from "./components/SignUp";
import SignUpInfo from "./components/SignUpInfo";

function page() {
  return (
    <div className="grid-layout ">
      <header>
        <h1 className="h1">
          Get started with Eco<span className="text-accent">Breathe</span>
        </h1>
      </header>
      <SignUp />
    </div>
  );
}

export default page;
