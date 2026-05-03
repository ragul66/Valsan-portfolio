"use client";
import { useEffect, useRef } from "react";

/**
 * Wraps children and adds 'section-visible' class when element enters viewport.
 * Works reliably across all Next.js pages.
 */
export default function AnimateOnScroll({
  children,
  className = "",
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "scale"
  style = {},
  as: Tag = "div",
}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Small delay then add visible class
          setTimeout(() => {
            el.style.opacity = "1";
            el.style.transform = "none";
          }, delay);
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const directionStyles = {
    up:    { opacity: 0, transform: "translateY(52px)" },
    down:  { opacity: 0, transform: "translateY(-32px)" },
    left:  { opacity: 0, transform: "translateX(-52px)" },
    right: { opacity: 0, transform: "translateX(52px)" },
    scale: { opacity: 0, transform: "scale(0.88) translateY(24px)" },
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        ...directionStyles[direction],
        transition: `opacity 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </Tag>
  );
}
