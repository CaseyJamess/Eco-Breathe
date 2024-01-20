"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
//import DarkModeToggle from "./DarkModeToggle";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const menuItems = [
    { name: "About", path: "/about" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Login", path: "/login" },
    { name: "Sign up", path: "/signup" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" w-full border-b bg-component border-component">
      <div className=" max-w-screen-xl flex flex-wrap items-center justify-between xl:mx-auto mx-2 px-2 p-4">
        <a
          href="/"
          className="flex items-center hover:cursor-pointer duration-300 hover:scale-105"
        >
          <Image src="/EcoBreathe.svg" alt="Logo" width={48} height={48} />
          <span className="h3 hidden md:flex ml-2">
            Eco<span className="text-accent">Breathe</span>
          </span>
        </a>

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
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>
                  <span
                    className={`block duration-300 py-2 pl-3 pr-4 rounded  md:hover:bg-transparent md:border-0 md:hover:text-accent md:p-0  
                    }
            `}
                  >
                    {item.name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
