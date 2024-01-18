"use client";

import React, { useState } from "react";
import SignUp from "../signup/components/SignUp"; // Assume SignUp and Login are your popup components


function About() {
  const [showSignUp, setShowSignUp] = useState(false);


return (
<section>
<h1 className="h1">About Eco<span className="text-accent">Breathe</span></h1>
  <article className="lex flex-col p-4 lg:p-8 max-w-screen-lg bg-component lg-p-16 rounded-xl mt-4 mx-2 xl:mx-auto px-2 xl:mt-10">
  
    <div className="flex flex-col mx-auto items-center justify-center ">
      <div className="mt-4">
        <h2 className="font-semibold h2">
          {" "}
          Understanding Air Quality and Its Importance
        </h2>
        <p className="mt-4 p">
          Air quality is a measure of how clean or polluted the air around
          us is and what characteristics it possesses. This quality is
          determined by assessing the concentrations of different pollutants
          present in the air that we breathe. These pollutants can be a
          mixture of solid particles, liquid droplets, and gases. Some of
          the primary pollutants include{" "}
          <strong className="">particulate matter</strong> (like PM2.5
          and PM10), ground-level ozone, carbon monoxide, sulfur dioxide,
          nitrogen dioxide, and lead. Each of these pollutants can have
          various sources, ranging from industrial activities, vehicle
          emissions, natural phenomena like wildfires, and even everyday
          human activities.
        </p>
        <p className="mt-4 p">
          Measurement of air quality is typically undertaken using
          specialised monitoring equipment that captures and analyses
          samples of the air. This equipment is often stationed at multiple
          locations within urban and rural settings, providing a
          comprehensive view of air quality trends and patterns. The data
          collected is then used to compute the{" "}
          <strong className="">Air Quality Index (AQI)</strong>, a
          standardised indicator that informs the public about daily air
          pollution levels and associated health implications. AQI values
          range from 0 to 500, with higher values indicating poorer air
          quality and greater health risks.
        </p>
        <p className="mt-4 p">
          The significance of understanding and monitoring air quality
          cannot be overstated. Breathing polluted air has been linked to a
          host of health issues, from short-term effects like irritation of
          the eyes, nose, and throat, to more severe long-term conditions
          such as{" "}
          <strong className="">respiratory and heart diseases</strong>
          , and even premature death. On a broader scale, poor air quality
          can harm wildlife, damage forests, and affect bodies of water. It
          also plays a pivotal role in{" "}
          <strong className="">climate change</strong>, further
          highlighting the imperative to be informed and proactive in our
          actions.
        </p>
      </div>
    </div>
  </article>

  <article className="flex flex-col p-4 lg:p-8 max-w-screen-lg bg-component lg-p-16 rounded-xl mt-4 mx-2 xl:mx-auto px-2 xl:mt-10">
    <h2 className=" h2 font-semibold ">Who We Are</h2>
    <p className="mt-4 p leading-relaxed">
      AirActive is a single-person initiative committed to the vital
      issue of air quality. Living in a time of unprecedented
      environmental challenges, the significance of understanding what
      we breathe has never been more crucial. While I may be one
      individual, the information I share comes directly from a network
      of environmental scientists, public health experts, and air
      quality analysts. My goal is to provide you with real-time,
      accurate data on air quality, enabling you to make healthier
      lifestyle choices and become a more environmentally responsible
      citizen.
    </p>
  </article>

  <article className="flex flex-col p-4 lg:p-8 max-w-screen-lg bg-component lg-p-16 rounded-xl mt-4 mx-2 xl:mx-auto px-2 xl:mt-10">
    <h2 className=" font-semibold  h2">Our Mission</h2>
    <p className="mt-4 p leading-relaxed">
      The mission of AirActive is dual in nature: First, to equip
      individuals with the information they need to make informed
      decisions about their health and safety, using accurate and timely
      air quality data. Second, to amplify the importance of air quality
      awareness in the public discourse. By translating scientific
      findings into easily understandable insights, AirActive seeks to
      educate communities on both the health and environmental
      implications of air quality, fostering a collective drive towards
      cleaner air and a more sustainable future.
    </p>
  </article>
</section>

  );
}

export default About;
