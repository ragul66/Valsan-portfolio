"use client";
import React from "react";
import Image from "next/image";
import image from "../../../public/sree1.jpg";

const Header = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://valsan-portfolio.vercel.app/SREEVALSAN.pdf"; // Access files in the public folder directly
    link.download = "sreevalsan-resume.pdf"; // Name for the downloaded file
    document.body.appendChild(link); // Append the link to the document
    link.click(); // Programmatically click the link
    document.body.removeChild(link); // Remove the link from the document
  };
  return (
    <div className="relative  min-h-screen bg-gradient-to-tr from-black via-black to-purple-900 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0">
        <div className="absolute w-72 md:w-44 h-44 md:h-44 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob top-0 left-20 transform-gpu" />
        <div className="absolute w-72 md:w-60 h-72 md:h-60 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob motion-safe:delay-2000 top-40 right-20 transform-gpu" />
        <div className="absolute w-72 md:w-60 h-72 md:h-60 bg-gradient-to-tr from-purple-700 via-purple-800 to-green-700 rounded-full blur-3xl motion-safe:animate-blob motion-safe:delay-4000 bottom-20 left-1/2 transform-gpu" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content column - moves to bottom on mobile */}
          <div className="order-2 lg:order-1 space-y-6 md:space-y-8">
            <h2 className="text-xl md:text-3xl text-white font-medium animate-fadein">
              I'm SreeValsan Ravikumar
            </h2>
            <div className="space-y-2 bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent">
              <h1 className="text-4xl animate-fadeleft md:text-6xl font-bold bg-clip-text text-transparent  ">
                Web Designing &
              </h1>
              <h1 className="text-4xl animate-fadeleft md:text-6xl font-bold bg-clip-text text-transparent ">
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
              <button
                onClick={handleDownload}
                className="hover:bg-navbutton2 border-2 border-navbutton2 text-white px-4 md:px-6 py-2 rounded-full transition-colors text-sm md:text-base"
              >
                Resume
              </button>
              <a
                href="https://www.instagram.com/sree_valsan___/"
                className="text-white hover:text-white hover:bg-instagram transition-colors border-2 border-navbutton2 p-2 rounded-full"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Instagram</title>
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-white hover:text-white hover:bg-linkedin transition-colors border-2 border-navbutton2 p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 hover:scale-110"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>LinkedIn</title>
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="https://dribbble.com/SreeValsan_Ravi/shots"
                className="text-white hover:text-white hover:bg-dripple transition-colors border-2 border-navbutton2 p-2 rounded-full"
                aria-label="dripple"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon-dribbble w-6 h-6 transition-transform duration-300 hover:scale-110 "
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-labelledby="dribbbleIconTitle"
                  role="img"
                >
                  <title id="dribbbleIconTitle">Dribbble</title>
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.949 5.845a9.452 9.452 0 0 1 2.058 5.502c-.264-.057-2.79-.585-5.43-.258-.224-.554-.432-1.09-.66-1.612 2.81-1.183 4.05-3.252 4.032-3.632zm-1.508-.808c-.154.257-1.215 1.932-3.824 2.996a46.26 46.26 0 0 0-2.683-4.067A9.448 9.448 0 0 1 12 2.55a9.44 9.44 0 0 1 4.441 1.487zm-6.47-.65a47.7 47.7 0 0 1 2.535 3.935c-4.22 1.217-7.936 1.309-8.359 1.309a9.448 9.448 0 0 1 5.824-5.244zm-5.882 6.264c.344-.009 4.62-.118 9.008-1.56.224.456.432.918.623 1.387-2.365.597-4.34 1.554-6.056 2.789-.897-1.785-1.657-3.383-1.68-3.423a9.427 9.427 0 0 1-.472-.193c-.42-.14-.827-.331-1.223-.559zm3.802 6.295c1.471-1.226 3.295-2.146 5.528-2.71.387 1.038.691 2.115.935 3.213a40.69 40.69 0 0 1-6.463 3.138 9.442 9.442 0 0 1-.001-3.641zm2.236 4.415a40.014 40.014 0 0 0 6.206-3.019c1.079 3.442 1.413 5.684 1.476 6.001a9.45 9.45 0 0 1-7.682-2.982zm9.11-1.295c-.052-.271-.391-2.006-1.395-4.953 2.345-.271 4.63.094 4.901.147a9.448 9.448 0 0 1-3.506 4.806z" />
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
