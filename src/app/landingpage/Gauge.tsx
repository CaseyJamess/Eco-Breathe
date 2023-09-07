import React from 'react';
import GaugeChart from 'react-gauge-chart';

function Gauge() {
  return (
    <div className="w-10/12 lg:w-9/12"> 
      <GaugeChart 
        id="gauge" 
        nrOfLevels={5}
        colors={['#22c55e', '#facc15',  '#f97316', '#dc2626', '#5b21b6']} // Tailwind's green, yellow, orange, red, purple
        percent={0}
        arcWidth={0.3}
        hideText={true}
      />
    </div>
  );
}

export default Gauge;
