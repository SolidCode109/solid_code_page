"use client";

import React, { useState, useEffect } from "react";
import { menuConfig } from "../Header/menuConfig";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    let prevScrollpos = window.scrollY;
    const cardContainer = document.getElementById("cardContainer");

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.add("sticky");
      } else {
        document.getElementById("header").classList.remove("sticky");
        cardContainer.classList.remove("offcanvas--visible");
      }
      prevScrollpos = currentScrollPos;

      if (window.scrollY > 0) {
        document.getElementById("header").classList.add("sticky_top");
      } else {
        document
          .getElementById("header")
          .classList.remove("sticky", "sticky_top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const toggleButton = document.getElementById("toggleButton");
    const cardContainer = document.getElementById("cardContainer");
    const closeButton = document.getElementById("closeButton");

    const handleToggleClick = () => {
      cardContainer.classList.add("offcanvas--visible");
    };

    const handleCloseClick = () => {
      cardContainer.classList.remove("offcanvas--visible");
    };

    toggleButton.addEventListener("click", handleToggleClick);
    closeButton.addEventListener("click", handleCloseClick);

    return () => {
      toggleButton.removeEventListener("click", handleToggleClick);
      closeButton.removeEventListener("click", handleCloseClick);
    };
  }, []);

  return (
    <header id="header" className="bg-transparent">
      <nav className="flex items-center justify-between p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Container */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                className="w-auto max-h-24"
                src="/solidcode_gold_white.svg"
                alt="Solid Code - Logo"
              ></img>
            </a>
          </div>
          <div className="mx-auto"></div>
          {/* Menu Container */}
          <ul className="hidden md:flex space-x-4">
            {menuConfig.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className={`text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 ${
                    pathname === item.href ? "font-bold" : ""
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          {/* Colour picker Container */}
          <ul className="flex items-center space-x-4">
            <li>
              <a
                href="#"
                onClick={toggleDarkMode}
                className="text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400"
                aria-label={
                  darkMode ? "Zmień na tryb jasny" : "Zmień na tryb ciemny"
                }
              >
                <span className="iconify">
                  {darkMode ? "light_mode" : "dark_mode"}
                </span>
              </a>
            </li>
          </ul>

          {/* Navbar onscroll Toggle */}

          <button
            id="toggleButton"
            className="visible md:invisible text-white px-4 py-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-menu"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      <div
        id="cardContainer"
        className="fixed top-0 right-0 h-screen w-0 overflow-hidden bg-black bg-opacity-75 backdrop-blur-lg shadow-lg transition-all duration-300 z-50 visible md:invisible"
      >
        <button
          id="closeButton"
          className="text-red-500 absolute top-6 right-6 z-30"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>

        <div className="w-full h-full px-8 py-16 relative">
          <div className="w-full h-auto flex flex-col gap-y-1 mt-6">
            {/* Menu Container */}
            <ul className="flex-col space-x-4">
              {menuConfig.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`text-gray-800 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 ${
                      pathname === item.href ? "font-bold" : ""
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
