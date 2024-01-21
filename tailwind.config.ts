import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
      
        primary: "#f8f8f8",
        secondary: '#0d0d0d',
        accent: '#1DB954',
        variant: '#0d0d0d',
        variant2: '#323232',
        secondary2: '#eeeeee',
        shadow: "#002300",
        dark: {
          primary: '#000F00 ',
          secondary: '#f8f8f8',
          variant: '#010904',
          variant2: '#323232',
          secondary2:'#93B1A6',
        },
      },
    },
  },
  plugins: [
]

};

export default config;
