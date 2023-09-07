import React from 'react';
import GaugeChart from 'react-gauge-chart';

function Gauge() {
  return (
    <div className="w-10/12"> {/* Adjust the width and height using Tailwind classes */}
      <GaugeChart 
        id="gauge" 
        nrOfLevels={5}
        colors={['#0D853A', '#E8D70D',  '#FF5733', '#D82E2F', '#C70039']}
        percent={0}
        arcWidth={0.3}
        hideText={true}
      />
    </div>
  );
}

export default Gauge;
