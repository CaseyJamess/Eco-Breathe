const Key = () => {
  const airQualityLevels = [
    { color: "#22c55e", name: "Green", description: "Good" },
    { color: "#facc15", name: "Yellow", description: "Fair" },
    { color: "#f97316", name: "Orange", description: "Unhealthy" },
    { color: "#dc2626", name: "Red", description: "Very Poor" },
    { color: "#6B21A8", name: "Maroon", description: "Hazardous" },
  ];

  return (
    <div className="mt-0 hidden lg:flex lg:mt-12">
      <div id="key" className="flex flex-row justify-between items-center flex-nowrap">
        {airQualityLevels.map((level) => (
          <div key={level.color} className="flex-col justify-items-center my-4">
            <div className="flex flex-row w-8 h-8 mx-auto">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15" fill={level.color}></circle>
              </svg>
            </div>
            <div className="mt-2">
              <span className="text-lg">{level.description}</span>
            </div>
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default Key;
