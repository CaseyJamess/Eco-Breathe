import React from "react";

const Info = () => {
  const airQualityLevels = [
    {
      color: "#22c55e",
      name: "Green",
      description: "Excellent air quality; low pollution.",
    },
    {
      color: "#facc15",
      name: "Yellow",
      description:
        "Moderate air quality; acceptable unless there is unusual sensitivity to pollution.",
    },
    {
      color: "#f97316",
      name: "Orange",
      description: "Unhealthy for sensitive groups.",
    },
    {
      color: "#dc2626",
      name: "Red",
      description: "Unhealthy for everyone; limit prolonged outdoor exertion.",
    },
    {
      color: "#5b21b6",
      name: "Purple",
      description:
        "Very Unhealthy: Health alert; everyone may experience more serious health effects. Reduce outdoor activities.",
    },
    {
      color: "#881337",
      name: "Maroon",
      description:
        "Hazardous: Serious health warnings of emergency conditions. Entire population is more likely to be affected. Stay indoors and reduce exposure.",
    },
  ];

  return (
    <div className="mt-0 md:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
      {/* Key Section */}
      <div id="key" className="order-first lg:order-last">
        <h3 className="accent h3 font-semibold">Key</h3>
        {airQualityLevels.map((level) => (
          <div key={level.color} className="flex items-center my-4">
            <div className="relative w-10 h-10 flex-shrink-0 flex-grow-0 mr-4">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15" fill={level.color}></circle>
              </svg>
            </div>
            <div className="flex-grow">
              <span className="font-bold p mr-2">{level.name}:</span>
              <span className="p">{level.description}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Info Section */}
      <div id="info">
        <h2 className="text-start accent text-lg xl:text-xl font-semibold mb-4">
          Understanding Air Quality with AirActive
        </h2>
        <p className="mb-4 p">
          <strong>The quality of the air we breathe</strong> profoundly impacts our health and
          well-being. It's influenced by various pollutants, including nitrogen
          dioxide, sulfur dioxide, ozone, and particulate matter.
        </p>
        <p className="mb-4 p">
          <strong>Recognising the importance of air quality</strong>, AirActive has developed a
          unique color-coded gauge providing a visual representation of air
          quality levels, with each color indicating a specific level. This
          user-friendly approach allows everyone to quickly assess the air's
          condition and take appropriate actions when necessary.
        </p>
        <p className="mb-4 p">
          <strong>For advanced features</strong>, including detailed analytics and
          personalisation, sign up and join the AirActive community today.
        </p>
        <button className="button-style">
          Sign Up
        </button>
      </div>
    </div>
  );
  
        }
        
export default Info;
