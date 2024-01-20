"use client";

import React, { useState } from "react";
import SignUp from "../signup/components/SignUp"; // Assume SignUp and Login are your popup components

function About() {
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div>
      <header className="md:py-10">
        <h1 className="h1 ">
          About Eco<span className="text-accent">Breathe</span>
        </h1>
      </header>

      <section className="max-w-screen-lg">
        <article className="component mb-8">
          <h2 className="text-start h2">
            Understanding Air Quality and Its Importance
          </h2>
          <p className="mt-8 p">
            <strong className="text-accent">Air Quality</strong> is a measure of
            how clean or polluted the Air around us is and what characteristics
            it possesses. This Quality is determined by assessing the
            concentrations of different pollutants present in the Air that we
            breathe.
          </p>
          <p className="mt-8 p">
            These pollutants are a mixture of solid particles, liquid droplets
            and gases, with some of the primary pollutants including{" "}
            <strong className="text-accent">particulate matter </strong>
            such as carbon monoxide, sulfur dioxide, nitrogen dioxide, and lead.
          </p>
          <p className="mt-8 p">
            Each of these pollutants can have various sources ranging from
            industrial & vehicular emissions, as well as natural phenomena like
            wildfires and even everyday human activities.
          </p>
          <p className="mt-8 p">
            Air Quality typically involves employing specialised monitoring
            equipment to capture and analyze Air samples. This equipment is
            strategically placed at various locations in both urban and rural
            settings, offering a comprehensive perspective on Air Quality trends
            and patterns.
          </p>

          <p className="mt-8 p">
            The data collected is then used to compute the{" "}
            <strong className="text-accent">Air Quality Index (AQI)</strong>, a
            standardised indicator that informs the public about daily Air
            pollution levels and associated health implications. AQI values
            range from 0 to 500, with higher values indicating poorer Air
            Quality and greater health risks.{" "}
            <strong className="text-accent h2">*</strong>
          </p>
          <p className="mt-8 p">
            The significance of understanding and monitoring Air Quality cannot
            be overstated. Breathing polluted Air has been linked to a host of
            health issues, from short-term effects like irritation of the eyes,
            nose, and throat, to more severe long-term conditions such as{" "}
            <strong className="">respiratory and heart diseases</strong>, and
            even premature death.
          </p>
          <p className="mt-8 p">
            On a broader scale, poor Air Quality can harm wildlife, damage
            forests, and affect bodies of water. It also plays a pivotal role in{" "}
            <strong className="text-accent">climate change</strong>, further
            highlighting the imperative to be informed and proactive in our
            actions.
          </p>
        </article>

        <article className="component my-8 ">
          <h3 className=" h2 font-semibold ">Who We Are</h3>
          <p className="mt-8 p leading-relaxed">
            Eco<span className="text-accent">Breathe</span> is a single-person
            initiative committed to raising the awareness about Air Quality and
            it's impact on health and the greater environment. Living in a time
            of unprecedented environmental challenges, the significance of
            understanding the Air in which we breathe has never been more
            crucial.
          </p>
        </article>

        <article className="component my-8">
          <h3 className="font-semibold h2">Our Mission</h3>
          <p className="mt-8 p leading-relaxed">
            At Eco<span className="text-accent">Breathe</span>, our mission is
            to empower individuals with the information necessary for making
            informed decisions about their health and safety.
          </p>
          <p className="mt-8 p">
            {" "}
            While I may be one individual, the information I share comes
            directly from a network of environmental scientists, public health
            experts, and Air Quality analysts.
          </p>
          <p className="mt-8 p">
            {" "}
            My goal is to provide you with real-time, accurate data on Air
            Quality, enabling you to make healthier lifestyle choices and become
            a more environmentally responsible citizen of Earth.
          </p>
        </article>

        <div className="component my-8">
          <h4 className="h2 text-accent">* </h4>
          <p className="p">
            Please note that the Air Quality Index (AQI) displayed on the
            homepage is a pre-calculated metric provided by OpenWeather, ranging
            from 1 (good) to 5 (hazardous). It's important to mention that
            different countries and organizations may use their own metrics to
            determine the Air Quality Index.
            <p className="mt-8"> Learn more here:
            <a
              href="https://openweathermap.org/air-pollution-index-levels"
              className="text-accent ml-2 hover:underline duration-300  hover:opacity-80 cursor-pointer"
            >
              OpenWeatherMap Air Pollution Index Levels.
            </a>
            </p>
          </p>

  
        </div>
      </section>
    </div>
  );
}

export default About;
