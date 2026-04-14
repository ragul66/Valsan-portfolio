"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, PenLine } from "lucide-react";

// Images
import teaimage1 from "../../../public/myprojects/teaimage1.png";
import musicimage2 from "../../../public/myprojects/musicimage2.png";
import fitnessimage3 from "../../../public/myprojects/fitnessimage3.png";
import fooddeleiveryimage4 from "../../../public/myprojects/fooddeleiveryimage4.png";
import ecommerceimage5 from "../../../public/myprojects/ecommerceimage5.png";
import recreationimage6 from "../../../public/myprojects/designimage6.png";

const projects = [
  {
    id: "01",
    title: "Organic Tea Store",
    image: teaimage1,
    link: "https://dribbble.com/shots/24364816-Home-Page-for-an-Organic-Tea-Store",
    category: "Web Design",
    bgColor: "#ff4d4d", // Reddish
  },
  {
    id: "02",
    title: "Music Streaming",
    image: musicimage2,
    link: "https://dribbble.com/shots/24079544-Music-Streaming-App",
    category: "App Design",
    bgColor: "#f3f3f3", // Off-white
    textColor: "#1a1a1a",
  },
  {
    id: "03",
    title: "Fitness App",
    image: fitnessimage3,
    link: "https://dribbble.com/shots/23999535-Fitness-Application-Design",
    category: "App Design",
    bgColor: "#a855f7", // Purple
  },
  {
    id: "04",
    title: "Food Delivery",
    image: fooddeleiveryimage4,
    link: "https://dribbble.com/shots/23982882-Food-Delivery-Application",
    category: "App Design",
    bgColor: "#ffffff",
    textColor: "#1a1a1a",
  },
  {
    id: "05",
    title: "Ecommerce Mobile",
    image: ecommerceimage5,
    link: "https://dribbble.com/shots/23618174-Ecommerce-app-for-Mobile-devices",
    category: "App Design",
    bgColor: "#1a1a1a",
    textColor: "#ffffff",
  },
  {
    id: "06",
    title: "Design Recreation",
    image: recreationimage6,
    link: "https://dribbble.com/shots/23836574-Recreating-the-Design-from-another-Application",
    category: "App Design",
    bgColor: "#22c55e", // Green
  },
];

const WorkCard = ({ project, index }) => {
  const isDark = project.textColor !== "#1a1a1a";
  
  return (
    <div className="card-container" style={{ top: `calc(10% + ${index * 40}px)` }}>
      <div 
        className="work-card" 
        style={{ 
          backgroundColor: project.bgColor,
          color: project.textColor || "#fff"
        }}
      >
        <div className="card-header">
          <h3 className="card-title">{project.title}</h3>
          <div className="card-icon">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
              <path d="M5 5L35 35M35 5L35 35M5 35L35 35" stroke="currentColor" strokeWidth="4" fill="none"/>
            </svg>
          </div>
        </div>

        <div className="card-content">
          <span className="card-id">({project.id})</span>
          <div className="card-img-wrap">
            <Image 
              src={project.image} 
              alt={project.title} 
              className="card-img" 
              placeholder="blur"
            />
          </div>
        </div>

        <div className="card-footer">
          <div className="footer-left">
            <span className="footer-meta">031</span>
            <span className="footer-scroll">{project.category}</span>
          </div>
          <div className="footer-actions">
            <Link href={project.link} target="_blank" className="action-btn view-btn">
              VIEW <Eye size={16} />
            </Link>
            <button className="action-btn tuto-btn">
              TUTO <PenLine size={16} />
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .card-container {
          position: sticky;
          width: 100%;
          padding-bottom: 100px;
        }

        .work-card {
          width: 100%;
          min-height: 500px;
          border-radius: 12px;
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 -10px 30px rgba(0,0,0,0.3);
          transition: transform 0.5s cubic-bezier(0.17, 0.67, 0.83, 0.67);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .card-title {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 800;
          line-height: 1;
          margin: 0;
          letter-spacing: -2px;
        }

        .card-content {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          flex: 1;
          margin: 40px 0;
        }

        .card-id {
          font-size: clamp(60px, 10vw, 120px);
          font-weight: 800;
          opacity: 0.9;
          line-height: 1;
        }

        .card-img-wrap {
          width: 40%;
          aspect-ratio: 4/3;
          border-radius: 8px;
          overflow: hidden;
          background: #000;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(0,0,0,0.1);
        }
        
        /* Adjust border if background is dark */
        .work-card[style*="background-color: #1a1a1a"] .card-footer {
          border-top-color: rgba(255,255,255,0.1);
        }

        .footer-left {
          display: flex;
          flex-direction: column;
        }

        .footer-meta {
          font-size: 14px;
          opacity: 0.6;
        }

        .footer-scroll {
          font-size: 16px;
          font-weight: 700;
        }

        .footer-actions {
          display: flex;
          gap: 12px;
        }

        .action-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 700;
          background: rgba(0, 0, 0, 0.1);
          border: 1px solid rgba(0, 0, 0, 0.2);
          transition: all 0.3s;
          color: inherit;
          text-decoration: none;
        }

        .action-btn:hover {
          background: rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .work-card {
            padding: 24px;
            min-height: 400px;
          }
          .card-content {
            flex-direction: column-reverse;
            align-items: flex-start;
            gap: 20px;
          }
          .card-img-wrap {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

const RecentWorks = () => {
  return (
    <div className="works-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">RECENT WORKS</h2>
        </div>
        
        <div className="cards-stack">
          {projects.map((project, index) => (
            <WorkCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>

      <style jsx>{`
        .works-section {
          background: #050505;
          padding: 100px 0;
          min-height: 100vh;
          font-family: 'Inter', sans-serif;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .section-header {
          margin-bottom: 100px;
          text-align: center;
        }

        .section-title {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 4px;
          color: #a855f7;
        }

        .cards-stack {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
      `}</style>
    </div>
  );
};

export default RecentWorks;
