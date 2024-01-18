import React from 'react';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metaInfo = {
  title: "AirActive: Breathe Better, Live Healthier",
  description:
    "Stay informed with real-time air quality updates for any location. Discover the best times to be outdoors and ensure a healthier lifestyle by monitoring the air you breathe.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        {/* SEO Related Tags */}
        <title>AirActive: Breathe Better, Live Healthier</title>
        <meta name="description" content="Stay informed with real-time air quality updates for any location. Discover the best times to be outdoors and ensure a healthier lifestyle by monitoring the air you breathe." />
        <meta name="keywords" content="Air Quality, Health, Breathe, ActiveAir, Outdoor Activities, Pollution, Clean Air" />

          {/* Favicon */}
    <link rel="icon" type="image/png" href="./Air-Active.svg" />
    </head>
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
