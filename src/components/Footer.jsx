import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const pageLinks = [
    { name: "Latest", path: "/latest" },
    { name: "Air Quality", path: "/airquality" },
    { name: "About Us", path: "/aboutus" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Login", path: "/login" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      path: "https://github.com/CaseyJamess",
    },
    {
      icon: <FaLinkedin />,
      path: "https://www.linkedin.com/in/casey-mcardle/",
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

  const notify = () => {
    window.alert("Newsletter coming soon - stay tuned");
  };

  return (
    <footer className="mt-auto w-full mx-auto">
      <div className="flex flex-col  p-8 lg:p-16 rounded-2xl mb-4 bg-green-950 text-white mx-4  xl:mx-auto max-w-screen-xl ">
        <div className="flex flex-col justify-between md:flex-row w-full ">
          {/* About EcoBreathe Column */}
          <div className=" md:w-5/12 md:mx-8 bg-items-start">
            <h4 className="h4 mb-4">
              Eco<span className="">Breathe</span>
            </h4>
            <p className="text-base">
              EcoBreathe is a platform dedicated to raising awareness about the
              impact of Air Quality around the globe.
            </p>

            <form
              action="/your-newsletter-endpoint"
              method="post"
              className="mt-4 relative flex items-center"
            >
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <div className="relative w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full py-2 px-4 border border-stone-400 placeholder:text-stone-200 text-stone-100 bg-green-950 rounded-xl"
                />
                <button
                  onClick={notify}
                  type="submit"
                  className="absolute right-2 transform -translate-y-1/2 top-1/2 bg-green-800 rounded-lg px-2 py-2 text-sm hover:bg-green-900 duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          {/* Nav links Column */}
          <div className="mt-4 md:mt-0  items-start ">
            <h4 className="h4 mb-4">Quick Links</h4>
            {pageLinks.map((item, index) => (
              <a
                key={index}
                href={item.path}
                className="block hover:text-green-600 duration-300 text-base mb-2"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Information Links Column */}
          <div className="mt-4 md:mt-0   items-start ">
            <h4 className="h4 mb-4">Information</h4>
            {informationLinks.map((link, index) => (
              <a
                key={index}
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-green-600 duration-300 text-base mb-2"
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
                  className="block mr-4 mt-2 hover:text-green-600 duration-300 text-xl mb-2"
                >
                  {item.icon || item.text}
                </a>
              ))}
              <div className="block mr-4 mt-2 hover:text-green-600 duration-300 text-xl mb-2">
                Hire Me!
              </div>
            </div>
          </div>
        </div>

        <p className="mt-4 lg:mt-8 text-center">
          &copy; {new Date().getFullYear()} Eco Breathe. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
