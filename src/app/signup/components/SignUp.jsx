'use client'
import React, { useState } from 'react';
import { FaPersonBooth, FaLock, FaEnvelope, FaUserAlt, FaEye } from 'react-icons/fa';
import { BsFillPersonVcardFill } from 'react-icons/bs'

function SignUp() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here.
    console.log('Form data submitted:', formData);
  };
  return (
    <div className='w-full'>
      <div className="text-lg w-full">
        <h3 className="text-5xl my-2">Sign up today<span className='text-blue-500'>!</span></h3>

        <form onSubmit={handleSubmit} className="space-y-4 rounded-xl mt-6">
          <div className="relative">
            <BsFillPersonVcardFill className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
            <label htmlFor="username" className="absolute text-xs font-medium px-2 top-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 pt-6 pl-4 w-full input"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row space-x-4">
            <div className="relative w-1/2">
              <FaUserAlt className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
              <label htmlFor="firstName" className="absolute text-xs font-medium px-2 top-2">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="mt-1 p-2 pt-6 pl-4 w-full input"
                value={formData.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="relative w-1/2">
              <FaUserAlt className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
              <label htmlFor="lastName" className="absolute text-xs font-medium px-2 top-2">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="mt-1 p-2 pt-6 pl-4 w-full input"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="relative">
            <FaEnvelope className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
            <label htmlFor="email" className="absolute text-xs font-medium  px-2 top-2">
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
            <FaEye className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
            <label htmlFor="password" className="absolute text-xs font-medium px-2 top-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 pt-6 pl-4 w-full input "
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <div className='my-6 text-base items-end text-end'>
              Already a member? <span className='text-blue-500 hover:text-blue-600 duration-500  cursor-pointer'>Sign In</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded-xl duration-500 hover:bg-blue-600"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
