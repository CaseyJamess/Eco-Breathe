"use client";

import React, { useState } from "react";
import { FaLock, FaEnvelope } from "react-icons/fa";

function LoginComponent() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = () => {};

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="component space-y-4">
      <h1 className="h1 text-stone-700 font-medium tracking-tighter my-2">
        Welcome Back!
      </h1>
      <div className="relative">
        <FaEnvelope className="absolute text-stone-400 right-2 top-1/2 transform -translate-y-1/2" />
        <label
          htmlFor="email"
          className="absolute text-xs font-medium px-2 top-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="mt-1 p-2 pt-6 pl-4 w-full input"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="relative">
        <FaLock className="absolute text-stone-400 right-2 top-1/2 transform -translate-y-1/2" />
        <label
          htmlFor="password"
          className="absolute text-xs font-medium px-2 top-2"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          className="mt-1 p-2 pt-6 pl-4 w-full input"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div className="mt-4 text-base items-end text-start">
        <span className=" hover:underline text-green-600 hover:opacity-80 duration-300 cursor-pointer">
          Forgot Password?
        </span>
      </div>
      <div>
        <div className="mt-4 text-base items-end text-start">
          Don't Have An Account?{" "}
          <span className="hover:underline text-green-600 hover:opacity-80 duration-300 cursor-pointer">
            Sign Up
          </span>
     
        
        
          
        </div>

        <button className="button-style mt-6 w-full">Log In</button>
      </div>
    </form>
  );
}

export default LoginComponent;
