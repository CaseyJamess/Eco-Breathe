import React from 'react';
import SignUp from './components/SignUp';

function page() {
    return (
        <div className="flex min-h-screen flex-col w-full items-center relative">
            <div className=" max-w-screen-xl mt-10 mx-2 px-2 xl:mx-auto">
                <h3 className="text-2xl text-transparent leading-normal bg-gradient-to-br from-blue-600 via-sky-500 to-green-500 bg-clip-text xl:text-3xl">
                    Join For Free
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 ">

                    {/* Left Col */}
                    <div className='lg:order-first order-last'>

                        <h1 className="text-5xl mb-8 my-0 lg:my-8">
                            Get started with AirActive today<span className='text-blue-500'>.</span>
                        </h1>
                        <ul className="list-disc list-inside ">
                            <li className="mb-2"><strong className='text-blue-500'>Real-time Air Quality Monitoring</strong> - Don't leave it to chance. Know what you're breathing, as it happens.</li>
                            <li className="mb-2"><strong className='text-blue-500'>Health Impact Suggestions</strong> - Receive actionable advice tailored to current air conditions. Great for those with respiratory conditions!</li>
                            <li className="mb-2"><strong className='text-blue-500'>Outdoor Activity Planner</strong> - Planning a jog, a hike, or a picnic? Find the best times and places with the cleanest air.</li>
                            <li className="mb-2"><strong className='text-blue-500'>Personalised Notifications</strong> - Stay in the loop with alerts customised to your lifestyle and health needs.</li>
                            <li className="mb-2"><strong className='text-blue-500'>Community Reports</strong> - Be a part of a community effort to monitor and report air quality. Your input matters!</li>
                            <li className="mb-2"><strong className='text-blue-500'>Data Trends</strong> - Gain access to historical data and trends to better understand air quality patterns in your area.</li>
                        </ul>
                    </div>
                    {/* Right Col */}
                    <div className="order-first lg:order-last">
                        <SignUp />
                    </div>
                </div>


            </div>
        </div>
    );
}

export default page;
