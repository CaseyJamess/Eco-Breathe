'use client'

import React, { useEffect } from "react";
import GaugeChart from "react-gauge-chart";

function Gauge({ airData, feedbackMessage }) {

  const {
    city,
    country,
    current: {
      weather: { ts } = {},
      pollution: { aqius } = {},
    } = {},
  } = airData || {};

  const formatDateAndTime = (timestamp) => {
    const date = new Date(timestamp);
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    };
    return date.toLocaleString(undefined, options);
  };

  const formattedTs = formatDateAndTime(ts);

  useEffect(() => {
    console.log("Updated airData in Gauge component:", airData);
  }, [airData]);

  const calculateAqiPercent = (aqiValue) => {
    const maxAqi = 500;
    return aqiValue ? (aqiValue / maxAqi) : 0;
  }

  const aqiPercent = calculateAqiPercent(aqius);

    return (
    <div className=" lg:w-11/12 flex flex-col justify-between items-center">
      <GaugeChart
        id="gauge"
        nrOfLevels={6}
        arcsLength={[0.1, 0.1, 0.1, 0.1, 0.2, 0.4]}
        colors={["#22c55e", "#facc15", "#f97316", "#dc2626", "#6B21A8", "#881337"]}
        percent={aqiPercent}
        arcWidth={0.3}
        arcPadding={0.03}
        hideText={true}
      />
      <div id="responseData" className="text-center flex flex-col justify-center items-center h-20">
        {feedbackMessage ? (
          <p className="text-red-600 p bg-white dark:text-red-500">{feedbackMessage}</p>
        ) : airData && city && country ? (
          <>
            <h3 className="h3">
              <strong>{city}, {country}</strong>
            </h3>
            {ts && aqius && (
              <>
                <p className="p">{formattedTs}</p>
                <p className="p">Air Quality Index: <strong>{aqius}</strong></p>
              </>
            )}
          </>
        ) : (
          <p className="text-gray-600 p dark:text-gray-300">Awaiting Air Quality data...</p>
        )}
      </div>
    </div>
  );
}

export default Gauge;
