"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboutSvg from "../../../public/about-top-image.svg";

const BIO =
  "I'm A Visual Designer Passionate About Crafting Clean And Intuitive Digital Experiences. I've Worked On Website Designs And Social Media Visuals For Brands Like Amazon Associates And Designed A Mobile App For A Fintech Company. I Specialize In UI/UX For Web Apps And Work With Figma, Photoshop, InDesign, And Motion Tools Like After Effects. Some Of My Proudest Projects Include A Doctor's Website And Multi-Page Layouts For Various Companies.";

const WORDS = BIO.split(" ");

export default function AboutSection() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const [revealCount, setRevealCount] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionH = sectionRef.current.offsetHeight;
      const windowH = window.innerHeight;

      // Card fades in once section enters viewport
      if (rect.top < windowH * 0.85) setCardVisible(true);

      // Word reveal: progress from when sticky panel is pinned to when section ends
      // rect.top goes from 0 (pinned) to -(sectionH - windowH) (end)
      const scrolled = -rect.top; // 0 at pin start, positive as we scroll
      const scrollRange = sectionH - windowH; // total scrollable distance inside section
      const progress = Math.max(0, Math.min(1, scrolled / scrollRange));
      setRevealCount(Math.floor(progress * WORDS.length));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      className="about-section"
    >
      {/* Sticky panel — stays pinned while you scroll through the section */}
      <div ref={stickyRef} className="about-sticky">
        <div className={`about-card ${cardVisible ? "card-visible" : ""}`}>
          {/* Top SVG image */}
          <div className="about-svg-wrap">
            <Image
              src={aboutSvg}
              alt="About decoration"
              width={120}
              height={120}
              className="about-svg-img"
            />
          </div>

          {/* Scroll-reveal paragraph */}
          <p className="bio-text">
            {WORDS.map((word, i) => {
              const isRevealed = i < revealCount;
              return (
                <span key={i} className={`bio-word ${isRevealed ? "revealed" : ""}`}>
                  {word}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        /* Section is tall enough to scroll through all words */
        .about-section {
          background: #050505;
          /* Reduced height to make text reveal faster */
          height: calc(100vh + 150vh);
          position: relative;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }

        /* Sticky container pins to top while section scrolls */
        .about-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 24px;
        }

        /* Card */
        .about-card {
          position: relative;
          max-width: 1100px;
          width: 100%;
          background: rgba(10, 8, 18, 0.95);
          border: 1.5px solid rgba(168, 85, 247, 0.55);
          border-radius: 20px;
          padding: 64px 64px;
          text-align: center;
          box-shadow:
            0 0 60px rgba(124, 58, 237, 0.08),
            inset 0 0 40px rgba(124, 58, 237, 0.04);
          opacity: 0;
          transform: translateY(48px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .about-card.card-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* Corner accents */
        .about-card::before,
        .about-card::after {
          content: '';
          position: absolute;
          width: 20px;
          height: 20px;
          border-color: #a855f7;
          border-style: solid;
          border-radius: 3px;
          opacity: 0.5;
        }
        .about-card::before { top: -1px; left: -1px; border-width: 2px 0 0 2px; }
        .about-card::after  { bottom: -1px; right: -1px; border-width: 0 2px 2px 0; }

        /* SVG top image */
        .about-svg-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 28px;
        }
        .about-svg-img {
          width: 100px !important;
          height: 100px !important;
          object-fit: contain;
          filter: drop-shadow(0 0 10px rgba(168,85,247,0.45));
          animation: spin-slow 18s linear infinite;
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Bio text */
        .bio-text {
          margin: 0;
          font-size: clamp(15px, 1.6vw, 19px);
          font-weight: 600;
          line-height: 1.85;
          letter-spacing: 0.3px;
          text-transform: capitalize;
        }
        .bio-word {
          color: rgba(255,255,255,0.15);
          transition: color 0.35s ease;
          display: inline;
        }
        .bio-word.revealed { color: #ffffff; }

        @media (max-width: 768px) {
          .about-card { padding: 40px 24px; }
          .about-section { height: calc(100vh + 200vh); }
        }
        @media (max-width: 480px) {
          .about-sticky { padding: 70px 16px; }
          .about-card { padding: 32px 16px; }
          .bio-text { font-size: 14px; }
        }
      `}</style>
    </div>
  );
}
