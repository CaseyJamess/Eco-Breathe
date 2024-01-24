import {
  FaExclamationTriangle,
  FaSkullCrossbones,
  FaMoneyBill,
} from "react-icons/fa";

const AirQuality = () => {
  return (
    <div className="w-full mx-auto">
      <header className="text-center max-w-screen-2xl 2xl:mx-auto bg-green-700 rounded-2xl mx-4 px-4 text-stone-50 flex flex-col justify-center p-4 lg:p-8 items-center min-h-[56vh] lg:min-h-[76vh] 2xl:min-h-[50vh]">
        <h1 className="h2">Understanding the importance of</h1>
        <h2 className="h1 mt-4 lg:mt-8">Air Quality</h2>
      </header>

      <div className="page">
        <section className="pt-14  text-center lg:pt-28">
          <div className="text-page ">
            <article>
              <h3 className="h1 font-semibold my-8 lg:my-16 tracking-tight">
                Overview.
              </h3>
              <p className=" p">
                <strong className="text-accent">Air Quality</strong> is the term
                used to describe the purity of the air in our environment and is
                a crucial, yet often overlooked aspect of public health.
              </p>
              <p className=" p">
                The significance of understanding and monitoring Air Quality
                simply{" "}
                <strong className="text-accent">cannot be overstated</strong>;
              </p>
              <p className="p">
                Air Pollution poses a significant global threat to both human
                health and the broader environment.
              </p>{" "}
            </article>
          </div>

          <article className="pt-14 lg:pt-28 ">
            <h3 className="h1 font-semibold  my-10 lg:my-20 tracking-tight">
              Dangers of poor Air Quality:
            </h3>

            {/* DANGERS OF POOR AIR QUALITY */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-start">
              <div className="bg-red-100 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="h2 text-red-600">
                  <FaExclamationTriangle />
                </i>
                <h3 className="h4 text-stone-950">Health Risks</h3>
                <p className="p mt-8 font-thin text-stone-950">
                  Poor air quality poses serious health risks, including
                  respiratory issues, cardiovascular problems, and overall
                  well-being, whilst long-term exposure can lead to chronic
                  conditions.
                </p>
              </div>

              <div className="bg-yellow-100 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="text-4xl text-yellow-600">
                  <FaSkullCrossbones />
                </i>
                <h3 className="h4 text-stone-950">Environmental Threat</h3>
                <p className="p mt-8 font-thin text-stone-950">
                  Poor air quality actively harms ecosystems and wildlife. It
                  contributes to climate change, damages plant life, and
                  disrupts the balance of ecosystems.
                </p>
              </div>

              <div className="bg-green-100 z-10 p-6 lg:p-12 rounded-2xl space-y-4">
                <i className="text-4xl text-green-600 mb-4">
                  <FaMoneyBill />
                </i>
                <h3 className="h4  flex-nowrap text-stone-950">
                  Economic Impact
                </h3>
                <p className="p mt-8 font-thin text-stone-950">
                  The economic impact of poor air quality is substantial. It
                  leads to increased healthcare costs, decreased productivity
                  and damage to industries - with a big impact to agriculture.
                </p>
              </div>
            </div>

            {/* END OF DANGERS OF POOR AIR QUALITY SECTION */}
          </article>

          <article className="pt-14 lg:pt-28">
            <div className="text-page">
              <h3 className="h1 font-semibold my-8 lg:my-16 tracking-tight">
                How is Air Quality Calculated?
              </h3>
              <p className="p">
                <strong>Air Quality</strong> is calculated by sampling and
                analysing the concentration of pollutants in the air.
              </p>
              <p className="p ">
                This assessment is conducted using specialised equipment
                strategically placed in both urban and rural areas. These
                devices offer a comprehensive view of air quality trends and
                patterns.
              </p>

              <p className="p mb-4">
                Each of these pollutants can have various sources, including
                Industrial and vehicular emissions, natural phenomena like
                wildfires and every day human
              </p>
            </div>

            <div className="py-8 lg:py-16 grid-layout">
              <div className="bg-green-700 z-10 p-12 lg:p-24 rounded-2xl">
                <h3 className=" mx-auto p-1 text-lg bg-stone-50 text-green-700 rounded-2xl ">
                  What constitutes good Air Quality?
                </h3>
                <p className="h4 tracking-wide text-stone-50 mt-8 font-extralight">
                  Air with minimal to no pollutants is considered 'good', whilst
                  air quality is deemed poor when it contains a substantial
                  amount of pollutants.
                </p>
              </div>

              <div className="bg-blue-800 p-12 lg:p-24 rounded-2xl">
                <h3 className=" p-1 text-lg mx-auto bg-stone-100 text-blue-600 rounded-2xl ">
                  Common Air Pollutants:
                </h3>

                <ul className=" list-disc font-thin text-stone-50 h4 mt-8 pl-10">
                  <li>Ground-level ozone</li>
                  <li>Particle pollution (liquid droplets)</li>
                  <li>Carbon monoxide</li>
                  <li>Sulfur dioxide</li>
                  <li>Nitrogen dioxide</li>
                </ul>
              </div>
            </div>

            <div className="text-page">
              <p className="pt-4 lg:pt-8 p">
                The data collected is then used to compute the Air Quality Index
                <strong className="text-accent"> (AQI)</strong>, a standardised
                indicator to inform users about the sampled Air pollution levels
                and any associated health implications.{" "}
              </p>
              <p className="p">
                AQI values range from 0 to 500, with higher values indicating
                poorer Air Quality and greater health risks.{" "}
                <span className="text-green-700 h2">*</span>
              </p>
            </div>
          </article>

          <div className="py-14 text-start text-page lg:py-28">
            <h4 className="h2  text-green-700">* </h4>
            <p className="p">
              Please note that the Air Quality Index (AQI) displayed on the
              homepage is a pre-calculated metric provided by OpenWeather,
              ranging from 1 (good) to 5 (hazardous). It's important to mention
              that different countries and organizations may use their own
              metrics to determine the Air Quality Index.
            </p>
            <p className=" p">
              {" "}
              Learn more here:
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://openweathermap.org/air-pollution-index-levels"
                className="text-accent ml-2 text-green-700 hover:underline duration-300  hover:opacity-80 cursor-pointer"
              >
                OpenWeatherMap Air Pollution Index Levels.
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AirQuality;
