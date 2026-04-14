"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";

// ── Full bio text split into words for scroll reveal ──
const BIO =
  "I'm A Visual Designer Passionate About Crafting Clean And Intuitive Digital Experiences. I've Worked On Website Designs And Social Media Visuals For Brands Like Amazon Associates And Designed A Mobile App For A Fintech Company. I Specialize In UI/UX For Web Apps And Work With Figma, Photoshop, InDesign, And Motion Tools Like After Effects. Some Of My Proudest Projects Include A Doctor's Website And Multi-Page Layouts For Various Companies.";

const WORDS = BIO.split(" ");

export default function AboutSection() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const [revealCount, setRevealCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      // Only start revealing once the card bottom has entered the viewport top
      // (i.e. card is scrolled into view from the bottom)
      // revealStart = card top enters bottom of screen
      // revealEnd   = card bottom reaches center of screen
      const revealStart = windowH - rect.top;      // positive once card is in view
      const revealRange = rect.height * 1.4;        // over this range words reveal

      const progress = Math.max(0, Math.min(1, revealStart / revealRange));
      setRevealCount(Math.floor(progress * WORDS.length));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="about-page">
      <Navbar />

      <main className="about-main" ref={sectionRef}>
        {/* invisible sentinel to track scroll position */}
        {/* ── Card ── */}
        <div className="about-card" ref={cardRef}>
          {/* Mandala / decorative icon */}
          <div className="mandala-wrap">
            <svg
              viewBox="0 0 80 80"
              width="56"
              height="56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mandala-svg"
            >
              {/* Petals */}
              {Array.from({ length: 12 }).map((_, i) => {
                const angle = (i * 30 * Math.PI) / 180;
                const x = 40 + 20 * Math.cos(angle);
                const y = 40 + 20 * Math.sin(angle);
                const x2 = 40 + 28 * Math.cos(angle);
                const y2 = 40 + 28 * Math.sin(angle);
                return (
                  <g key={i}>
                    <line
                      x1="40" y1="40"
                      x2={x2} y2={y2}
                      stroke="#a855f7"
                      strokeWidth="0.8"
                      opacity="0.6"
                    />
                    <circle cx={x} cy={y} r="1.5" fill="#a855f7" opacity="0.8" />
                  </g>
                );
              })}
              {/* Inner rings */}
              <circle cx="40" cy="40" r="8"  stroke="#a855f7" strokeWidth="1" opacity="0.9" fill="none" />
              <circle cx="40" cy="40" r="14" stroke="#a855f7" strokeWidth="0.7" opacity="0.5" fill="none" />
              <circle cx="40" cy="40" r="20" stroke="#a855f7" strokeWidth="0.5" opacity="0.3" fill="none" />
              <circle cx="40" cy="40" r="3"  fill="#a855f7" />
            </svg>
          </div>

          {/* Scroll-reveal paragraph */}
          <p className="bio-text">
            {WORDS.map((word, i) => {
              const isRevealed = i < revealCount;
              return (
                <span
                  key={i}
                  className={`bio-word ${isRevealed ? "revealed" : ""}`}
                >
                  {word}{" "}
                </span>
              );
            })}
          </p>
        </div>
      </main>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        .about-page {
          background: #050505;
          min-height: 100vh;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }

        .about-main {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: calc(100vh - 80px);
          padding: 120px 24px 80px;
        }

        /* ── Card ── */
        .about-card {
          position: relative;
          max-width: 1100px;
          width: 100%;
          background: rgba(10, 8, 18, 0.95);
          border: 1.5px solid rgba(168, 85, 247, 0.55);
          border-radius: 20px;
          padding: 72px 64px 72px;
          text-align: center;
          box-shadow:
            0 0 60px rgba(124, 58, 237, 0.08),
            inset 0 0 40px rgba(124, 58, 237, 0.04);
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
        .about-card::before {
          top: -1px; left: -1px;
          border-width: 2px 0 0 2px;
        }
        .about-card::after {
          bottom: -1px; right: -1px;
          border-width: 0 2px 2px 0;
        }

        /* ── Mandala ── */
        .mandala-wrap {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }
        .mandala-svg {
          animation: spin-slow 18s linear infinite;
          filter: drop-shadow(0 0 8px rgba(168, 85, 247, 0.5));
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── Bio text ── */
        .bio-text {
          margin: 0;
          font-size: clamp(15px, 1.6vw, 19px);
          font-weight: 600;
          line-height: 1.85;
          letter-spacing: 0.3px;
          text-transform: capitalize;
        }

        .bio-word {
          color: rgba(255, 255, 255, 0.2);
          transition: color 0.4s ease;
          display: inline;
        }

        .bio-word.revealed {
          color: #ffffff;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .about-card {
            padding: 40px 28px 40px;
          }
          .bio-text {
            font-size: 15px;
          }
        }
        @media (max-width: 480px) {
          .about-main {
            padding: 100px 16px 60px;
          }
          .about-card {
            padding: 32px 20px 32px;
          }
        }
      `}</style>
    </div>
  );
}
