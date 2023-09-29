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
      <head>{/* Fill with other Meta for SEO etc*/}</head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
