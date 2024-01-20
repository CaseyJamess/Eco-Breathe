const Key = () => {
  const airQualityLevels = [
    { color: "#a6db85", name: "Green", description: "Excellent" },
    { color: "#fadf88", name: "Yellow", description: "Moderate" },
    { color: "#faaf99", name: "Orange", description: "Unhealthy (Sensitive Groups)" },
    { color: "#e39292", name: "Red", description: "Unhealthy" },
    { color: "#b57d86", name: "Maroon", description: "Hazardous" },
  ];

  return (
    <div>
      <h3 className="text-white h3 font-semibold">Key:</h3>
      <article id="key" className="">
        {airQualityLevels.map((level) => (
          <div key={level.color} className="flex items-center my-4">
            <div className="flex flex-row w-6 h-6 mr-4">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="15" fill={level.color}></circle>
              </svg>
            </div>
            <div>
              <span className="p">{level.description}</span>
            </div>
          </div>
        ))}
       
      </article>
    </div>
  );
};

export default Key;
