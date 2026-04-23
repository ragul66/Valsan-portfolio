"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";
import ProjectModal from "../components/ProjectModal";
import useInView from "../hooks/useInView";

// Images
import teaimage1    from "../../../public/myprojects/teaimage1.png";
import musicimage2  from "../../../public/myprojects/musicimage2.png";
import fitnessimage3 from "../../../public/myprojects/fitnessimage3.png";
import foodimage4   from "../../../public/myprojects/fooddeleiveryimage4.png";
import ecomimage5   from "../../../public/myprojects/ecommerceimage5.png";
import designimage6 from "../../../public/myprojects/designimage6.png";

// Each project has 8 slides. Replace the dummy entries with real images when ready.
// Each slide: { src: <image>, link: "<dribbble or any url>" }
const projects = [
  {
    id: "01",
    title: "Organic Tea Store",
    category: "Web Design",
    bgColor: "#ff4d4d",
    textColor: "#fff",
    slides: [
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
      { src: teaimage1, link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store" },
    ],
  },
  {
    id: "02",
    title: "Music Streaming",
    category: "App Design",
    bgColor: "#f3f3f3",
    textColor: "#1a1a1a",
    slides: [
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
      { src: musicimage2, link: "https://dribbble.com/shots/24079544-Music-Streaming-App" },
    ],
  },
  {
    id: "03",
    title: "Fitness App",
    category: "App Design",
    bgColor: "#a855f7",
    textColor: "#fff",
    slides: [
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
      { src: fitnessimage3, link: "https://dribbble.com/shots/23999535-Fitness-Application-Design" },
    ],
  },
  {
    id: "04",
    title: "Food Delivery",
    category: "App Design",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
    slides: [
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
      { src: foodimage4, link: "https://dribbble.com/shots/23982882-Food-Delivery-Application" },
    ],
  },
  {
    id: "05",
    title: "Ecommerce Mobile",
    category: "App Design",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
    slides: [
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
      { src: ecomimage5, link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices" },
    ],
  },
  {
    id: "06",
    title: "Design Recreation",
    category: "App Design",
    bgColor: "#22c55e",
    textColor: "#fff",
    slides: [
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
      { src: designimage6, link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application" },
    ],
  },
];

// How far each card is offset when stacked
const STACK_OFFSET = 24;
// Sticky top — navbar height + a little breathing room
const STICKY_TOP = 80;

const WorkCard = ({ project, index, total, onView }) => {
  const isDark = project.textColor === "#fff" || project.textColor === "#ffffff";
  const borderColor = isDark ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.1)";

  return (
    <div
      style={{
        position: "sticky",
        top: `${STICKY_TOP + index * STACK_OFFSET}px`,
        zIndex: index + 1,
        paddingBottom: "32px",
      }}
    >
      <div
        style={{
          backgroundColor: project.bgColor,
          color: project.textColor,
          borderRadius: "16px",
          padding: "clamp(24px, 4vw, 44px)",
          minHeight: "520px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          boxShadow: "0 -8px 40px rgba(0,0,0,0.35)",
          transition: "transform 0.4s ease",
        }}
      >
        {/* Top row: title only */}
        <div>
          <h3
            style={{
              fontSize: "clamp(32px, 6vw, 72px)",
              fontWeight: 800,
              lineHeight: 1,
              margin: 0,
              letterSpacing: "-1.5px",
            }}
          >
            {project.title}
          </h3>
        </div>

        {/* Middle: big number (with View above it) + image */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flex: 1,
            margin: "28px 0",
            gap: "16px",
          }}
        >
          {/* Number column with View button above */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "10px" }}>
            {/* VIEW button — sits just above the number */}
            <button
              onClick={() => onView(project)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "9px 18px",
                borderRadius: "8px",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
                background: isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)",
                border: `1px solid ${borderColor}`,
                color: project.textColor,
                cursor: "pointer",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.25)" : "rgba(0,0,0,0.18)";
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.1)";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <Eye size={14} />
              VIEW
            </button>

            <span
              style={{
                fontSize: "clamp(72px, 14vw, 160px)",
                fontWeight: 800,
                opacity: 0.88,
                lineHeight: 1,
                letterSpacing: "-4px",
              }}
            >
              {project.id}
            </span>
          </div>

          <div
            style={{
              width: "42%",
              aspectRatio: "4/3",
              borderRadius: "10px",
              overflow: "hidden",
              background: "#000",
              flexShrink: 0,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
          >
            <Image
              src={project.slides[0].src}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              placeholder="blur"
            />
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "18px",
            borderTop: `1px solid ${borderColor}`,
          }}
        >
          <span style={{ fontSize: "15px", fontWeight: 700, letterSpacing: "1px" }}>
            {project.category}
          </span>
          <span style={{ fontSize: "13px", opacity: 0.5, fontWeight: 600 }}>
            {project.id} / {String(total).padStart(2, "0")}
          </span>
        </div>
      </div>
    </div>
  );
};

const RecentWorks = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [titleRef, titleIn] = useInView();

  return (
    <div
      style={{
        background: "#050505",
        padding: "100px 0 160px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "80px" }}>
          <p
            ref={titleRef}
            className={`anim-fade-down ${titleIn ? "anim-in" : ""}`}
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "5px",
              color: "#a855f7",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Recent Works
          </p>
        </div>

        {/* Stacked cards */}
        <div>
          {projects.map((project, index) => (
            <WorkCard
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              onView={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </div>
  );
};

export default RecentWorks;
