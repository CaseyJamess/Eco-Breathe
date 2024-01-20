import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        body: '#0a0a0a',
        component: '#0d0d0d',
        component2: '#323232',
        accent:'#1DB954',
        text2: '#93B1A6',
  
        airQuality: {
          excellent: 'rgba(190, 212, 137, 1)',    // #bed489 - Good
          good: 'rgba(236, 134, 75, 1)',         // #ec864b - Moderate
          moderate: 'rgba(36, 132, 132, 1)',     // #248484 - Fair
          fair: 'rgba(166, 177, 85, 1)',         // #a6b155 - Poor
          poor: 'rgba(212, 213, 188, 1)',        // #d4d5bc - Very Poor
          veryPoor: 'rgba(63, 61, 85, 1)',       // #3f3d55 - Hazardous
        },
      },
    },
  },
  plugins: [],
};

export default config;
