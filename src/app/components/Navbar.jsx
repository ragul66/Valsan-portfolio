"use client";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../../public/Black and White Minimalist Professional Initial Logo/2-removebg-preview.png";

const BREAKPOINT = 1024;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);

  // Track window width
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [pastHero, setPastHero] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrollY(y);
      setScrolled(y > 20);
      setPastHero(y > window.innerHeight * 0.85);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Close on route change
  useEffect(() => { setIsOpen(false); }, [pathname]);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/about" },
    { title: "Works", href: "/Myworks" },
    // { title: "Skills", href: "/Myskills" },
    { title: "Contact", href: "/contactme" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/SREEVALSAN.pdf";
    link.download = "sreevalsan-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <style>{`
        .mobile-menu {
          overflow: hidden;
          max-height: 0;
          opacity: 0;
          transition: max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease;
        }
        .mobile-menu.open {
          max-height: 420px;
          opacity: 1;
        }
        .nav-link:hover { color: #c084fc !important; }
        .mobile-link:hover {
          color: #c084fc !important;
          background: rgba(139,92,246,0.08);
          border-radius: 6px;
        }
        .resume-btn:hover {
          background: #6d28d9 !important;
          transform: scale(1.04);
          box-shadow: 0 0 16px rgba(139,92,246,0.4);
        }
        .hamburger-btn:hover { transform: scale(1.1); }
      `}</style>

      <nav
        ref={menuRef}
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 50,
          transition: "background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease",
          backgroundColor: pastHero ? "rgba(0,0,0,0.95)" : scrollY > 20 ? `rgba(0,0,0,${Math.min(scrollY / 80, 0.92).toFixed(2)})` : "rgba(0,0,0,0)",
          backdropFilter: (pastHero || scrollY > 20) ? "blur(16px)" : "none",
          WebkitBackdropFilter: (pastHero || scrollY > 20) ? "blur(16px)" : "none",
          borderBottom: (pastHero || scrollY > 20)
            ? "1px solid rgba(139,92,246,0.25)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <a href="/" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
            <Image src={logo} height={60} width={60} alt="SreeValsan Logo" priority />
          </a>

          {/* Desktop nav links — hidden on mobile */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="nav-link"
                    style={{
                      position: "relative",
                      padding: "8px 14px",
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: isActive ? "#a855f7" : "#ffffff",
                      textDecoration: "none",
                      transition: "color 0.2s ease",
                    }}
                  >
                    {item.title}
                    {isActive && (
                      <span
                        style={{
                          position: "absolute",
                          bottom: "4px",
                          left: "14px",
                          right: "14px",
                          height: "2px",
                          backgroundColor: "#a855f7",
                          borderRadius: "1px",
                        }}
                      />
                    )}
                  </a>
                );
              })}
            </div>
          )}

          {/* Desktop resume button */}
          {!isMobile && (
            <button
              onClick={handleDownload}
              className="resume-btn"
              style={{
                background: "#7c3aed",
                color: "#ffffff",
                padding: "9px 24px",
                borderRadius: "5px",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                transition: "background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              Resume
            </button>
          )}

          {/* Hamburger — only on mobile */}
          {isMobile && (
            <button
              className="hamburger-btn"
              onClick={() => setIsOpen((prev) => !prev)}
              style={{
                background: "transparent",
                border: "1px solid rgba(139,92,246,0.4)",
                borderRadius: "6px",
                color: "#ffffff",
                cursor: "pointer",
                padding: "6px 8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "transform 0.2s ease",
              }}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        {isMobile && (
          <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
            <div
              style={{
                borderTop: "1px solid rgba(139,92,246,0.2)",
                padding: "12px 20px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "2px",
              }}
            >
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="mobile-link"
                    onClick={() => setIsOpen(false)}
                    style={{
                      padding: "11px 14px",
                      fontSize: "12px",
                      fontWeight: "600",
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: isActive ? "#a855f7" : "#e5e7eb",
                      textDecoration: "none",
                      borderLeft: isActive ? "3px solid #a855f7" : "3px solid transparent",
                      display: "block",
                      transition: "color 0.2s ease, background 0.2s ease",
                    }}
                  >
                    {item.title}
                  </a>
                );
              })}

              <button
                onClick={() => { handleDownload(); setIsOpen(false); }}
                className="resume-btn"
                style={{
                  marginTop: "14px",
                  background: "#7c3aed",
                  color: "#ffffff",
                  padding: "11px 24px",
                  borderRadius: "5px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  border: "none",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  transition: "background 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease",
                }}
              >
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
