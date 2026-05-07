"use client";
import React from "react";
import Navbar from "../components/Navbar";

const ContactSection = () => {
  const whatsappNumber = "+917558179557";

  const handleEmailClick = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:sreevalsan624@gmail.com?subject=${encodeURIComponent("Project Inquiry")}&body=${encodeURIComponent("Hi, I would like to discuss a project with you.")}`;
    window.open(mailtoLink, "_self");
  };

  const handleWhatsApp = (e) => {
    e.preventDefault();
    window.open(`https://wa.me/${whatsappNumber}?text=Hi,%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.`, "_blank");
  };

  const socials = [
    { label: "LinkedIn",  href: "https://www.linkedin.com/in/sreevalsanravikumar/" },
    { label: "Dribbble",  href: "https://dribbble.com/SreeValsan_Ravi/shots" },
    { label: "Instagram", href: "https://www.instagram.com/sree_valsan___/" },
  ];

  return (
    <>
      <Navbar />
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        .contact-page {
          min-height: 100vh;
          background: #050505;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
          padding: 100px 24px 60px;
          text-align: center;
        }

        /* Purple glow */
        .contact-glow {
          position: absolute;
          bottom: -80px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%);
          pointer-events: none;
        }
        .contact-glow-top {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124,58,237,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        /* Wavy lines bg */
        .contact-bg-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          opacity: 0.1;
          pointer-events: none;
        }

        .contact-inner {
          position: relative;
          z-index: 2;
          max-width: 800px;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          animation: contactFadeUp 0.9s cubic-bezier(0.22,1,0.36,1) both;
        }

        @keyframes contactFadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .contact-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 5px;
          color: #a855f7;
          text-transform: uppercase;
          margin: 0 0 20px;
        }

        .contact-heading {
          font-size: clamp(44px, 9vw, 110px);
          font-weight: 900;
          letter-spacing: -3px;
          line-height: 1;
          color: #fff;
          margin: 0 0 32px;
          text-transform: uppercase;
        }

        .contact-sub {
          font-size: clamp(14px, 1.8vw, 17px);
          color: rgba(255,255,255,0.55);
          line-height: 1.65;
          margin: 0 0 40px;
          max-width: 480px;
        }

        .contact-email {
          font-size: clamp(16px, 2.2vw, 22px);
          font-weight: 700;
          color: #f5f0ff;
          text-decoration: underline;
          text-underline-offset: 5px;
          text-decoration-color: rgba(168,85,247,0.4);
          transition: color 0.2s, text-decoration-color 0.2s;
          margin-bottom: 40px;
          display: block;
        }
        .contact-email:hover {
          color: #a855f7;
          text-decoration-color: #a855f7;
        }

        /* CTA buttons */
        .contact-ctas {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          justify-content: center;
          margin-bottom: 48px;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 14px 32px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          cursor: pointer;
          text-decoration: none;
          transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
          border: none;
        }
        .cta-btn:hover { transform: translateY(-3px); }

        .cta-primary {
          background: #7c3aed;
          color: #fff;
          box-shadow: 0 4px 20px rgba(124,58,237,0.35);
        }
        .cta-primary:hover {
          background: #6d28d9;
          box-shadow: 0 8px 32px rgba(124,58,237,0.5);
        }

        .cta-secondary {
          background: transparent;
          color: #fff;
          border: 1.5px solid rgba(255,255,255,0.25) !important;
        }
        .cta-secondary:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.5) !important;
        }

        /* Divider */
        .contact-divider {
          width: 100%;
          max-width: 480px;
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 0 0 32px;
        }

        /* Social row */
        .contact-socials {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .social-pill {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 10px 24px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          letter-spacing: 0.5px;
          transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
        }
        .social-pill:hover {
          background: #7c3aed;
          border-color: #7c3aed;
          color: #fff;
          transform: translateY(-2px);
        }

        @media (max-width: 480px) {
          .contact-page { padding: 90px 18px 48px; }
          .contact-heading { letter-spacing: -2px; }
          .cta-btn { padding: 12px 24px; font-size: 12px; }
        }
      `}</style>

      <div className="contact-page">
        {/* Background */}
        <svg className="contact-bg-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
          {Array.from({ length: 20 }).map((_, i) => (
            <path key={i} d={`M -100 ${80 + i * 50} Q 400 ${40 + i * 50} 700 ${80 + i * 50} T 1500 ${80 + i * 50}`} fill="none" stroke="#a855f7" strokeWidth="0.8" />
          ))}
        </svg>
        <div className="contact-glow" />
        <div className="contact-glow-top" />

        <div className="contact-inner">
          <p className="contact-label">Let&rsquo;s Work Together</p>

          <h1 className="contact-heading">Get In Touch</h1>

          <p className="contact-sub">
            Have a project in mind? I&rsquo;d love to hear about it. Send me a message and let&rsquo;s create something great together.
          </p>

          <a href="mailto:sreevalsan624@gmail.com" className="contact-email" onClick={handleEmailClick}>
            sreevalsan624@gmail.com
          </a>

          <div className="contact-ctas">
            <a href="mailto:sreevalsan624@gmail.com" className="cta-btn cta-primary" onClick={handleEmailClick}>
              ✉ Email Me
            </a>
            <a href={`https://wa.me/${whatsappNumber}`} className="cta-btn cta-secondary" onClick={handleWhatsApp}>
              💬 WhatsApp
            </a>
          </div>

          <div className="contact-divider" />

          <div className="contact-socials">
            {socials.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="social-pill">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
