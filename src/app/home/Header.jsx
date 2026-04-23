"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image from "../../../public/aboutimage.png";
// import image from "../../../public/aboutimage.jpg"

const ROTATING_WORDS = ["Visual", "Web", "UX"];

const Header = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
        setAnimating(false);
      }, 350);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SREEVALSAN.pdf";
    link.download = "sreevalsan-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="hero-section">
      {/* ── Wavy SVG Background ── */}
      <svg
        className="hero-bg-svg"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 28 }).map((_, i) => (
          <path
            key={i}
            d={`M -100 ${60 + i * 38} Q 300 ${20 + i * 38} 600 ${60 + i * 38} T 1400 ${60 + i * 38}`}
            fill="none"
            stroke="#a855f7"
            strokeWidth="0.8"
          />
        ))}
        <path d="M 900 -50 Q 1000 200 850 500 T 950 900" fill="none" stroke="#a855f7" strokeWidth="1.2" opacity="0.6" />
        <path d="M 950 -50 Q 1050 250 900 550 T 1000 1000" fill="none" stroke="#7c3aed" strokeWidth="0.9" opacity="0.5" />
      </svg>

      {/* ── Purple glow top-right ── */}
      <div className="hero-glow" />

      {/* ── SCROLL DOWN (left vertical) ── */}
      <div className="scroll-label">
        <span className="label-line" />
        Scroll Down
      </div>

      {/* ── RIGHT SIDEBAR: Follow Me + icons in one column ── */}
      <div className="right-sidebar">
        {/* Follow Me rotated text */}
        <div className="follow-label">
          <span className="label-line-v" />
          <span className="follow-text">Follow Me</span>
        </div>

        {/* Social Icons */}
        <div className="social-icons">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/sree_valsan___/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social-link"
          >
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <title>Instagram</title>
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sreevalsanravikumar/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <title>LinkedIn</title>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>

          {/* Dribbble */}
          <a
            href="https://dribbble.com/SreeValsan_Ravi/shots"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Dribbble"
            className="social-link"
          >
            <svg width="26" height="26" fill="currentColor" viewBox="0 0 24 24">
              <title>Dribbble</title>
              <path d="M12 0C5.372 0 0 5.373 0 12s5.372 12 12 12c6.627 0 12-5.373 12-12S18.627 0 12 0zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073a44.374 44.374 0 0 0-.767-1.68c2.31-1 4.165-2.358 5.548-4.082a9.863 9.863 0 0 1 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68a46.716 46.716 0 0 0-3.143-4.695A9.928 9.928 0 0 1 12 2.087c2.275 0 4.368.779 6.043 2.072zM7.527 3.166a44.56 44.56 0 0 1 3.122 4.6c-3.11 1.981-6.77 3.004-10.46 3.073a9.98 9.98 0 0 1 7.338-7.673zm-5.459 9.35a23.763 23.763 0 0 0 10.945-3.366c.286.58.535 1.167.765 1.757-3.544 1.133-6.284 3.47-8.217 6.992a9.915 9.915 0 0 1-3.493-5.383zm5.88 7.9c1.73-3.218 4.227-5.394 7.473-6.498.919 2.478 1.486 5.092 1.692 7.836a9.919 9.919 0 0 1-9.165-1.338zm11.119.262a50.57 50.57 0 0 0-1.617-7.44c1.93-.267 4.054-.232 6.369.2a9.937 9.937 0 0 1-4.752 7.24z" />
            </svg>
          </a>

          {/* Bottom accent line */}
          <div className="sidebar-line" />
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="hero-content">
        {/* Left — Text */}
        <div className="hero-text">
          <p className="hero-subtitle">I&rsquo;m SreeValsan Ravikumar</p>

          <div className="hero-headline">
            <h1 className="headline-row">
              <span className="white-word">Creative</span>
              <span
                className="purple-word"
                style={{
                  opacity: animating ? 0 : 1,
                  transform: animating ? "translateY(-12px)" : "translateY(0)",
                }}
              >
                {ROTATING_WORDS[wordIndex]}
              </span>
            </h1>
            <h2 className="headline-outlined">Designer</h2>
          </div>

          {/* CTA */}
          <div className="hero-cta">
            <svg width="40" height="40" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.7 }}>
              <path d="M10 50 Q20 10 50 20" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" fill="none" />
              <path d="M44 14 L54 24 L42 28" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            <button onClick={handleDownload} className="download-btn">
              <span className="download-circle">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </span>
              <span className="download-label">Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Profile Image (absolute, right side) ── */}
      <div className="hero-image-wrap">
        <div className="hero-image-inner transition-transform duration-500 hover:scale-105">
          <Image
            src={image}
            alt="SreeValsan Ravikumar - Creative Visual Designer"
            width={700}
            height={900}
            className="hero-image animate-fadein"
            priority
          />
        </div>
      </div>

      {/* ── Styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap');

        /* ── Keyframes ── */
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes floatUpDown {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }

        /* ── Section ── */
        .hero-section {
          position: relative;
          min-height: 100vh;
          background-color: #050505;
          overflow: hidden;
          display: flex;
          align-items: center;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }

        /* ── Background SVG ── */
        .hero-bg-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.18;
        }

        /* ── Purple Glow ── */
        .hero-glow {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 480px;
          height: 480px;
          background: radial-gradient(circle, rgba(124,58,237,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        /* ── Scroll Down (left) ── */
        .scroll-label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.35);
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
          z-index: 10;
        }
        .label-line {
          width: 40px;
          height: 1px;
          background-color: rgba(168,85,247,0.5);
          display: inline-block;
        }

        /* ── Right Sidebar: Follow Me + Icons ── */
        .right-sidebar {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 64px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0;
          z-index: 10;
        }

        /* Follow Me rotated */
        .follow-label {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .label-line-v {
          width: 2px;
          height: 52px;
          background-color: rgba(168,85,247,0.6);
          display: block;
          border-radius: 2px;
        }
        .follow-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          color: rgba(255,255,255,0.6);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 4px;
          text-transform: uppercase;
          white-space: nowrap;
          user-select: none;
        }

        /* Social Icons */
        .social-icons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .social-link {
          color: rgba(255,255,255,0.55);
          transition: color 0.3s, transform 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .social-link:hover {
          color: #a855f7;
          transform: scale(1.25);
        }
        .sidebar-line {
          width: 2px;
          height: 52px;
          background: linear-gradient(to bottom, rgba(168,85,247,0.6), transparent);
          margin-top: 6px;
          border-radius: 2px;
        }

        /* ── Main Content ── */
        .hero-content {
          position: relative;
          z-index: 5;
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          padding: 100px 80px 60px 80px;
          display: flex;
          align-items: center;
        }

        /* ── Text Block ── */
        .hero-text {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 52%;
          animation: fadeInLeft 0.9s ease both;
        }

        .hero-subtitle {
          color: rgba(255,255,255,0.75);
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.5px;
          margin: 0;
          padding-top: 18px;
          animation: fadeInDown 0.8s ease both;
        }

        .hero-headline {
          line-height: 1.05;
        }

        .headline-row {
          margin: 0;
          font-size: clamp(32px, 4.8vw, 80px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -1px;
          display: flex;
          align-items: baseline;
          gap: 16px;
          white-space: nowrap;
          animation: fadeInLeft 0.9s ease both 0.1s;
        }
        .white-word { color: #ffffff; }
        .purple-word {
          color: #a855f7;
          display: inline-block;
          min-width: 100px;
          transition: opacity 0.35s ease, transform 0.35s ease;
        }

        .headline-outlined {
          margin: 0;
          font-size: clamp(32px, 4.8vw, 80px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: -1px;
          color: transparent;
          -webkit-text-stroke: 2px #a855f7;
          text-stroke: 2px #a855f7;
          animation: fadeInLeft 1s ease both 0.2s;
        }

        /* ── CTA ── */
        .hero-cta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-top: 8px;
          animation: fadeInUp 1s ease both 0.3s;
        }
        .download-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          color: #ffffff;
          animation: floatUpDown 3s ease-in-out infinite;
        }
        .download-circle {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: border-color 0.3s, background 0.3s;
        }
        .download-circle:hover {
          border-color: #a855f7;
          background: rgba(168,85,247,0.15);
        }
        .download-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #ffffff;
        }

        /* ── Profile Image ── */
        .hero-image-wrap {
          position: absolute;
          right: 52px;
          bottom: 0;
          top: 0;
          width: 48%;
          z-index: 4;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          pointer-events: none;
          animation: fadeInRight 1s ease both 0.2s;
        }
        .hero-image-inner {
          -webkit-mask-image: linear-gradient(to bottom, black 78%, transparent 100%);
          mask-image: linear-gradient(to bottom, black 78%, transparent 100%);
          height: 100%;
          display: flex;
          align-items: flex-end;
        }
        .hero-image {
          object-fit: contain;
          height: 92vh !important;
          width: auto !important;
          max-width: none !important;
        }

        /* ── Responsive ── */
        @media (max-width: 1024px) {
          .hero-content {
            padding: 100px 60px 60px 60px;
          }
          .hero-text {
            max-width: 55%;
          }
          .hero-image-wrap {
            width: 48%;
            right: 48px;
          }
        }

        /* Tablet — stack layout */
        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
          }
          .hero-content {
            padding: 90px 24px 0 24px;
            flex-direction: column;
            align-items: center;
            text-align: center;
            width: 100%;
          }
          .hero-text {
            max-width: 100%;
            z-index: 6;
            align-items: center;
          }
          .hero-headline {
            text-align: center;
          }
          .headline-row {
            justify-content: center;
            white-space: normal;
            font-size: clamp(28px, 8vw, 52px);
          }
          .headline-outlined {
            font-size: clamp(28px, 8vw, 52px);
            text-align: center;
          }
          .hero-cta {
            justify-content: center;
          }
          /* Image: pull out of absolute, sit below text */
          .hero-image-wrap {
            position: relative;
            right: unset;
            top: unset;
            bottom: unset;
            width: 100%;
            height: 75vw;
            max-height: 560px;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            pointer-events: auto;
            margin-top: 16px;
          }
          .hero-image-inner {
            height: 100%;
            width: 100%;
            display: flex;
            align-items: flex-end;
            justify-content: center;
          }
          .hero-image {
            height: 100% !important;
            width: auto !important;
            object-position: bottom;
          }
          .right-sidebar { display: none; }
          .scroll-label  { display: none; }
        }

        /* Mobile */
        @media (max-width: 480px) {
          .hero-content {
            padding: 85px 18px 0 18px;
          }
          .headline-row,
          .headline-outlined {
            font-size: clamp(26px, 10vw, 42px);
          }
          .hero-subtitle {
            font-size: 13px;
          }
          .hero-image-wrap {
            height: 80vw;
            max-height: 420px;
          }
        }
      `}</style>
    </section>
  );
};

export default Header;
