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
  { id: "01", title: "Organic Tea Store",  category: "Web Design", bgColor: "#e63946", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: teaimage1,     link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" })) },
  { id: "02", title: "Music Streaming",    category: "App Design", bgColor: "#1d1d2e", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: musicimage2,   link: "https://dribbble.com/shots/24079544-Music-Streaming-App" })) },
  { id: "03", title: "Fitness App",        category: "App Design", bgColor: "#7c3aed", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" })) },
  { id: "04", title: "Food Delivery",      category: "App Design", bgColor: "#ea580c", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: foodimage4,    link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" })) },
  { id: "05", title: "Ecommerce Mobile",   category: "App Design", bgColor: "#111827", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: ecomimage5,    link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" })) },
  { id: "06", title: "Design Recreation",  category: "App Design", bgColor: "#16a34a", textColor: "#fff",    slides: Array(8).fill(null).map(() => ({ src: designimage6,  link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" })) },
];

// Magnetic View Button
const MagneticViewBtn = ({ onClick }) => {
  const btnRef = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3;
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3;
    setPos({ x: dx, y: dy });
  };

  return (
    <button
      ref={btnRef}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        padding: "8px 16px", borderRadius: "8px",
        fontSize: "11px", fontWeight: 700, letterSpacing: "2px",
        textTransform: "uppercase", color: "#fff", cursor: "pointer",
        border: "1px solid rgba(255,255,255,0.3)",
        background: "rgba(255,255,255,0.1)",
        backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.2)",
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: "transform 0.12s ease, background 0.2s ease",
        width: "fit-content",
        alignSelf: "flex-start",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "rgba(255,255,255,0.22)";
      }}
    >
      <Eye size={13} /> VIEW
    </button>
  );
};

const RecentWorks = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [titleRef, titleIn] = useInView();
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  // scrollProgress: 0 = start, N = Nth card fully shown
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const cardH = window.innerHeight * 0.85;
      const raw = Math.max(0, scrolled / cardH);
      setScrollProgress(Math.min(raw, projects.length - 1 + 0.999));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeIndex = Math.floor(scrollProgress);
  const progress = scrollProgress - activeIndex; // 0–1 within current transition

  return (
    <div
      ref={sectionRef}
      style={{
        background: "#050505",
        // Each card gets 85vh of scroll room
        height: `calc(${projects.length} * 85vh + 100vh)`,
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
        <p
          ref={titleRef}
          className={`anim-fade-down ${titleIn ? "anim-in" : ""}`}
          style={{
            fontSize: "11px", fontWeight: 700, letterSpacing: "5px",
            color: "#a855f7", textTransform: "uppercase",
            margin: "0 0 20px", zIndex: 10,
          }}
        >
          Recent Works
        </p>

        {/* Card deck */}
        <div style={{
          position: "relative",
          width: "min(1280px, 92vw)",
          height: "clamp(440px, 62vh, 580px)",
          perspective: "1200px",
        }}>
          {projects.map((project, i) => {
            const diff = i - activeIndex;

            // Only render cards that are visible: current, next, and 1 behind
            if (diff < -1 || diff > 2) return null;

            let transform = "";
            let zIndex = projects.length - Math.abs(diff);
            let pointerEvents = "none";
            let boxShadow = "0 24px 60px rgba(0,0,0,0.5)";

            if (diff === 0) {
              // TOP card — as progress increases, it scales down and pushes back
              const t = progress;
              const scale = 1 - t * 0.06;
              const tz = -t * 80; // push back in Z
              const ty = -t * 20; // slight upward drift
              transform = `scale(${scale}) translateZ(${tz}px) translateY(${ty}px)`;
              zIndex = 10;
              pointerEvents = "auto";
              boxShadow = `0 ${24 + t * 20}px ${60 + t * 40}px rgba(0,0,0,${0.5 + t * 0.2})`;
            } else if (diff === 1) {
              // NEXT card — starts slightly scaled down behind, comes forward
              const t = progress;
              const scale = 0.93 + t * 0.07;
              const tz = -60 + t * 60;
              const ty = 18 - t * 18;
              transform = `scale(${scale}) translateZ(${tz}px) translateY(${ty}px)`;
              zIndex = 9;
              pointerEvents = t > 0.8 ? "auto" : "none";
            } else if (diff === 2) {
              // Card after next — peeking behind
              const t = progress;
              const scale = 0.87 + t * 0.06;
              const tz = -120 + t * 60;
              const ty = 36 - t * 18;
              transform = `scale(${scale}) translateZ(${tz}px) translateY(${ty}px)`;
              zIndex = 8;
            } else if (diff === -1) {
              // Previous card — already gone behind, hidden
              transform = `scale(0.82) translateZ(-160px) translateY(50px)`;
              zIndex = 1;
            }

            return (
              <div
                key={project.id}
                style={{
                  position: "absolute", inset: 0,
                  transform,
                  zIndex,
                  pointerEvents,
                  willChange: "transform",
                  transformStyle: "preserve-3d",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow,
                }}
              >
                <div style={{
                  backgroundColor: project.bgColor,
                  color: project.textColor,
                  borderRadius: "20px",
                  padding: "clamp(24px, 3vw, 44px)",
                  height: "100%",
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gridTemplateRows: "auto 1fr auto",
                  gap: "0",
                  position: "relative",
                  overflow: "hidden",
                }}>
                  {/* Title */}
                  <h3 style={{
                    gridColumn: "1 / -1",
                    fontSize: "clamp(26px, 4vw, 60px)",
                    fontWeight: 800, lineHeight: 1,
                    margin: "0 0 16px", letterSpacing: "-1.5px",
                  }}>
                    {project.title}
                  </h3>

                  {/* Left: View + Number */}
                  <div style={{
                    display: "flex", flexDirection: "column",
                    justifyContent: "flex-end", gap: "10px",
                    paddingBottom: "4px",
                  }}>
                    <MagneticViewBtn onClick={() => setActiveProject(project)} />
                    <span style={{
                      fontSize: "clamp(72px, 11vw, 148px)",
                      fontWeight: 800, opacity: 0.9,
                      lineHeight: 1, letterSpacing: "-5px",
                    }}>
                      {project.id}
                    </span>
                  </div>

                  {/* Right: Image */}
                  <div style={{
                    position: "relative",
                    borderRadius: "12px",
                    overflow: "hidden",
                    alignSelf: "stretch",
                    minHeight: "180px",
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

                  {/* Footer */}
                  <div style={{
                    gridColumn: "1 / -1",
                    display: "flex", justifyContent: "space-between", alignItems: "center",
                    paddingTop: "14px",
                    borderTop: "1px solid rgba(255,255,255,0.15)",
                    marginTop: "14px",
                  }}>
                    <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "1px" }}>
                      {project.category}
                    </span>
                    <span style={{ fontSize: "12px", opacity: 0.4, fontWeight: 600 }}>
                      {project.id} / {String(projects.length).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {activeProject && (
        <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
      )}
    </div>
  );
};

export default RecentWorks;
