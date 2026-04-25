"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import useInView from "../hooks/useInView";

import dataworkz1 from "../../../public/datawrkz/datawrkz-home.png";
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

  // 1. Horizontal constraint (no lateral swing, stays centered)
  const x = useTransform(activeFloat, () => "0%");

  // 2. Rotational flip backwards (Up and over)
  const rotateX = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff >= 0) return "0deg";
    if (diff < 0 && diff > -1) {
      // As it flies up and behind, tilt it backwards into the screen
      const rot = 180 * diff * (diff + 1); // peaks at -45deg
      return `${rot}deg`;
    }
    return "0deg";
  });

  // 3. Vertical depth cascading + upward arc
  const y = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff >= 0) {
      return `${diff * 28}px`;
    }
    if (diff < 0 && diff > -1) {
      // Move to back pile linearly, but arc heavily upwards out of view
      const finalY = (total - 1) * 28;
      const progress = -diff;
      const linearY = progress * finalY;
      // Arc going upwards: peak at -0.5 reaches approx -120%
      const arcPercent = 480 * diff * (diff + 1); // 480 * -0.25 = -120%
      return `calc(${linearY}px + ${arcPercent}%)`;
    }
    const virtualDiff = total + diff;
    return `${virtualDiff * 28}px`;
  });

  // 4. Scale reduction for depth illusion
  const scale = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff >= 0) return 1 - diff * 0.04;
    if (diff < 0 && diff > -1) {
      // Dip scale aggressively while flipping over
      const arc = -0.15 * Math.sin(Math.PI * -diff);
      const progress = -diff;
      const linearScale = 1 - progress * ((total - 1) * 0.04);
      return linearScale + arc;
    }
    const virtualDiff = total + diff;
    return 1 - virtualDiff * 0.04;
  });

  // 5. Opacity dimming towards the bottom of the deck
  const opacity = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff >= 0) return Math.max(0, 1 - diff * 0.15);
    if (diff < 0 && diff > -1) {
      const progress = -diff;
      return Math.max(0, 1 - progress * ((total - 1) * 0.15));
    }
    const virtualDiff = total + diff;
    return Math.max(0, 1 - virtualDiff * 0.15);
  });

  // 6. Dynamic Z-Index for safe 3D traversal clipping
  const zIndex = useTransform(activeFloat, (val) => {
    const diff = i - val;
    if (diff >= 0) return 100 - i;
    // VERY IMPORTANT: Card must retain its high Z-index while swinging OUT (First half of animation).
    // Once clear of the stack (-0.5), it drops Z-index immediately so it swings IN behind everything.
    if (diff >= -0.5) return 100 - i;
    if (diff >= -1) return 0;
    return 100 - (total + i);
  });

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
        willChange: "transform, opacity, z-index",
        transformOrigin: "bottom center", // Anchor rotation to bottom gives heavy satisfying deck feel
        borderRadius: "32px",
        overflow: "hidden",
        boxShadow: "0 -5px 40px rgba(0,0,0,0.6), 0 30px 60px rgba(0,0,0,0.8)",
        border: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{
        backgroundColor: project.bgColor,
        color: project.textColor,
        borderRadius: "36px",
        padding: "clamp(36px, 5vw, 75px)",
        height: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1.3fr",
        gridTemplateRows: "auto 1fr auto",
        gap: "0",
        position: "relative",
      }}>
        {/* Deep premium aesthetic background noise/grid optional here */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(circle at top right, rgba(255,255,255,0.05), transparent 60%)",
          pointerEvents: "none",
        }} />

        {/* Title */}
        <h3 style={{
          gridColumn: "1 / -1",
          fontSize: "clamp(36px, 5vw, 84px)",
          fontWeight: 900, lineHeight: 0.9,
          margin: "0 0 20px", letterSpacing: "-2px",
          position: "relative", zIndex: 2
        }}>
          {project.title}
        </h3>

        {/* Left: View + Number */}
        <div style={{
          display: "flex", flexDirection: "column",
          justifyContent: "flex-end", gap: "20px",
          paddingBottom: "10px",
          position: "relative", zIndex: 2
        }}>
          <MagneticViewBtn onClick={() => setActiveProject(project)} />
          <span style={{
            fontSize: "clamp(90px, 14vw, 200px)",
            fontWeight: 950, opacity: 30,
            lineHeight: 0.8, letterSpacing: "-8px",
            color: "#fff",
            fontFamily: "'Inter', sans-serif"
          }}>
            {project.id}
          </span>
        </div>

        {/* Right: Image Frame */}
        <div style={{
          position: "relative",
          borderRadius: "10px",
          overflow: "hidden",
          alignSelf: "stretch",
          minHeight: "400px",
          boxShadow: "0 25px 60px rgba(0,0,0,0.6)",
          zIndex: 2,
        }}>
          <Image
            src={project.slides[0].src}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
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
          className={`text-center text-xl md:text-2xl font-bold text-violet-400 mb-12 anim-fade-down ${titleIn ? "anim-in" : ""}`}
        >
          My Recent Works
        </h2>

        {/* Deck Container */}
        <div style={{
          position: "relative",
          width: "min(1480px, 96vw)",
          height: "clamp(620px, 82vh, 880px)",
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
    </div>
  );
};

export default RecentWorks;
