"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import designerIllustration from "../../../public/designer_illustration.png";
import useInView from "../hooks/useInView";

const experience = [
  {
    role: "Visual Designer",
    company: "Identiti Design Pvt. Ltd.",
    date: "Feb 2025 - Present",
  },
  {
    role: "Business Operations Executive",
    company: "FINSAMUDRA Pvt. Ltd.",
    date: "Jul 2024 - Feb 2025",
  },
];

const education = [
  {
    role: "B.TECH – Computer Science & Business Systems",
    company: "Sethu Institute Of Technology",
    date: "2020 - 2024",
  },
];

const skills = [
  { role: "App Design", company: "Conceptualized fitness and utility apps focused on simplicity.", date: "UI/UX" },
  { role: "UI/UX Design", company: "Designed e-commerce and SaaS interfaces with intuitive navigation.", date: "Design" },
  { role: "Website Design", company: "Built full responsive websites using HTML, CSS and modern tools.", date: "Web" },
  { role: "Branding Design", company: "Created cohesive brand identities: logo, palette, typography.", date: "Brand" },
];

const TABS = [
  {
    id: "experience",
    label: "My Experience",
    heading: "My Experience",
    description:
      "Designed Websites, Social Media Visuals, And A Mobile App, Focusing On UI/UX For Web Apps With Tools Like Figma, Photoshop, InDesign, And After Effects.",
    items: experience,
  },
  {
    id: "education",
    label: "My Educations",
    heading: "My Educations",
    description:
      "Earned a Bachelor's degree in Computer Science & Business Systems, building a strong foundation in technology, design thinking, and digital product development.",
    items: education,
  },
  {
    id: "skills",
    label: "My Skills",
    heading: "My Skills",
    description:
      "Skilled across the full design spectrum — from mobile apps and web interfaces to brand identities and motion graphics, always putting the user first.",
    items: skills,
  },
];

const EducationExperience = () => {
  const [activeTab, setActiveTab] = useState("experience");
  const current = TABS.find((t) => t.id === activeTab);
  const [headRef, headIn] = useInView();
  const [cardRef, cardIn] = useInView(0.1);

  return (
    <section className="edu-section">
      {/* Glow */}
      <div className="edu-glow" />

      <div className="edu-container">
        {/* ── Card ── */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className={`edu-card anim-scale ${cardIn ? "anim-in" : ""}`}
          ref={cardRef}
        >
          {/* Tab Bar */}
          <div className="tab-bar">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "tab-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Card Body */}
          <div className="card-body">
            {/* Left — Illustration */}
            <div className="illus-wrap">
              <Image
                src={designerIllustration}
                alt="Designer at work"
                width={420}
                height={420}
                className="illus-img"
                priority
              />
            </div>

            {/* Right — Content */}
            <div className="content-wrap" key={activeTab}>
              <h2 className="content-heading">{current.heading}</h2>
              <p className="content-desc">{current.description}</p>

              <div className="items-list">
                {current.items.map((item, i) => (
                  <div key={i}>
                    {i > 0 && <div className="item-divider" />}
                    <div className="item-row">
                      <div className="item-left">
                        <span className="item-role">{item.role}</span>
                        <span className="item-company">{item.company}</span>
                      </div>
                      {/* <span className="item-date">{item.date}</span> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

        .edu-section {
          background: #050505;
          padding: 80px 24px;
          position: relative;
          overflow: hidden;
          font-family: 'Inter', 'Helvetica Neue', sans-serif;
        }

        .edu-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .edu-container {
          max-width: 1100px;
          margin: 0 auto;
          position: relative;
          z-index: 5;
        }

        /* ── Card ── */
        .edu-card {
          border: 1.5px solid #a855f7;
          border-radius: 20px;
          overflow: hidden;
          background: #0a050f;
        }

        /* ── Tab Bar ── */
        .tab-bar {
          display: flex;
          border-bottom: 1.5px solid #a855f7;
        }

        .tab-btn {
          flex: 1;
          padding: 18px 24px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          border: none;
          border-right: 1px solid rgba(168,85,247,0.25);
          background: #0a050f;
          color: rgba(255,255,255,0.55);
          transition: background 0.25s, color 0.25s;
          letter-spacing: 0.3px;
        }

        .tab-btn:last-child { border-right: none; }

        .tab-active {
          background: #a855f7 !important;
          color: #ffffff !important;
          box-shadow: 0 4px 24px rgba(168,85,247,0.35);
        }

        .tab-btn:not(.tab-active):hover {
          background: rgba(168,85,247,0.08);
          color: #ffffff;
        }

        /* ── Card Body ── */
        .card-body {
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          gap: 0;
          min-height: 400px;
        }

        /* ── Illustration ── */
        .illus-wrap {
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding: 32px 24px 0;
          border-right: 1px solid rgba(168,85,247,0.2);
          background: rgba(168,85,247,0.03);
        }

        .illus-img {
          object-fit: contain;
          width: 100% !important;
          height: auto !important;
          max-height: 380px;
          filter: drop-shadow(0 0 24px rgba(124,58,237,0.2));
        }

        /* ── Content ── */
        .content-wrap {
          padding: 44px 44px 44px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          animation: fadeSlide 0.35s ease both;
        }

        @keyframes fadeSlide {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }

        .content-heading {
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 900;
          color: #ffffff;
          margin: 0;
          letter-spacing: -0.5px;
        }

        .content-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          line-height: 1.75;
          margin: 0;
        }

        /* ── Items ── */
        .items-list {
          display: flex;
          flex-direction: column;
          margin-top: 4px;
        }

        .item-divider {
          height: 1px;
          background: rgba(255,255,255,0.08);
          margin: 16px 0;
        }

        .item-row {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
        }

        .item-left {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .item-role {
          font-size: 16px;
          font-weight: 700;
          color: #ffffff;
        }

        .item-company {
          font-size: 13px;
          font-weight: 600;
          color: rgba(255,255,255,0.5);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .item-date {
          font-size: 13px;
          font-weight: 700;
          color: #a855f7;
          white-space: nowrap;
          margin-top: 2px;
        }

        /* ── Responsive ── */
        @media (max-width: 768px) {
          .card-body {
            grid-template-columns: 1fr;
          }
          .illus-wrap {
            border-right: none;
            border-bottom: 1px solid rgba(168,85,247,0.2);
            padding: 16px 16px 0;
            max-height: 280px;
            overflow: visible;
            justify-content: center;
          }
          .illus-img {
            max-height: 260px;
            width: auto !important;
            object-fit: contain;
            object-position: center bottom;
          }
          .content-wrap {
            padding: 28px 24px;
          }
          .tab-btn {
            font-size: 13px;
            padding: 14px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default EducationExperience;
