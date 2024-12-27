"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // New hook for `app/` directory

import logo from "../../../public//Black and White Minimalist Professional Initial Logo/1.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About me", href: "/about" },
    { title: "My Works", href: "/Myworks" },
    { title: "My Skills", href: "/Myskills" },
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
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image src={logo} height={50} width={50} alt="logo" />
            <h1>Valsan-portfolio</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? "text-white border-b-2 border-navlink"
                      : "text-white hover:text-white hover:border-b-2 hover:border-navlink"
                  }`}
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
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  pathname === item.href
                    ? "text-orange-400 border-b-2 border-orange-400"
                    : "text-white hover:text-gray-900"
                }`}
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
