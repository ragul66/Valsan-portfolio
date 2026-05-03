"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import useInView from "../hooks/useInView";

import dataworkz1 from "../../../public/datawrkz/datawrkz-home2.png";
import dataworkz2 from "../../../public/datawrkz/datawrkz2.png";
import dataworkz3 from "../../../public/datawrkz/datawrkz3.png";
import dataworkz4 from "../../../public/datawrkz/datawrkz4.png";
import dataworkz5 from "../../../public/datawrkz/datawrkz5.png";

import vizibl1 from "../../../public/vizibl/vizibl1.png";
import vizibl2 from "../../../public/vizibl/vizibl2.png";
import vizibl3 from "../../../public/vizibl/vizibl3.png";
import vizibl4 from "../../../public/vizibl/vizibl4.png";

import Mediawrkz1 from "../../../public/mediawrkz/mediawrkz1.png";
import Mediawrkz2 from "../../../public/mediawrkz/mediawrkz2.png";
import Mediawrkz3 from "../../../public/mediawrkz/mediawrkz3.png";

import jove1 from "../../../public/jove/jove1.png";
import jove2 from "../../../public/jove/jove2.png";
import jove3 from "../../../public/jove/jove3.png";

import uday1 from "../../../public/uday/uday1.png";




import foodimage4 from "../../../public/myprojects/fooddeleiveryimage4.png";
import ecomimage5 from "../../../public/myprojects/ecommerceimage5.png";
// import designimage6 from "../../../public/myprojects/designimage6.png";

const projects = [
  {
    id: "01", title: "DataWrkz", category: "Web Design", bgColor: "orange", textColor: "#fff",
    slides: [
      { src: dataworkz1, link: "https://www.datawrkz.com/" },
      { src: dataworkz2, link: "https://www.datawrkz.com/multicultural-advertising-uk/" }, // Swap `teaimage1` here with your real image, e.g., teaimage2
      { src: dataworkz3, link: "https://www.datawrkz.com/search-ads/" }, // Swap this one too
      { src: dataworkz4, link: "https://www.datawrkz.com/retargeting-ads/" }, // Swap this one too
      { src: dataworkz5, link: "https://www.datawrkz.com/in/" }, // Swap this one too
    ]
  },
  {
    id: "02", title: "Vizibl", category: "App Design", bgColor: "#6366f1", textColor: "#fff",
    slides: [
      { src: vizibl1, link: "https://www.vizibl.ai/" },
      { src: vizibl2, link: "https://www.vizibl.ai/platform/" },
      { src: vizibl3, link: "https://www.vizibl.ai/capabilities/" },
      { src: vizibl4, link: "https://www.vizibl.ai/igaming-advertising/" },
    ]
  },
  {
    id: "03", title: "MediaWrkz", category: "App Design", bgColor: "#1025a2", textColor: "#fff",
    slides: [
      { src: Mediawrkz1, link: "https://www.mediawrkz.com/highr-yield/" },
      { src: Mediawrkz2, link: "https://www.mediawrkz.com/highr-sdk/" },
      { src: Mediawrkz3, link: "https://www.mediawrkz.com/" },
    ]
  },
  {
    id: "04", title: "Jove", category: "App Design", bgColor: "#1a6bbf", textColor: "#fff",
    slides: [
      { src: jove1, link: "https://coach.jove.com/pp/ailearning-lp" },
      { src: jove2, link: "https://coach.jove.com/pp/physics" },
      { src: jove3, link: "https://coach.jove.com/pp/biology" },
    ]
  },
  {
    id: "05", title: "Dr. Uday", category: "App Design", bgColor: "#615efc", textColor: "#fff",
    slides: [
      { src: uday1, link: "https://www.drudayravi.com/" },
    ]
  },
  // {
  //   id: "06", title: "Design Recreation", category: "App Design", bgColor: "#10b981", textColor: "#fff",
  //   slides: [
  //     { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
  //     { src: designimage6, link: "#" },
  //     { src: designimage6, link: "#" },
  //   ]
  // },
];

