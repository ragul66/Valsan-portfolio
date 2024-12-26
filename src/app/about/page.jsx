import React from "react";
import Navbar from "../components/Navbar";

const ServiceCard = ({ number, title, description }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-purple-900/10 to-purple-800/10 p-1 transition-all duration-300 hover:from-purple-900/20 hover:to-purple-800/20">
      <div className="relative flex items-center justify-between rounded-xl bg-black/90 p-6 lg:p-8">
        <div className="space-y-3">
          <span className="text-purple-400 text-lg font-medium">{number}</span>
          <h3 className="text-xl lg:text-2xl text-white font-medium">
            {title}
          </h3>
          <p className="text-gray-400 text-sm md:text-base max-w-lg">
            {description}
          </p>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <svg
            className="w-6 h-6 text-purple-400 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      number: "01",
      title: "App Design",
      description:
        "Conceptualized a fitness app that tracks daily activities and goals. Emphasized simplicity and motivation through interactive elements.",
    },
    {
      number: "02",
      title: "UI/UX Design",
      description:
        "Designed an e-commerce app to enhance user engagement and streamline the shopping experience. Focused on intuitive navigation and modern UI principles.",
    },
    {
      number: "03",
      title: "Website Design",
      description:
        "Created a responsive portfolio website for a photographer. Used HTML, CSS, and JavaScript to deliver a visually stunning and functional platform.",
    },
    {
      number: "04",
      title: "Branding design",
      description:
        "Developed a cohesive brand identity for a startup, including logo, color palette, and typography. Ensured consistency across all marketing materials.",
    },
  ];

  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 lg:py-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 lg:mb-24 bg-gradient-to-r from-purple-400 to-violet-300 bg-clip-text text-transparent">
          My Quality Services
        </h2>
        <div className="grid gap-8 lg:gap-10 max-w-5xl mx-auto">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Services;
