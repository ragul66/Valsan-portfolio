"use client";
import React, { useEffect, useState, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(null); // "left" | "right" | null
  const [mounted, setMounted] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => { setMounted(true); }, []);
  // Reset slide index when project changes
  useEffect(() => { setCurrent(0); setSliding(null); }, [project?.id]);

  const slides = project?.slides || [];
  const currentSlide = slides[current];

  const go = useCallback((dir) => {
    if (sliding || slides.length <= 1) return;
    setSliding(dir);
    timerRef.current = setTimeout(() => {
      setCurrent((prev) =>
        dir === "right"
          ? (prev + 1) % slides.length
          : (prev - 1 + slides.length) % slides.length
      );
      setSliding(null);
    }, 280);
  }, [sliding, slides.length]);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go("right");
      if (e.key === "ArrowLeft") go("left");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [go, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, []);

  if (!project || !mounted) return null;

  const modalContent = (
    <>
      <style>{`
        @keyframes bdIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes boxIn {
          from { opacity: 0; transform: scale(0.94) translateY(28px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        @keyframes imgSlideLeft {
          from { transform: translateX(0);    opacity: 1; }
          to   { transform: translateX(-8%);  opacity: 0; }
        }
        @keyframes imgSlideRight {
          from { transform: translateX(0);   opacity: 1; }
          to   { transform: translateX(8%);  opacity: 0; }
        }
        @keyframes imgEnterLeft {
          from { transform: translateX(8%);  opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }
        @keyframes imgEnterRight {
          from { transform: translateX(-8%); opacity: 0; }
          to   { transform: translateX(0);   opacity: 1; }
        }

        .pm-backdrop {
          position: fixed; inset: 0;
          background: rgba(0,0,0,0.9);
          backdrop-filter: blur(12px);
          z-index: 99999;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: bdIn 0.2s ease;
          top: 0; left: 0; right: 0; bottom: 0;
          width: 100vw; height: 100vh;
        }
        .pm-box {
          background: #0c0c0c;
          border: 1px solid rgba(168,85,247,0.18);
          border-radius: 20px;
          width: 100%; max-width: 900px;
          max-height: 90vh;
          display: flex; flex-direction: column;
          overflow: hidden;
          animation: boxIn 0.3s cubic-bezier(0.34,1.4,0.64,1);
          box-shadow: 0 40px 100px rgba(0,0,0,0.8);
        }

        /* Header */
        .pm-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 18px 24px 14px;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0;
        }
        .pm-title { font-size: 18px; font-weight: 800; color: #fff; margin: 0; letter-spacing: -0.3px; }
        .pm-cat   { font-size: 11px; color: #a855f7; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; margin-top: 3px; }
        .pm-close {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px; color: #fff; cursor: pointer;
          width: 36px; height: 36px;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s, border-color 0.2s;
          flex-shrink: 0;
        }
        .pm-close:hover { background: rgba(168,85,247,0.2); border-color: rgba(168,85,247,0.4); }

        /* Image area */
        .pm-img-area {
          position: relative;
          flex: 1;
          background: #080808;
          overflow: hidden;
          min-height: 400px;
          display: flex; align-items: center; justify-content: center;
        }
        .pm-img-inner {
          width: 100%; height: 100%;
          display: flex; align-items: center; justify-content: center;
          padding: 24px;
        }
        .pm-img-inner.exit-left  { animation: imgSlideLeft  0.28s ease forwards; }
        .pm-img-inner.exit-right { animation: imgSlideRight 0.28s ease forwards; }
        .pm-img-inner.enter-left  { animation: imgEnterLeft  0.28s ease forwards; }
        .pm-img-inner.enter-right { animation: imgEnterRight 0.28s ease forwards; }

        .pm-img {
          object-fit: contain;
          border-radius: 10px;
          max-height: 420px;
          max-width: 100%;
          width: auto; height: auto;
          box-shadow: 0 8px 40px rgba(0,0,0,0.5);
          transition: transform 0.35s ease;
        }
        .pm-img:hover { transform: scale(1.02); }

        /* Nav */
        .pm-nav {
          position: absolute; top: 50%; transform: translateY(-50%);
          background: rgba(0,0,0,0.65);
          border: 1px solid rgba(168,85,247,0.2);
          border-radius: 50%; width: 44px; height: 44px;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer; color: #fff; z-index: 5;
          backdrop-filter: blur(6px);
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
        }
        .pm-nav:hover {
          background: rgba(124,58,237,0.4);
          border-color: #a855f7;
          transform: translateY(-50%) scale(1.1);
        }
        .pm-nav.left  { left: 14px; }
        .pm-nav.right { right: 14px; }

        /* Footer */
        .pm-footer {
          display: flex; align-items: center; justify-content: space-between;
          padding: 12px 24px 16px;
          border-top: 1px solid rgba(255,255,255,0.06);
          flex-shrink: 0; gap: 12px;
        }
        .pm-counter {
          font-size: 13px; font-weight: 700;
          color: rgba(255,255,255,0.3); letter-spacing: 1px;
          white-space: nowrap; flex-shrink: 0;
        }
        .pm-counter b { color: #fff; }

        .pm-thumbs {
          display: flex; gap: 6px; align-items: center;
          overflow-x: auto; flex: 1; justify-content: center;
          scrollbar-width: none; padding: 2px 0;
        }
        .pm-thumbs::-webkit-scrollbar { display: none; }
        .pm-thumb {
          width: 38px; height: 38px; border-radius: 6px;
          overflow: hidden; flex-shrink: 0; cursor: pointer;
          border: 2px solid transparent;
          opacity: 0.45;
          transition: border-color 0.2s, opacity 0.2s, transform 0.2s;
        }
        .pm-thumb.active { border-color: #a855f7; opacity: 1; transform: scale(1.12); }
        .pm-thumb:hover:not(.active) { opacity: 0.75; }

        .pm-actions {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 20px 24px;
          align-items: center;
          background: #0c0c0c;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .pm-btn {
          width: 100%;
          max-width: 320px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 12px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .pm-btn.primary {
          background: #fff;
          color: #000;
          border: 1px solid #fff;
        }
        .pm-btn.primary:hover {
          background: #e0e0e0;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(255,255,255,0.1);
        }

        .pm-btn.secondary {
          background: transparent;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
        }
        .pm-btn.secondary:hover {
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.5);
          transform: translateY(-3px);
        }

        @media (max-width: 600px) {
          .pm-img-area { min-height: 260px; }
          .pm-img { max-height: 260px; }
          .pm-footer { flex-wrap: wrap; padding: 10px 16px 14px; }
          .pm-thumbs { display: none; }
          .pm-header { padding: 14px 16px 12px; }
          .pm-btn { max-width: 100%; }
        }
      `}</style>

      <div className="pm-backdrop" onClick={onClose}>
        <div className="pm-box" onClick={(e) => e.stopPropagation()}>

          {/* Header */}
          <div className="pm-header">
            <div>
              <p className="pm-title">{project.title}</p>
              <p className="pm-cat">{project.category}</p>
            </div>
            <button className="pm-close" onClick={onClose} aria-label="Close">
              <X size={16} />
            </button>
          </div>

          {/* Image */}
          <div className="pm-img-area">
            <div
              className={`pm-img-inner${sliding === "right" ? " exit-left"
                : sliding === "left" ? " exit-right"
                  : !sliding && current >= 0 ? " enter-left"
                    : ""
                }`}
            >
              <Image
                src={currentSlide.src}
                alt={`${project.title} ${current + 1}`}
                className="pm-img"
                width={860}
                height={540}
                placeholder="blur"
                priority
              />
            </div>
            {slides.length > 1 && (
              <>
                <button className="pm-nav left" onClick={() => go("left")} aria-label="Previous">
                  <ChevronLeft size={20} />
                </button>
                <button className="pm-nav right" onClick={() => go("right")} aria-label="Next">
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Action Buttons */}
          <div className="pm-actions">
            <a href={currentSlide.link} target="_blank" rel="noopener noreferrer" className="pm-btn primary">
              View Site <ExternalLink size={14} />
            </a>
            <a href={currentSlide.link} target="_blank" rel="noopener noreferrer" className="pm-btn secondary">
              View Project Details <ExternalLink size={14} />
            </a>
          </div>

          {/* Footer */}
          {/* <div className="pm-footer">
            <span className="pm-counter">
              <b>{String(current + 1).padStart(2, "0")}</b>
              {" / "}
              {String(slides.length).padStart(2, "0")}
            </span>

            <div className="pm-thumbs">
              {slides.map((slide, i) => (
                <div
                  key={i}
                  className={`pm-thumb${i === current ? " active" : ""}`}
                  onClick={() => { if (!sliding) { setSliding(i > current ? "right" : "left"); setTimeout(() => { setCurrent(i); setSliding(null); }, 280); } }}
                >
                  <Image
                    src={slide.src}
                    alt={`thumb ${i + 1}`}
                    width={38} height={38}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    placeholder="blur"
                  />
                </div>
              ))}
            </div>

            <a href={currentSlide.link} target="_blank" rel="noopener noreferrer" className="pm-link">
              Dribbble <ExternalLink size={12} />
            </a>
          </div> */}
        </div>
      </div>
    </>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
