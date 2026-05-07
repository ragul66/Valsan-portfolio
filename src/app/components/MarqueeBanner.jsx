"use client";
import React from "react";
import { motion } from "framer-motion";

const ITEMS = [
  "WEB DESIGN",
  "UI/UX DESIGN",
  "APP DESIGN",
  "BRANDING DESIGN",
  "MOTION DESIGN",
  "VISUAL DESIGN",
];

export default function MarqueeBanner({ rotate = -4 }) {
  const repeated = [...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS];

  return (
    <>
      {/*
        Outer wrapper: dark background, fixed height — clips the ribbon.
        The ribbon itself is rotated inside, so dark space shows above/below.
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          width: "100%",
          overflow: "hidden",
          height: "160px",
          background: "#050505",    /* matches dark page background */
          position: "relative",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* Rotated ribbon strip */}
        <div
          style={{
            position: "absolute",
            left: "-30%",
            right: "-30%",
            top: "50%",
            transform: `translateY(-50%) rotate(${rotate}deg)`,
            background: "#f0eaf8",
            padding: "14px 0",
            overflow: "hidden",
            boxShadow: "0 4px 24px rgba(0,0,0,0.5)",
          }}
        >
          {/* Scrolling track */}
          <div
            style={{
              display: "flex",
              width: "max-content",
              animation: "marquee-scroll 28s linear infinite",
            }}
          >
            {repeated.map((item, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "0 28px",
                  fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "#1a0a2e",
                  whiteSpace: "nowrap",
                }}
              >
                <span
                  style={{
                    color: "#7c3aed",
                    fontSize: "16px",
                    fontWeight: "900",
                    flexShrink: 0,
                  }}
                >
                  +
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </>
  );
}
