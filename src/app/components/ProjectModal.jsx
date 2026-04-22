"use client";
import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(null);
  const [animating, setAnimating] = useState(false);

  const slides = project?.slides || [];
  const currentSlide = slides[current];

  const go = useCallback(
    (dir) => {
      if (animating || slides.length <= 1) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) =>
          dir === "right"
            ? (prev + 1) % slides.length
            : (prev - 1 + slides.length) % slides.length
        );
        setAnimating(false);
      }, 320);
    },
    [animating, slides.length]
  );

  // Keyboard nav + close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go("right");
      if (e.key === "ArrowLeft") go("left");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  if (!project) return null;

  const slideStyle = animating
    ? {
        opacity: 0,
        transform: direction === "right" ? "translateX(-60px)" : "translateX(60px)",
      }
    : { opacity: 1, transform: "translateX(0)" };

  return (
    <>
      <style>{`
        .modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          animation: backdropIn 0.25s ease;
        }
        @keyframes backdropIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .modal-box {
          background: #111;
          border: 1px solid rgba(168,85,247,0.25);
          border-radius: 16px;
          width: 100%;
          max-width: 860px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          animation: modalIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
        }
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.92) translateY(24px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 28px 16px;
          border-bottom: 1px solid rgba(255,255,255,0.07);
        }
        .modal-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.5px;
          margin: 0;
        }
        .modal-category {
          font-size: 12px;
          color: #a855f7;
          font-weight: 600;
          letter-spacing: 2px;
          text-transform: uppercase;
          margin-top: 2px;
        }
        .modal-close {
          background: rgba(255,255,255,0.07);
          border: none;
          border-radius: 8px;
          color: #fff;
          cursor: pointer;
          padding: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s;
        }
        .modal-close:hover { background: rgba(168,85,247,0.25); }

        .modal-img-area {
          position: relative;
          flex: 1;
          overflow: hidden;
          background: #0a0a0a;
          min-height: 380px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .modal-img-slide {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: opacity 0.32s ease, transform 0.32s ease;
          padding: 24px;
        }
        .modal-img {
          object-fit: contain;
          border-radius: 8px;
          max-height: 460px;
          width: auto;
          height: auto;
          max-width: 100%;
          transition: transform 0.4s ease;
        }
        .modal-img:hover { transform: scale(1.03); }

        .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.6);
          border: 1px solid rgba(168,85,247,0.3);
          border-radius: 50%;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #fff;
          transition: background 0.2s, border-color 0.2s;
          z-index: 10;
        }
        .modal-nav:hover {
          background: rgba(168,85,247,0.35);
          border-color: #a855f7;
        }
        .modal-nav.left  { left: 14px; }
        .modal-nav.right { right: 14px; }
        .modal-nav:disabled { opacity: 0.2; cursor: default; }

        .modal-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          padding: 14px 0 18px;
        }
        .modal-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          border: none;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          padding: 0;
        }
        .modal-dot.active {
          background: #a855f7;
          transform: scale(1.3);
        }

        .modal-footer {
          padding: 14px 28px 20px;
          border-top: 1px solid rgba(255,255,255,0.07);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
        }
        .modal-counter {
          font-size: 12px;
          color: rgba(255,255,255,0.4);
          font-weight: 600;
          letter-spacing: 1px;
        }
        .modal-dribbble-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #7c3aed;
          color: #fff;
          border: none;
          border-radius: 6px;
          padding: 9px 20px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, transform 0.2s;
        }
        .modal-dribbble-btn:hover {
          background: #6d28d9;
          transform: scale(1.03);
        }

        @media (max-width: 600px) {
          .modal-box { border-radius: 12px; }
          .modal-img-area { min-height: 260px; }
          .modal-img { max-height: 280px; }
          .modal-header { padding: 16px 18px 12px; }
          .modal-footer { padding: 12px 18px 16px; flex-wrap: wrap; }
        }
      `}</style>

      <div className="modal-backdrop" onClick={onClose}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          {/* Header */}
          <div className="modal-header">
            <div>
              <p className="modal-title">{project.title}</p>
              <p className="modal-category">{project.category}</p>
            </div>
            <button className="modal-close" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>

          {/* Image area */}
          <div className="modal-img-area">
            <div className="modal-img-slide" style={slideStyle}>
              <Image
                src={currentSlide.src}
                alt={`${project.title} screenshot ${current + 1}`}
                className="modal-img"
                width={800}
                height={500}
                placeholder="blur"
              />
            </div>

            {slides.length > 1 && (
              <>
                <button className="modal-nav left" onClick={() => go("left")} aria-label="Previous image">
                  <ChevronLeft size={20} />
                </button>
                <button className="modal-nav right" onClick={() => go("right")} aria-label="Next image">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {slides.length > 1 && (
            <div className="modal-dots">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className={`modal-dot ${i === current ? "active" : ""}`}
                  onClick={() => { setDirection(i > current ? "right" : "left"); setCurrent(i); }}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          )}

          {/* Footer — link changes per slide */}
          <div className="modal-footer">
            <span className="modal-counter">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </span>
            <a
              href={currentSlide.link}
              target="_blank"
              rel="noopener noreferrer"
              className="modal-dribbble-btn"
            >
              View on Dribbble ↗
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectModal;
