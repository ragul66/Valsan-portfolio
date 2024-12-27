import React from "react";
import Image from "next/image";
import image from "../../../public/passport1.jpg";

const Header = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-tr from-black via-black to-purple-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 md:w-60 h-60 md:h-60 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob top-0 left-20 transform-gpu" />
        <div className="absolute w-72 md:w-60 h-72 md:h-60 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob motion-safe:delay-2000 top-40 right-20 transform-gpu" />
        <div className="absolute w-72 md:w-60 h-72 md:h-60 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob motion-safe:delay-4000 bottom-20 left-1/2 transform-gpu" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content column - moves to bottom on mobile */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-2xl text-white font-medium">
              I'm SreeValsan Ravikumar
            </h2>
            <div className="space-y-2 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
              <h1 className="text-4xl animate-fadeleft md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300 ">
                Web Designing &
              </h1>
              <h1 className="text-4xl animate-fadeleft md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">
                UX Designer
              </h1>
            </div>
            <p className="text-gray-300 max-w-lg text-sm md:text-base animate-fadeup hover:translate-x-2 transition-transform duration-300">
              a UI/UX designer with a background in Business Engineering. My
              journey into design has shown me the incredible power of visuals
              in shaping user behavior. I'm passionate about prioritizing
              user-centered design principles, creating engaging and accessible
              experiences that resonate with users. Let's explore the
              intersection of design and behavior together!
            </p>
            <div className="flex space-x-4 items-center">
              <button className="hover:bg-purple-600 border-2 text-white px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base">
                Resume
              </button>
              <a
                href="#"
                className="text-white hover:text-white hover:bg-instagram transition-colors border-2 p-2 rounded-full"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white hover:bg-linkedin transition-colors border-2 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Photo column - moves to top on mobile */}
          <div className="order-1 lg:order-2">
            <div className=" aspect-square rounded-lg flex items-center justify-center max-w-md mx-auto transition-transform duration-500 hover:scale-105">
              <Image
                src={image}
                alt="Profile"
                width={300}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
