import React from "react";
import SignUp from "./components/SignUp";
import Info from "./components/Info";
function page() {
  return (
    <div className="max-w-screen-xl mx-2 px-2 my-4 lg:my-8 xl:mx-auto">
      <div className="grid-layout">
        {/* Left Col */}
        <section>
          <Info />
        </section>
        {/* Right Col */}
        <section>
          <SignUp />
        </section>
      </div>
    </div>
  );
}

export default page;