// Magnetic View Button
const MagneticViewBtn = ({ onClick }) => {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = btnRef.current.getBoundingClientRect();

    // Calculate distance from center for a "magnetic" pull
    const x = (clientX - (left + width / 2)) * 0.35;
    const y = (clientY - (top + height / 2)) * 0.35;

    setPos({ x, y });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        // Layout & Sizing
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px 28px",
        borderRadius: "12px",
        width: "fit-content",
        cursor: "pointer",

        // Typography
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: "2.5px",
        textTransform: "uppercase",
        color: "#fff",

        // Visuals: Glassmorphism & Borders
        background: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",

        // Animation & Movement
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
        transition: "transform 0.15s cubic-bezier(0.23, 1, 0.32, 1), background 0.3s, box-shadow 0.3s, color 0.3s",

        // The "Fancy" Glow Shadow (Default)
        boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
      }}
      // Interactive Hover States
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#fff";
        e.currentTarget.style.color = "#000";
        e.currentTarget.style.boxShadow = "0 0 25px 5px rgba(255, 255, 255, 0.4)";
      }}
    >
      <Eye size={16} strokeWidth={2.5} />
      <span>View</span>
    </button>
  );
};

const ProjectCard = ({ project, i, total, activeFloat, setActiveProject }) => {
  // Use pure reactive functions to compute the Deck Shuffle mechanics

  // 1. Horizontal constraint
  const x = useTransform(activeFloat, () => "0%");

  // 2. No rotation for the clean stack effect
  const rotateX = useTransform(activeFloat, () => "0deg");

  // 3. Vertical sliding from bottom, and staying slightly up when pushed back
  const y = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff > 0) {
      // Coming from bottom
      return `${diff * 120}%`;
    }
    // Pushed back: slight move upwards
    return `calc(${diff * 40}px)`;
  });

  // 4. Scale down when pushed back
  const scale = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff > 0) return 1;
    // Shrink smoothly
    return 1 + diff * 0.04;
  });

  // 5. Opacity dimming when pushed back
  const opacity = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff > 0) return 1;
    // Fade out slightly to create depth shadow
    return 1 + diff * 0.4;
  });

  // 6. Z-Index: newer cards render on top
  const zIndex = i;

  return (
    <motion.div
      style={{
        position: "absolute",
        inset: 0,
        x,
        y,
        scale,
        rotateX,
        opacity,
        zIndex,
        willChange: "transform, opacity",
        transformOrigin: "top center", // Anchor rotation/scale to top gives satisfying stack feel
        borderRadius: "32px",
        overflow: "hidden",
        boxShadow: "0 -20px 50px rgba(0,0,0,0.5), 0 30px 60px rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="project-card-inner" style={{
        backgroundColor: project.bgColor,
        color: project.textColor,
      }}>
        {/* Deep premium aesthetic background noise/grid optional here */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Title */}
        <h3 className="project-card-title">
          {project.title}
        </h3>

        {/* Left: View + Number */}
        <div className="project-card-left">
          <MagneticViewBtn onClick={() => setActiveProject(project)} />
          <span className="project-card-number">
            {project.id}
          </span>
        </div>

        {/* Right: Image Frame */}
        <div className="project-card-right">
          <Image
            src={project.slides[0].src}
            alt={project.title}
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
            placeholder="blur"
            sizes="(max-width: 768px) 90vw, 45vw"
            priority={i < 2}
          />
        </div>

        {/* Footer */}
        {/* <div style={{
          gridColumn: "1 / -1",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: "20px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          marginTop: "20px",
          position: "relative", zIndex: 2
        }}>
          <span style={{ fontSize: "14px", fontWeight: 800, letterSpacing: "2px", textTransform: "uppercase" }}>
            {project.category}
          </span>
          <span style={{ fontSize: "14px", opacity: 0.5, fontWeight: 700 }}>
            {project.id} / {String(total).padStart(2, "0")}
          </span>
        </div> */}
      </div>
    </motion.div>
  );
};

