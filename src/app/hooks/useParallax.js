"use client";
import { useEffect, useRef } from "react";

/**
 * Applies a parallax translateY to an element based on its scroll position.
 * @param {number} speed - multiplier: 0.1 = subtle, 0.3 = strong. Negative = opposite direction.
 */
export default function useParallax(speed = 0.15) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const viewH = window.innerHeight;
      // How far the element's center is from the viewport center
      const centerOffset = rect.top + rect.height / 2 - viewH / 2;
      const translateY = centerOffset * speed;
      el.style.transform = `translateY(${translateY}px)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update(); // initial position
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return ref;
}
