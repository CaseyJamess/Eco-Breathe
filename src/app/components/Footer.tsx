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
      path: "https://casey-mcardle-portfolio.netlify.app/",
    },
  ];

  const informationLinks = [
    {
      text: "Air Quality & Climate",
      link: "https://www.who.int/airpollution/guidelines/en/",
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
    <footer className="bg-white dark:bg-gray-950 dark:shadow-md dark:shadow-neutral-700  py-8">
      <div className="flex flex-col max-w-screen-xl mx-2 px-2 xl:mx-auto">
        <div className="flex mb-10 items-center justify-center">
          <Image
            src="/Air-Active.svg"
            alt="Logo"
            width={80}
            height={80}
            className="w-20 md:w-28 mr-4"
          />
          <h3 className="md:text-5xl text-3xl font-bold">AirActive</h3>
        </div>

        <div className="flex flex-col md:flex-row w-full ">
          {/* About AirActive Column */}
          <div className="w-full  md:w-6/12 md:mx-10 items-start ">
            <h5 className="text-xl text-sky-600 font-semibold mb-4">
              Get Outside Today!
            </h5>
            <p className="text-base">
              AirActive is a platform dedicated to raising awareness about the
              importance of air quality, its effects on health, and the
              significance of regular exercise. Our mission is to promote a
              healthy lifestyle in clean environments.
            </p>
          </div>
          {/* Nav links Column */}
          <div className=" md:w-3/12 mt-4 md:mt-0 items-start ">
            <h5 className="text-xl font-semibold text-sky-600 mb-4">
              Quick Links
            </h5>
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block  hover:text-sky-600 dark:hover:text-pink-600 duration-300 text-base mb-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Information Links Column */}
          <div className="md:w-3/12 mt-4 md:mt-0  items-start ">
            <h5 className="text-xl font-semibold text-sky-600 mb-4">
              Information
            </h5>
            {informationLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                className="block hover:text-sky-600 text-base mb-2"
              >
                {link.text}
              </a>
            ))}
            {/* Social Links below Information Links */}
            <div className="flex flex-row items-center text-center">
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block  mr-4 mt-2 hover:text-sky-600 dark:hover:text-pink-600 duration-300 text-xl mb-2"
                >
                  {item.icon || item.text}
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center">
          &copy; {new Date().getFullYear()} AirActive. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
