import React from 'react';
import LoginComponent from "./components/Login"
import EnvironmentQuotes from "./components/EnvironmentQuotes"
import Mission from "./components/Mission"
function Login() {
  return (
    <div className='w-full'>
      <div className="flex flex-col md:flex-row min-h-screen max-w-screen-xl mt-4 md:mt-16 mx-2 px-2 xl:mx-auto">
        <div className='w-full md:w-5/12 items-center justify-center'>
          <LoginComponent />
        </div>
        <div className='hidden md:flex md:w-1/12'></div>
        <div className='md:w-6/12 items-center mt-10 md:mt-0  justify-center'>
          <Mission /> 
          <EnvironmentQuotes />
        </div>
      </div>
    </div>
  );
  }
  
  export default Login;