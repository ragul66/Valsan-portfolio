"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import logo from "../../../public/Black and White Minimalist Professional Initial Logo/2-removebg-preview.png";
import useInView from "../hooks/useInView";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [headRef, headIn] = useInView(0.1);
  const [bodyRef, bodyIn] = useInView(0.1);

  return (
    <footer className="footer-root">
      {/* ── Top: GET IN TOUCH ── */}
      <div className="footer-hero">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="footer-heading"
        >GET IN TOUCH</motion.h2>

        <div ref={bodyRef} className="footer-body">
          {/* Left */}
          <div className={`footer-left anim-fade-left delay-200 ${bodyIn ? "anim-in" : ""}`}>
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
          <div className={`footer-socials anim-fade-right delay-300 ${bodyIn ? "anim-in" : ""}`}>
            <div className="socials-row">
              <a
                href="https://www.linkedin.com/in/sreevalsanravikumar/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn linkedin-btn"
              >
                LinkedIn
              </a>
              <a
                href="https://dribbble.com/SreeValsan_Ravi/shots"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn dribbble-btn"
              >
                Dribbble
              </a>
            </div>
            <div className="socials-row">
              <a
                href="https://www.instagram.com/sree_valsan___/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn instagram-btn"
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
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.5px;
          text-decoration: none;
          background: transparent;
          transition: background 0.25s, border-color 0.25s, color 0.25s, box-shadow 0.25s;
          white-space: nowrap;
        }

        .social-btn.linkedin-btn {
          border: 1.5px solid #0077B5;
          color: #0077B5;
        }
        .social-btn.linkedin-btn:hover {
          background: #0077B5;
          border-color: #0077B5;
          color: #fff;
          box-shadow: 0 0 20px rgba(0, 119, 181, 0.55);
        }

        .social-btn.dribbble-btn {
          border: 1.5px solid #EA4C89;
          color: #EA4C89;
        }
        .social-btn.dribbble-btn:hover {
          background: #EA4C89;
          border-color: #EA4C89;
          color: #fff;
          box-shadow: 0 0 20px rgba(234, 76, 137, 0.55);
        }

        .social-btn.instagram-btn {
          border: 1.5px solid #FF0069;
          color: #FF0069;
        }
        .social-btn.instagram-btn:hover {
          background: #FF0069;
          border-color: #FF0069;
          color: #fff;
          box-shadow: 0 0 20px rgba(255, 0, 105, 0.55);
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
