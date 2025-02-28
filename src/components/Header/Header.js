"use client";

import React, { useState, useEffect } from "react";
import { menuConfig } from "../Header/menuConfig";
import { usePathname } from "next/navigation";




const Header = () => {
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = (e) => {
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

  return (
    <header id="header">
      <nav className="navvar navbar-expand">
        <div className="container header">
        {/* Logo Container */}
          <div className="navbar-logo">
            <a href="/">
              <img src="/solidcode_gold_plain.svg" alt="Solid Code - Logo"></img>
            </a>
          </div>
          {/* Menu Container */}
          <ul className="navbar-nav items d-none d-md-block">
            {menuConfig.map((item, index) => (
              <li className="nav-item" key={index}>
                <a
                  href={item.href}
                  className={`nav-link ${
                    pathname === item.href ? "active" : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          {/* Colour picker Container */}
          <ul className="navbar-nav icons d-flex align-items-center">
            <li className="nav-item">
                <a href="#" onClick={toggleDarkMode} className="nav-link" aria-label={darkMode ? "Zmień na tryb jasny" : "Zmień na tryb ciemny"}>
                    <span className="iconify">{darkMode ? "light_mode" : "dark_mode"}</span>
                </a>
            </li>
          </ul>

          {/* Navbar onscroll Toggle */}
          <div className="navbar-toggler scrolled"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight">
            <div className="navbar-header">
                <div className="content">
                    <div className="toggler-icon"></div>
                    <span className="title">Menu</span>
                </div>
            </div>

          </div>

        </div>
      </nav>

    </header>
  );
};

export default Header;
