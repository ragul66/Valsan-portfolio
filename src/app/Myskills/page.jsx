"use client";
import React from "react";
import useInView from "../hooks/useInView";

const services = [
  { number: "01", title: "App Design", description: "Conceptualized a fitness app that tracks daily activities and goals. Emphasized simplicity and motivation through interactive elements." },
  { number: "02", title: "UI/UX Design", description: "Designed an e-commerce app to enhance user engagement and streamline the shopping experience. Focused on intuitive navigation and modern UI principles." },
  { number: "03", title: "Website Design", description: "Created a responsive portfolio website for a photographer. Used HTML, CSS, and JavaScript to deliver a visually stunning and functional platform." },
  { number: "04", title: "Branding Design", description: "Developed a cohesive brand identity for a startup, including logo, color palette, and typography. Ensured consistency across all marketing materials." },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400"];

const ServiceCard = ({ number, title, description, delay, inView }) => (
  <div className={`anim-fade-left ${delay} ${inView ? "anim-in" : ""}`}>
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/10 to-purple-800/10 p-1 transition-all duration-300 hover:from-purple-900/20 hover:to-purple-800/20">
      <div className="relative flex items-center rounded-xl hover:bg-gradient-to-tr from-purple-400 to-black p-6 lg:p-8 hover:text-white">
        <span className="text-purple-400 text-lg font-medium flex-shrink-0 pr-6">{number}</span>
        <div className="space-y-2 flex-1 text-white">
          <h3 className="text-xl lg:text-2xl text-purple-400 font-medium">{title}</h3>
          <p className="text-sm md:text-base">{description}</p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <svg className="w-6 h-6 text-purple-400 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </div>
  </div>
);

const Services = () => {
  const [titleRef, titleIn] = useInView();
  const [listRef, listIn] = useInView(0.05);

  return (
    <main className="min-h-screen bg-black">
      <div className="px-4 py-24 lg:py-32">
        <h2
          ref={titleRef}
          className={`text-4xl lg:text-5xl font-bold text-center bg-gradient-to-r from-purple-400 to-white bg-clip-text text-transparent anim-fade-down ${titleIn ? "anim-in" : ""}`}
        >
          My Skills
        </h2>
        <div ref={listRef} className="grid gap-8 lg:gap-10 max-w-5xl mx-auto p-4 lg:p-8 rounded-2xl">
          {services.map((s, i) => (
            <ServiceCard key={s.number} {...s} delay={delays[i]} inView={listIn} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
