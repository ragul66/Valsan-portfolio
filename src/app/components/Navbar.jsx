"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About", href: "/about" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  const handleDownload = () => {
    // Replace with your resume file path
    window.open("/resume.pdf", "_blank");
  };

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-l from-black via-black to-purple-900 shadow-md z-50 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <h1 className="text-xl font-bold">Portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block ">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className="text-white hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {item.title}
                </a>
              ))}
              <button
                onClick={handleDownload}
                className="bg-button text-white px-4 py-2 rounded-3xl text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                Download Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="block text-white hover:text-gray-900 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </a>
            ))}
            <button
              onClick={handleDownload}
              className="w-full text-left bg-button text-white px-3 py-2 rounded-3xl text-base font-medium hover:bg-blue-700 transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
