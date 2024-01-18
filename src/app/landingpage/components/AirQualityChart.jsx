'use client'

import React, { useEffect, useRef } from "react";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  ChartConfiguration,
} from "chart.js";

const AirQualityChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      if (ctx) {
        Chart.register(
          LineController,
          LineElement,
          PointElement,
          LinearScale,
          CategoryScale
        );

        const chartConfig = {
          type: "line",
          data: {
            labels: [
              "00:00",
              "02:00",
              "04:00",
              "06:00",
              "08:00",
              "10:00",
              "12:00",
              "14:00",
              "16:00",
              "18:00",
              "20:00",
              "22:00",
            ],
            datasets: [
              {
                label: "Air Quality (AQI)",
                data: [
                  50, 52, 53, 54, 55, 60, 65, 70, 75, 80, 85, 85, 90, 92, 94,
                  95, 97, 99, 100, 101, 102, 103, 104, 105,
                ],
                borderColor: "blue",
                fill: false,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: 150,
                title: {
                  display: true,
                  text: "AQI Value",
                },
              },
              x: {
                title: {
                  display: true,
                  text: "Time of Day",
                },
              },
            },
          },
        };

        new Chart(ctx, chartConfig);
      }
    }
  }, []);

  return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default AirQualityChart;