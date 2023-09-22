import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AirActive: Breathe Better, Live Healthier",
  description:
    "Stay informed with real-time air quality updates for any location. Discover the best times to be outdoors and ensure a healthier lifestyle by monitoring the air you breathe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
