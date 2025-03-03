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

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      if (prevScrollpos > currentScrollPos) {
        document.getElementById("header").classList.add("sticky");
      } else {
        document.getElementById("header").classList.remove("sticky");
      }
      prevScrollpos = currentScrollPos;

      if (window.scrollY > 0) {
        document.getElementById("header").classList.add("sticky_top");
      } else {
        document.getElementById("header").classList.remove("sticky", "sticky_top");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header id="header" className="bg-transparent">
      <nav className="flex items-center justify-between p-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Container */}
          <div className="flex-shrink-0">
            <a href="/">
              <img className="w-auto max-h-24" src="/solidcode_gold_white.svg" alt="Solid Code - Logo"></img>
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
                aria-label={darkMode ? "Zmień na tryb jasny" : "Zmień na tryb ciemny"}
              >
                <span className="iconify">{darkMode ? "light_mode" : "dark_mode"}</span>
              </a>
            </li>
          </ul>

          {/* Navbar onscroll Toggle */}
          <div
            className="md:hidden flex items-center"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
          >
            <div className="flex items-center">
              <div className="toggler-icon"></div>
              <span className="ml-2">Menu</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
