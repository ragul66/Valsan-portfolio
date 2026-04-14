"use client";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";

import logo from "../../../public/Black and White Minimalist Professional Initial Logo/2-removebg-preview.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { title: "Home", href: "/" },
    { title: "About Me", href: "/about" },
    { title: "Skills", href: "/Myskills" },
    { title: "Portfolio", href: "/Myworks" },
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
    <nav
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 50,
        transition: "all 0.3s ease",
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0.6)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled ? "1px solid rgba(139,92,246,0.2)" : "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "70px",
        }}
      >
        {/* Logo */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <Image src={logo} height={65} width={65} alt="SreeValsan Logo" />
        </div>

        {/* Desktop Menu */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
          className="hidden md:flex"
        >
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.title}
                href={item.href}
                style={{
                  position: "relative",
                  padding: "8px 16px",
                  fontSize: "13px",
                  fontWeight: "600",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  color: isActive ? "#a855f7" : "#ffffff",
                  textDecoration: "none",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#c084fc";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#ffffff";
                }}
              >
                {item.title}
                {isActive && (
                  <span
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: "16px",
                      right: "16px",
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

        {/* Resume Button */}
        <div className="hidden md:flex" style={{ alignItems: "center" }}>
          <button
            onClick={handleDownload}
            style={{
              background: "#7c3aed",
              color: "#ffffff",
              padding: "10px 28px",
              borderRadius: "4px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              transition: "background 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#6d28d9";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#7c3aed";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Resume
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "transparent",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              padding: "8px",
            }}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.97)",
            borderTop: "1px solid rgba(139,92,246,0.3)",
            padding: "16px 24px",
          }}
          className="md:hidden"
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <a
                  key={item.title}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: "12px 16px",
                    fontSize: "13px",
                    fontWeight: "600",
                    letterSpacing: "1.5px",
                    textTransform: "uppercase",
                    color: isActive ? "#a855f7" : "#ffffff",
                    textDecoration: "none",
                    borderLeft: isActive ? "3px solid #a855f7" : "3px solid transparent",
                    transition: "all 0.2s ease",
                  }}
                >
                  {item.title}
                </a>
              );
            })}
            <button
              onClick={() => { handleDownload(); setIsOpen(false); }}
              style={{
                marginTop: "12px",
                background: "#7c3aed",
                color: "#ffffff",
                padding: "12px 24px",
                borderRadius: "4px",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "2px",
                textTransform: "uppercase",
                border: "none",
                cursor: "pointer",
                width: "fit-content",
              }}
            >
              Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
