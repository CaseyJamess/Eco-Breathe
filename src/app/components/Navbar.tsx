"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import DarkModeToggle from "./DarkModeToggle";
import { FaBars } from "react-icons/fa";

const Navbar: React.FC = () => {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Login", path: "/login" },
    { name: "Sign up", path: "/signup" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-slate-50 shadow-md shadow-gray-100 dark:shadow-slate-800 dark:bg-slate-950">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image
            src="/Air-Active.svg"
            alt="Logo"
            width={60}
            height={60}
            className="mr-3"
          />
          <span className="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
            AirActive
          </span>
        </div>

        {/* Toggle button for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-5 h-5" />
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full flex-row md:flex md:items-center md:justify-between md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg dark:bg-gray-800 md:dark:bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0   ">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <span
                    className={`block duration-300 py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-500 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent 
                    }
            `}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-10 hidden md:flex md:mt-0">
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
