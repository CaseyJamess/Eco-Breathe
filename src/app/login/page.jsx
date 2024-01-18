import React from "react";
import LoginComponent from "./components/Login";
import EnvironmentQuotes from "./components/EnvironmentQuotes";
import Mission from "./components/Mission";
function Login() {
  return (
    <div className="max-w-screen-xl mx-2 px-2 my-4 lg:my-8 xl:mx-auto">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <section>
        <LoginComponent />
      </section>
      <section className="flex flex-col bg-component p-8 rounded-xl">
        <Mission />
        <EnvironmentQuotes />
      </section>
    </div>
    </div>
  );
}

export default Login;
