"use client"

import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-transparent fixed w-full h-24 flex justify-center items-center text-xl z-50">
      <div className="flex justify-between items-center h-full w-full max-w-screen pl-4 pr-4">
        <a href="#hero" id="navbar__logo" className="flex items-center">
          <img
            src="./icon-removebg-blue.png"
            className="h-20 w-24 mx-2 hover:scale-110 transition-transform duration-500 rounded-full"
            alt="icon"
          />
        </a>
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          <li className="text-[rgb(75,69,149)] hover:scale-110 transition-transform duration-500">
            <a href="#about">About Us</a>
          </li>
          <li className="text-[rgb(75,69,149)] hover:scale-110 transition-transform duration-500">
            <a href="#services">Services</a>
          </li>
          <li className="text-[rgb(75,69,149)] hover:scale-110 transition-transform duration-500">
            <a href="#resources">Resources</a>
          </li>
          <li className="text-[rgb(75,69,149)] hover:scale-110 transition-transform duration-500">
            <a href="#faq">FAQs</a>
          </li>
          <li className="transition-transform duration-500">
            <a href="#contact">
              <button className="bg-white py-2 px-5 rounded-lg border-2 border-[rgb(48,104,184)] text-[rgb(48,104,184)] hover:bg-[rgb(48,104,184)] hover:text-white transition duration-300">
                Contact Us
              </button>
            </a>
          </li>
          <li>
            <div id="share-buttons" className="flex space-x-4">
              <a href="https://www.facebook.com/people/Kindred-Therapy/61551832591985/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-75 transition-opacity duration-300">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.instagram.com/kindred_therapy/?igsh=cjAwYnJ6dTVmZ3h4" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:opacity-75 transition-opacity duration-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-[#4837ff] focus:outline-none" onClick={toggleMenu}>
            <svg
              className={`w-8 h-8 transform transition-transform duration-500 ${isOpen ? 'rotate-90' : ''}`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-[rgb(204,206,234)] z-40 flex flex-col justify-center items-center space-y-8 text-[rgb(75,69,149)] text-2xl font-bold">
            <a href="#about" onClick={toggleMenu} className="hover:text-[#4837ff] transition-colors duration-300">
              About Us
            </a>
            <a href="#services" onClick={toggleMenu} className="hover:text-[#4837ff] transition-colors duration-300">
              Services
            </a>
            <a href="#resources" onClick={toggleMenu} className="hover:text-[#4837ff] transition-colors duration-300">
              Resources
            </a>
            <a href="#faq" onClick={toggleMenu} className="hover:text-[#4837ff] transition-colors duration-300">
              FAQs
            </a>
            <a href="#contact" onClick={toggleMenu}>
              <button className="bg-white py-2 px-5 rounded-lg border-2 border-[rgb(48,104,184)] text-[rgb(48,104,184)] hover:bg-[rgb(48,104,184)] hover:text-white transition duration-300">
                Contact Us
              </button>
            </a>
            <div id="share-buttons" className="flex space-x-4">
              <a href="https://www.facebook.com/people/Kindred-Therapy/61551832591985/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:opacity-75 transition-opacity duration-300">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.instagram.com/kindred_therapy/?igsh=cjAwYnJ6dTVmZ3h4" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:opacity-75 transition-opacity duration-300">
                <i className="fab fa-instagram fa-2x"></i>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
