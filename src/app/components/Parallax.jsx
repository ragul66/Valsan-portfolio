"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax({ children, speed = 1, direction = "up", className = "" }) {
  const ref = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Calculate the movement based on speed. Higher speed = more movement.
  const distance = speed * 150; 
  const start = direction === "up" ? distance : -distance;
  const end = direction === "up" ? -distance : distance;

  const y = useTransform(scrollYProgress, [0, 1], [start, end]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", zIndex: 1 }}>
      <motion.div style={{ y, width: "100%", height: "100%" }}>
        {children}
      </motion.div>
    </div>
  );
}
