'use client'

import React, { useState } from 'react';
import SignUp from '../signup/components/SignUp';  // Assume SignUp and Login are your popup components
{/*import Login from './Login';*/ }

function About() {
    const [showSignUp, setShowSignUp] = useState(false);
    {/* const [showLogin, setShowLogin] = useState(false); */ }

    return (
        <div className="w-full">
            <div className='flex flex-col max-w-screen-xl mt-4 mx-2 xl:mx-auto px-2 xl:mt-10'>
                <h1 className="text-2xl text-transparent leading-normal bg-gradient-to-br from-blue-600 via-sky-500 to-green-500 bg-clip-text xl:text-3xl">
                    About AirActive
                </h1>
                <div className="flex flex-col max-w-screen-lg my-4 mx-auto items-center justify-center ">
                    <div className="mt-4">
                        <h2 className="font-semibold accent text-xl">Who We Are</h2>
                        <p className="mt-2">
                            AirActive is a
                            single-person initiative committed to the vital issue of air quality.
                            Living in a time of unprecedented environmental challenges, the significance of
                            understanding what we breathe has never been more crucial. While I may be one individual, the information I share comes directly from a network of environmental scientists,
                            public health experts, and air quality analysts. My goal is to provide you with real-time, accurate data on air quality, enabling you to make healthier lifestyle choices and become a more environmentally responsible citizen.
                        </p>

                        <h2 className="mt-4 font-semibold accent text-xl">Our Mission</h2>
                        <p className="mt-2">
                            The mission of AirActive is dual in nature:
                            First, to equip individuals with the information they need
                            to make informed decisions about their health and safety,
                            using accurate and timely air quality data.
                            Second, to amplify the importance of air quality awareness in the public discourse.
                            By translating scientific findings into easily understandable insights,
                            AirActive seeks to educate communities on both the health and environmental implications of air quality,
                            fostering a collective drive towards cleaner air and a more sustainable future.
                        </p>
                    </div>

                    <div className="my-10 w-full mx-auto flex flex-row items-start justify-start">
                        <button
                            onClick={() => setShowSignUp(true)}
                            className="md:text-lg text-sm text-center hover:text- items-center text-white hover:text-slate-950 border-1 py-2 px-4 dark:text-white rounded-md hover:bg-white duration-500 mr-2"
                        >
                            Sign Up
                        </button>

                        <button
                            onClick={() => setShowLogin(true)}
                            className="md:text-lg text-sm text-center items-center bg-blue-700 hover:border-white py-2 px-4 text-white rounded-md hover:bg-blue-600 duration-300 ml-2">
                            Login
                        </button>
                    </div>

                    {showSignUp && <SignUp onClose={() => setShowSignUp(false)} />}
                    {/*showLogin && <Login onClose={() => setShowLogin(false)} />*/}
                </div>
            </div>
        </div>
    );
}

export default About;
