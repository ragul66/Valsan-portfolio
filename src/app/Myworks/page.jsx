"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import useInView from "../hooks/useInView";

import teaimage1     from "../../../public/myprojects/teaimage1.png";
import musicimage2   from "../../../public/myprojects/musicimage2.png";
import fitnessimage3 from "../../../public/myprojects/fitnessimage3.png";
import foodimage4    from "../../../public/myprojects/fooddeleiveryimage4.png";
import ecomimage5    from "../../../public/myprojects/ecommerceimage5.png";
import designimage6  from "../../../public/myprojects/designimage6.png";

const projects = [
  { id: "01", title: "Organic Tea Store",  category: "Web Design", bgColor: "#ff4d4d", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: teaimage1,     link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" })) },
  { id: "02", title: "Music Streaming",    category: "App Design", bgColor: "#2a2a2a", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: musicimage2,   link: "https://dribbble.com/shots/24079544-Music-Streaming-App" })) },
  { id: "03", title: "Fitness App",        category: "App Design", bgColor: "#a855f7", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" })) },
  { id: "04", title: "Food Delivery",      category: "App Design", bgColor: "#f97316", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: foodimage4,    link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" })) },
  { id: "05", title: "Ecommerce Mobile",   category: "App Design", bgColor: "#1a1a1a", textColor: "#ffffff", slides: Array(8).fill(null).map(() => ({ src: ecomimage5,    link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" })) },
  { id: "06", title: "Design Recreation",  category: "App Design", bgColor: "#22c55e", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: designimage6,  link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" })) },
];

// Magnetic View Button
const MagneticViewBtn = ({ onClick, textColor }) => {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) * 0.35;
    const dy = (e.clientY - cy) * 0.35;
    setPos({ x: dx, y: dy });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 22px",
        borderRadius: "10px",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color: textColor,
        cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.12)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.15s ease, box-shadow 0.2s ease, background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.22)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)";
      }}
    >
      <Eye size={14} />
      VIEW
    </button>
  );
};

const RecentWorks = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [titleRef, titleIn] = useInView();
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const cardH = window.innerHeight;
      const totalScroll = cardH * projects.length;
      const clamped = Math.max(0, Math.min(totalScroll - 1, scrolled));
      const rawIndex = clamped / cardH;
      const idx = Math.min(Math.floor(rawIndex), projects.length - 1);
      const prog = rawIndex - Math.floor(rawIndex);
      setActiveIndex(idx);
      setProgress(prog);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={sectionRef}
      style={{
        background: "#050505",
        height: `${projects.length * 100}vh`,
        position: "relative",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Sticky viewport */}
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
        <p
          ref={titleRef}
          className={`anim-fade-down ${titleIn ? "anim-in" : ""}`}
          style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "5px",
            color: "#a855f7", textTransform: "uppercase",
            margin: "0 0 24px", zIndex: 10, position: "relative",
          }}
        >
          Recent Works
        </p>

        {/* Card area */}
        <div style={{
          position: "relative",
          width: "min(1300px, 94vw)",
          height: "clamp(420px, 65vh, 580px)",
        }}>
          {projects.map((project, i) => {
            const isDark = true; // all cards now have dark-friendly text
            const diff = i - activeIndex;

            let opacity = 0;
            let scale = 0.9;
            let translateY = 0;
            let zIndex = 0;
            let pointerEvents = "none";
            let blur = 0;

            if (diff === 0) {
              // Active — fades + shrinks out
              const t = progress;
              opacity = 1 - t * 0.9;
              scale = 1 - t * 0.05;
              translateY = -t * 24;
              blur = t * 4;
              zIndex = 3;
              pointerEvents = "auto";
            } else if (diff === 1) {
              // Next — rises in
              const t = progress;
              opacity = t;
              scale = 0.94 + t * 0.06;
              translateY = (1 - t) * 36;
              zIndex = 2;
              pointerEvents = t > 0.6 ? "auto" : "none";
            } else {
              // All others fully hidden
              opacity = 0;
              zIndex = 0;
            }

            return (
              <div
                key={project.id}
                style={{
                  position: "absolute",
                  inset: 0,
                  opacity,
                  transform: `scale(${scale}) translateY(${translateY}px)`,
                  filter: blur > 0 ? `blur(${blur}px)` : "none",
                  zIndex,
                  pointerEvents,
                  willChange: "transform, opacity, filter",
                  borderRadius: "20px",
                  overflow: "hidden",
                }}
              >
                <div style={{
                  backgroundColor: project.bgColor,
                  color: project.textColor,
                  borderRadius: "20px",
                  padding: "clamp(28px, 3.5vw, 48px)",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "auto 1fr auto",
                  gap: "0",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Title — spans full width */}
                  <h3 style={{
                    gridColumn: "1 / -1",
                    fontSize: "clamp(28px, 4.5vw, 64px)",
                    fontWeight: 800, lineHeight: 1,
                    margin: "0 0 20px", letterSpacing: "-1.5px",
                  }}>
                    {project.title}
                  </h3>

                  {/* Left: View + Number */}
                  <div style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "flex-end", gap: "12px",
                    paddingBottom: "8px",
                  }}>
                    <MagneticViewBtn
                      onClick={() => setActiveProject(project)}
                      textColor={project.textColor}
                    />
                    <span style={{
                      fontSize: "clamp(80px, 13vw, 160px)",
                      fontWeight: 800, opacity: 0.9,
                      lineHeight: 1, letterSpacing: "-5px",
                      display: "block",
                    }}>
                      {project.id}
                    </span>
                  </div>

                  {/* Right: Image — full height, no aspect ratio box */}
                  <div style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    alignSelf: "stretch",
                    minHeight: "200px",
                    transition: "transform 0.4s ease",
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.03)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  >
                    <Image
                      src={project.slides[0].src}
                      alt={project.title}
                      fill
                      style={{ objectFit: "cover" }}
                      placeholder="blur"
                      sizes="(max-width: 768px) 90vw, 45vw"
                    />
                  </div>

                  {/* Footer — spans full width */}
                  <div style={{
                    gridColumn: "1 / -1",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    paddingTop: "16px",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    marginTop: "16px",
                  }}>
                    <span style={{ fontSize: "14px", fontWeight: 700, letterSpacing: "1px" }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: "13px", opacity: 0.45, fontWeight: 600 }}>
                      {project.id} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
};

export default RecentWorks;