const RecentWorks = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [titleRef, titleIn] = useInView();
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  // Map total continuous scroll exactly to 0 -> total-1 float space
  const activeFloat = useTransform(scrollYProgress, [0, 1], [0, projects.length - 1]);

  return (
    <div
      ref={sectionRef}
      style={{
        background: "#030303",
        // Total scroll height matches the total number of items
        height: `calc(${projects.length} * 100vh)`,
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        padding: "0 24px",
      }}>
        {/* Label */}
        <h2
          ref={titleRef}
          className={`text-center anim-fade-down ${titleIn ? "anim-in" : ""}`}
          style={{
            fontSize: "clamp(22px, 4vw, 36px)",
            fontWeight: 800,
            color: "#a855f7",
            letterSpacing: "2px",
            textTransform: "uppercase",
            marginBottom: "clamp(20px, 3vh, 48px)",
          }}
        >
          My Recent Works
        </h2>

        {/* Deck Container */}
        <div style={{
          position: "relative",
          width: "min(1480px, 96vw)",
          height: "clamp(520px, 82vh, 880px)",
          perspective: "1800px",
        }}>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              i={i}
              total={projects.length}
              activeFloat={activeFloat}
              setActiveProject={setActiveProject}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
      <style>{`
        .project-card-inner {
          border-radius: 36px;
          padding: clamp(36px, 5vw, 75px);
          height: 100%;
          display: grid;
          grid-template-columns: 1fr 1.3fr;
          grid-template-rows: auto 1fr auto;
          gap: 0;
          position: relative;
        }
        .project-card-title {
          grid-column: 1 / -1;
          font-size: clamp(36px, 5vw, 84px);
          font-weight: 900;
          line-height: 0.9;
          margin: 0 0 20px;
          letter-spacing: -2px;
          position: relative;
          z-index: 2;
        }
        .project-card-left {
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          gap: 20px;
          padding-bottom: 10px;
          position: relative;
          z-index: 2;
        }
        .project-card-number {
          font-size: clamp(90px, 14vw, 200px);
          font-weight: 950;
          opacity: 0.7;
          line-height: 0.8;
          letter-spacing: -8px;
          color: #fff;
          font-family: 'Inter', sans-serif;
        }
        .project-card-right {
          position: relative;
          border-radius: 10px;
          overflow: hidden;
          align-self: stretch;
          min-height: 400px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.6);
          z-index: 2;
        }

        @media (max-width: 1024px) {
          .project-card-inner {
            padding: clamp(24px, 4vw, 48px);
          }
          .project-card-title {
            font-size: clamp(32px, 5vw, 60px);
          }
        }

        @media (max-width: 768px) {
          .project-card-inner {
            grid-template-columns: 1fr;
            grid-template-rows: auto 1fr auto;
            padding: 24px 20px 20px;
            gap: 16px;
            height: 100%;
          }
          .project-card-title {
            font-size: clamp(28px, 8vw, 42px);
            margin-bottom: 0;
            letter-spacing: -1px;
            grid-row: 1;
          }
          .project-card-right {
            grid-row: 2;
            min-height: 0;
            flex: 1;
            border-radius: 16px;
            /* Fill remaining space */
            height: 100%;
            max-height: none;
          }
          .project-card-left {
            grid-row: 3;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 0;
            gap: 12px;
          }
          .project-card-number {
            font-size: clamp(44px, 11vw, 64px);
            line-height: 1;
            letter-spacing: -3px;
          }
        }

        @media (max-width: 480px) {
          .project-card-inner {
            padding: 18px 16px 16px;
            gap: 12px;
          }
          .project-card-title {
            font-size: clamp(22px, 7vw, 34px);
          }
          .project-card-number {
            font-size: clamp(36px, 10vw, 52px);
          }
        }
      `}</style>
    </div>
  );
};

export default RecentWorks;
