"use client";

import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { usePathname, useSearchParams } from "next/navigation";
import "../../styles/globals.css";

export const metaInfo = {
  title: "AirActive: Breathe Better, Live Healthier",
  description:
    "Stay informed with real-time air quality updates for any location. Discover the best times to be outdoors and ensure a healthier lifestyle by monitoring the air you breathe.",
};

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const [signInPage, setIsSignInPage] = useState(false);
  //const [signUpPage, setIsSignUpPage] = useState(false);

  useEffect(() => {
    setIsSignInPage(pathname === "/login");
    //setIsSignIUpPage(pathname === "/signup");
  }, [pathname]);

  //console.log("pathname:", pathname);

  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          media="print"
          onload="this.media='all'"
        />

        {/* SEO Related Tags */}
        <title>EcoBreathe: Breathe Better, Live Healthier</title>
        <meta
          name="description"
          content="Stay informed with real-time air quality updates for any location. Discover the best times to be outdoors and ensure a healthier lifestyle by monitoring the air you breathe."
        />
        <meta
          name="keywords"
          content="Air Quality, Health, Breathe, Outdoor Activities, Pollution, Clean Air"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        {!signInPage && <Navbar />}
        <main>{children}</main>
        {!signInPage && <Footer />}
      </body>
    </html>
  );
}
