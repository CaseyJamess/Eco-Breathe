import React from "react";
import LoginComponent from "./components/Login";
import EnvironmentQuotes from "./components/EnvironmentQuotes";
import Mission from "./components/Mission";
function Login() {
  return (

    <div className="grid-layout min-h-dvh sm:min-h-full md:py-10">
      <section>
        <LoginComponent />
      </section>
      <section className="flex flex-col bg-component p-8 rounded-xl">
        <Mission />
        <EnvironmentQuotes />
      </section>
    </div>
  );
}

export default Login;
