'use client'

import React, { useState } from 'react';
import { FaLock, FaEnvelope } from 'react-icons/fa';

function LoginComponent() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = () => {

    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-zinc-50 dark:bg-gray-800 p-8 rounded-xl">
            <h1 className="xl:text-5xl text-3xl my-2">Welcome Back<span className='accent'>...</span></h1>
            <div className="relative">
                <FaEnvelope className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
                <label htmlFor="email" className="absolute text-xs font-medium px-2 top-2">
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
                <FaLock className="absolute text-gray-400 right-2 top-1/2 transform -translate-y-1/2" />
                <label htmlFor="password" className="absolute text-xs font-medium px-2 top-2">
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
            <div className="mt-4 text-base items-end  text-start">
                <span className="accent hover:underline duration-500 cursor-pointer">Forgot Password?</span>
            </div>
            <div>
                <div className='mt-4 text-base items-end text-start'>
                    Don't Have An Account? <span className='accent hover:underline duration-500 cursor-pointer'>Sign Up</span>
                </div>
                <button
                    className="button-style mt-6 w-full"
                >
                    Log In
                </button>
            </div>
        </form>
    )
}

export default LoginComponent;
