import React from "react";
import GaugeChart from "react-gauge-chart";
import timestamp from "time-stamp";

function Gauge({ airQualityData = {}, locationDisplayName = "" }) {
  
  const { aqi = 0, components = {}, dateTime } = airQualityData;
  const time = timestamp("HH:mm", new Date(dateTime * 1000));

  const calculateAqiPercent = (aqiValue) => {
    const maxAqi = 5;
    // -0.1 to get the Gauge Needle in the middle
    return aqiValue ? aqiValue / maxAqi - 0.1 : 0;
  };

  const aqiPercent = calculateAqiPercent(aqi);

  return (
    <div className="flex flex-col">
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={5}
        needleColor={"#57534e"}
        needleBaseColor={"#57534e"}
        colors={["#15803d", "#eab308", "#ea580c", "#b91c1c", "#6d28d9"]}
        percent={aqiPercent}
        arcWidth={0.12}
        arcPadding={0.01}
        hideText={true}
        animDelay={500}
        animateDuration={4000}
      />
      <div
        id="responseData"
        className="text-center flex flex-col -mt-4 md:-mt-6 justify-center items-center "
      >
        <div className="flex h-[140px] overflow:auto flex-col ">
          {locationDisplayName && (
            <div className="flex flex-col flex-wrap">
              <p className="p">Showing Results For:</p>
              <p className=" text-green-700 text-base lg:text-lg">
                {locationDisplayName} <span className="">at {time}</span>
              </p>
            </div>
          )}
          <div className="rounded-xl mt-4">
            {airQualityData && (
              <div className="flex flex-row text-sm lg:text-base">
                {Object.keys(components).map((key) => (
                  <p className="mr-2 " key={key}>
                    {key}: {components[key]}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gauge;
