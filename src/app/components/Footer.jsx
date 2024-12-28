import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-white py-4 px-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center">
        {/* Left side content */}
        <div className="text-sm text-white mb-4 sm:mb-0 text-center sm:text-left">
          <p>{currentYear} © with love by Sreevalsan Ravikumar.</p>
          <p>All Rights Reserved.</p>
        </div>

        {/* Right side logo */}
        <div className="flex items-center">
          {/* Replace the placeholder with your actual logo */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-gray-900 font-bold text-xl">SR</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
