import React from 'react';
import SignUp from './components/SignUp';

function page() {

    const info = [
        {
            id: 0,
            title: "Real-time Air Quality Monitoring",
            info: " - Don't leave it to chance. Know what you're breathing, as it happens.",
        },
        {
            id: 1,
            title: "Health Impact Suggestions",
            info: " - Receive actionable advice tailored to current air conditions. Great for those with respiratory conditions!",
        },
        {
            id: 2,
            title: "Outdoor Activity Planner",
            info: " - Stay in the loop with alerts customised to your lifestyle and health needs.",
        },
        {
            id: 3,
            title: "Community Reports",
            info: " - Be a part of a community effort to monitor and report air quality. Your input matters!",
        },
        {
            id: 4,
            title: "Data Trends",
            info: " - Gain access to historical data and trends to better understand air quality patterns in your area.",
        },

    ]
    return (
        <div className="flex min-h-screen flex-col w-full items-center relative">
            <div className=" max-w-screen-xl mt-10 mx-2 px-2 xl:mx-auto">
                <h3 className="text-2xl leading-normal accent xl:text-3xl">
                    Join For Free
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-28 ">

                    {/* Left Col */}
                    <div className='lg:order-first order-last'>

                        <h1 className="text-5xl mb-8 my-0 lg:my-8">
                            Get started with AirActive<span className='accent'>.</span>
                        </h1>
                        {info.map((item) =>
                            <ul className="list-disc list-inside ">
                                <li className="mb-4"><strong className='accent text-lg'>{item.title}</strong>{item.info}</li>
                            </ul>
                        )}
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
