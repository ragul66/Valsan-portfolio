"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation"; // New hook for `app/` directory

import logo from "../../../public/Black and White Minimalist Professional Initial Logo/2-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About me", href: "/about" },
    { title: "My Works", href: "/Myworks" },
    { title: "My Skills", href: "/Myskills" },
    { title: "Contact", href: "/contactme" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://valsan-portfolio.vercel.app/SREEVALSAN.pdf"; // Access files in the public folder directly
    link.download = "sreevalsan-resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically click the link
    document.body.removeChild(link); // Remove the link from the document
  };

  return (
    <nav className="fixed  top-0 w-full bg-gradient-to-l from-black via-black to-purple-900 shadow-md z-50 text-white border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            <Image src={logo} height={80} width={80} alt="logo" />
            {/* <h1>Valsan-portfolio</h1> */}
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  className={`relative px-3 py-2 text-sm font-medium text-white transition-colors ${
                    pathname === item.href
                      ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-navlink"
                      : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-navlink"
                  }`}
                >
                  {item.title}
                </a>
              ))}
              <button
                onClick={handleDownload}
                className="bg-gradient-to-br from-navbutton2 to-navbutton1 border-l-2 border-l-navbutton1 border-r-2 border-r-navbutton2 text-white px-4 py-2 rounded-3xl text-sm font-medium transition-colors"
              >
                Resume
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 items-center  justify-center">
            {menuItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                className={`relative block px-3 py-2 text-base font-medium text-white ${
                  pathname === item.href
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] w-fit after:w-full after:bg-orange-400"
                    : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-400"
                }`}
              >
                {item.title}
              </a>
            ))}
            <button
              onClick={handleDownload}
              className="w-fit text-center items-center flex bg-gradient-to-br from-navbutton2 to-navbutton1 border-l-2 border-l-navbutton1 border-r-2 border-r-navbutton2  text-white px-3 py-2 rounded-3xl text-base font-medium  transition-colors"
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

// {
//   /* Mobile Menu */
// }
// {
//   isOpen && (
//     <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white rounded-lg p-4 space-y-4 shadow-md w-11/12 max-w-md">
//         <div className="space-y-4 flex flex-col items-center">
//           {menuItems.map((item) => (
//             <a
//               key={item.title}
//               href={item.href}
//               className={`relative block px-4 py-2 text-base font-medium text-gray-800 ${
//                 pathname === item.href
//                   ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-orange-400"
//                   : "hover:after:content-[''] hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:h-[2px] hover:after:w-full hover:after:bg-orange-400"
//               }`}
//             >
//               {item.title}
//             </a>
//           ))}
//           <button
//             onClick={handleDownload}
//             className="w-fit flex items-center justify-center bg-gradient-to-br from-navbutton2 to-navbutton1 border-l-2 border-l-navbutton1 border-r-2 border-r-navbutton2 text-white px-4 py-2 rounded-3xl text-base font-medium transition-colors"
//           >
//             Download Resume
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
