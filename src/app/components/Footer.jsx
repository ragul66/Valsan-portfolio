"use client";
import React from "react";
import Image from "next/image";
import logo from "../../../public/Black and White Minimalist Professional Initial Logo/2-removebg-preview.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-root">
      {/* ── Top: GET IN TOUCH ── */}
      <div className="footer-hero">
        <h2 className="footer-heading">GET IN TOUCH</h2>

        <div className="footer-body">
          {/* Left */}
          <div className="footer-left">
            <p className="footer-intro">
              Hello I&rsquo;m SreeValsan, Visual &amp; UI UX<br />
              Designer Based In Bangalore
            </p>
            <a
              href="mailto:sreevalsan624@gmail.com"
              className="footer-email"
            >
              sreevalsan624@gmail.com
            </a>
          </div>

          {/* Right – Social Buttons */}
          <div className="footer-socials">
            <div className="socials-row">
              <a
                href="https://www.linkedin.com/in/sreevalsanravikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/SreeValsan_Ravi/shots"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                Dribbble
              </a>
            </div>
            <div className="socials-row">
              <a
                href="https://www.instagram.com/sree_valsan___/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="footer-divider" />

      {/* ── Bottom bar ── */}
      <div className="footer-bottom">
        <p className="footer-copy">
          {currentYear} &copy; With Love By Sreevalsan Ravikumar.<br />
          All Rights Reserved.
        </p>
        <div className="footer-logo">
          <Image src={logo} alt="SV Logo" width={60} height={60} />
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        .footer-root {
          background: #0a0a0a;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
          color: #f5f0ff;
        }

        /* ── Hero area ── */
        .footer-hero {
          padding: 60px 60px 48px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-heading {
          font-size: clamp(52px, 10vw, 130px);
          font-weight: 900;
          letter-spacing: -2px;
          line-height: 1;
          color: #f5f0ff;
          margin: 0 0 56px;
          text-transform: uppercase;
        }

        /* Two-column layout */
        .footer-body {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 48px;
          flex-wrap: wrap;
        }

        /* Left */
        .footer-left {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .footer-intro {
          font-size: 17px;
          font-weight: 700;
          color: #f5f0ff;
          line-height: 1.55;
          margin: 0;
        }

        .footer-email {
          font-size: 16px;
          font-weight: 600;
          color: #f5f0ff;
          text-decoration: underline;
          text-underline-offset: 4px;
          transition: color 0.2s;
        }
        .footer-email:hover { color: #a855f7; }

        /* Right – social buttons */
        .footer-socials {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .socials-row {
          display: flex;
          gap: 14px;
        }

        .social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 14px 36px;
          border: 1.5px solid rgba(245,240,255,0.55);
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          color: #f5f0ff;
          letter-spacing: 0.5px;
          text-decoration: none;
          background: transparent;
          transition: background 0.25s, border-color 0.25s, color 0.25s;
          white-space: nowrap;
        }

        .social-btn:hover {
          background: #a855f7;
          border-color: #a855f7;
          color: #fff;
        }

        /* ── Divider ── */
        .footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.12);
          margin: 0 60px;
        }

        /* ── Bottom bar ── */
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 60px;
          max-width: 1280px;
          margin: 0 auto;
        }

        .footer-copy {
          font-size: 12px;
          color: rgba(245,240,255,0.5);
          line-height: 1.7;
          margin: 0;
        }

        .footer-logo {
          opacity: 0.8;
          filter: invert(1) brightness(1.5);
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .footer-hero {
            padding: 48px 24px 36px;
          }
          .footer-body {
            flex-direction: column;
            gap: 36px;
          }
          .footer-divider {
            margin: 0 24px;
          }
          .footer-bottom {
            padding: 18px 24px;
          }
          .footer-heading {
            margin-bottom: 36px;
          }
        }

        @media (max-width: 480px) {
          .socials-row {
            flex-wrap: wrap;
          }
          .social-btn {
            padding: 12px 24px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
