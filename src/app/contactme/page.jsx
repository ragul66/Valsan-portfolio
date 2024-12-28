"use client";
import React from "react";
import Image from "next/image";
import contact from "../../../public//Black and White Minimalist Professional Initial Logo/contact.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactSection = () => {
  const email = "ragulvasanth24@gmail.com";
  const whatsappNumber = "+917558179557";

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Adding subject and body parameters to make it more complete
    const mailtoLink = `mailto:${email}?subject=Project%20Inquiry&body=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;
    window.location.href = mailtoLink; // Using location.href for better compatibility
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    // Adding a default message parameter
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-bl from-black via-black to-purple-900 flex flex-col items-center justify-center p-4 min-h-screen">
        <div className="max-w-2xl w-full text-center space-y-8">
          <div className="bg-transparent rounded-full w-40 h-40 mx-auto flex items-center justify-center">
            <div className="w-40 h-40 bg-gray-900 rounded-full flex items-center justify-center animate-fadein">
              <Image
                height={200}
                width={200}
                src={contact}
                alt="contact"
                priority // Added to ensure image loads quickly
              />
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold text-white animate-fadeup">
            Tell Me About Your Next Project
          </h1>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8 animate-fadeleft">
            <a
              href={`mailto:${email}`} // Adding fallback href for better accessibility
              onClick={handleEmailClick}
              className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
            >
              Email me
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}`} // Adding fallback href
              onClick={handleWhatsAppClick}
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-300 cursor-pointer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
