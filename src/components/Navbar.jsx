"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Latest", path: "/latest" },
    { name: "Air Quality", path: "/airquality" },
    { name: "About Us", path: "/aboutus" },
    { name: "FAQs", path: "/FAQs" },
    { name: "Login", path: "/login" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full">
      <div className="max-w-screen-xl bg-stone-50 rounded-2xl flex flex-wrap items-center justify-between xl:mx-auto px-2 mx-2 lg:px-4 py-4">
        <a href="/" className="flex flex-row items-center hover:cursor-pointer">
          <Image src="/EcoBreathe.svg" alt="Logo" width={44} height={44} />
          <p className="text-base lg:text-lg hidden lg:flex ml-4">
            Eco<span className="text-green-700">Breathe</span>
          </p>
        </a>
        {/* Toggle button for mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center w-10 h-10 justify-center text-sm rounded-lg md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <FaBars className="w-6 h-6 text-green-700 " />
        </button>

        {/* Navigation Menu */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full flex-row md:flex md:items-center md:justify-between md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium border dark:border-opacity-70 border-opacity-70 border-secondary dark:border-primary p-4 rounded-xl flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  className={`link ${pathname === item.path ? "active" : ""}`}
                  href={item.path}
                >
                  <span
                    className={`block duration-300 py-1 rounded md:hover:bg-transparent md:border-0 md:hover:text-green-600 md:p-0`}
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
