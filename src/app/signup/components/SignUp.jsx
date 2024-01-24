'use client'

import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { FaPersonBooth, FaLock, FaEnvelope, FaUserAlt, FaEye } from 'react-icons/fa';
import { BsFillPersonVcardFill } from 'react-icons/bs';
import { handleRegistrationData } from '../../services/handleCredentials';

function SignUp() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      username: Yup.string().required('Required'),
      firstName: Yup.string().required('Required'),
      lastName: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().min(8, 'Password should be at least 8 characters').required('Required'),
    }),
    onSubmit: values => {
      console.log('Form data submitted:', values);
      handleRegistrationData(values);
    },
  });

  return (
        <form onSubmit={formik.handleSubmit} className="component space-y-4">
          <h3 className="h2">Sign up today<span className='text-accent'>!</span></h3>
          {/* Username */}
          <div className="relative mt-2">
            <BsFillPersonVcardFill className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
            <label htmlFor="username" className="absolute text-xs font-medium px-2 top-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="mt-1 p-2 pt-6 pl-4 w-full input"
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>

          {/* First Name and Last Name */}
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
                value={formik.values.firstName}
                onChange={formik.handleChange}
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
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          {/* Email */}
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
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FaEye className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
            <label htmlFor="password" className="absolute text-xs font-medium px-2 top-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="mt-1 p-2 pt-6 pl-4 w-full input"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>

          <div>
            <div className='my-6 text-base items-end text-end'>
              Already a member? <span className='text-accent hover:underline hover:opacity-80 duration-300 cursor-pointer'>Sign In</span>
            </div>
            <button type="submit" className="w-full button-style">Sign Up</button>
          </div>
        </form>
   

  );
}

export default SignUp;
