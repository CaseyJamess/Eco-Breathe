import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const pageLinks = [
    { name: "About", path: "#" },
    { name: "FAQs", path: "#" },
    { name: "Login", path: "#" },
    { name: "Join Today", path: "#" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      path: "https://github.com/",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/",
    },
    {
      text: "Hire me!",
      path: "",
    },
  ];

  const informationLinks = [
    {
      text: "Air Quality",
      link: "https://www.who.int/health-topics/air-pollution#tab=tab_1",
    },
    {
      text: "Effects on Health",
      link: "https://www.who.int/airpollution/ambient/health-impacts/en/",
    },
    {
      text: "Importance of Exercise",
      link: "https://www.who.int/health-topics/physical-activity",
    },
  ];

  return (
    <footer className="mt-auto py-16">
      <div className="flex flex-col max-w-screen-xl rounded-xl mx-2 px-2 xl:mx-auto">
        {/*
        <div className="flex mb-10 items-center justify-start">
          <Image
            src="/Air-Active.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-20  ml-4 mr-4"
          />
          <h3 className="md:text-5xl text-3xl font-bold">AirActive</h3>
        </div>
  */}
        <div className="flex flex-col md:flex-row w-full ">
          {/* About AirActive Column */}
          <div className="w-full md:w-4/12 md:mx-10 items-start ">
            <h5 className="h5  mb-4">
              Eco<span className="text-accent">Breathe</span>
              </h5>
            <p className="text-base">
              EcoBreathe is a platform dedicated to raising awareness about the
              importance of air quality, its effects on health, and the
              significance of regular exercise.
            </p>
          </div>
          {/* Nav links Column */}
          <div className=" md:w-4/12 mt-4 md:mt-0 items-start ">
            <h5 className="h5  text-accent mb-4">
              Quick Links
            </h5>
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block hover:text-accent  duration-300 text-base mb-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Information Links Column */}
          <div className="md:w-3/12 mt-4 md:mt-0  items-start ">
            <h5 className="h5 text-accent mb-4">
              Information
            </h5>
            {informationLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-accent duration-300 text-base mb-2"
              >
                {link.text}
              </a>
            ))}
            {/* Social Links */}
            <div className="flex flex-row items-center xl:justify-start mt-6 md:mt-0 justify-center text-center">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mr-4 mt-2 hover:text-accent duration-300 text-xl mb-2"
                >
                  {item.icon || item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-8 text-center">
          &copy; {new Date().getFullYear()} Eco<span className="text-accent">Breathe</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
