"use client";

import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="max-w-7xl mx-auto py-0 px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src="https://png.pngtree.com/png-clipart/20220903/ourmid/pngtree-chef-restaurant-logo-png-image_6136204.png"
            alt="Logo"
            className="w-16"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-medium">
          <Link href="/">Home</Link>
          <Link href="#aboutus">About</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#services">Services</Link>
          <Link href="#contact">Contact</Link>
        </nav>

        {/* Action Buttons */}
        <div className="hidden md:flex items-center gap-2">
          {/* <button className="text-gray-800 px-8 py-2 rounded-lg hover:bg-gray-100 transition">
            Contact
          </button> */}
          <button className="bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-500 transition">
            Get Started
          </button>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Toggle menu"
            className="text-gray-800 focus:outline-none"
          >
            <div className={`transform transition-transform duration-300 ${isOpen ? "rotate-90 scale-110" : ""}`}>
              {isOpen ? <HiOutlineX size={30} /> : <HiOutlineMenuAlt3 size={30} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out transform ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } bg-white px-4 pb-4`}
      >
        <hr />
        <ul className="flex mt-4 flex-col justify-center items-center gap-4">
          <li>
            <Link href="/" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#aboutus" onClick={toggleMenu}>
              About
            </Link>
          </li>
          <li>
            <Link href="#menu" onClick={toggleMenu}>
              Menu
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={toggleMenu}>
              Services
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={toggleMenu}>
              Contact
            </Link>
          </li>
          <li className="w-full">
            <button className="bg-orange-400 text-white w-full px-6 py-2 rounded-lg hover:bg-orange-500 transition">
              About Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
