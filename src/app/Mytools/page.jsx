import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

// Importing tool icons
import FigmaIcon from "../../../public/mytools/figma.png";
import PhotoshopIcon from "../../../public/mytools/photoshop.png";
import HTMLIcon from "../../../public/mytools/html.png";
import CSSIcon from "../../../public/mytools/css.png";
import IllustratorIcon from "../../../public/mytools/illustrator.png";

const MyTools = () => {
  const tools = [
    { id: 1, name: "Figma", icon: FigmaIcon },
    { id: 2, name: "Photoshop", icon: PhotoshopIcon },
    { id: 3, name: "HTML", icon: HTMLIcon },
    { id: 4, name: "CSS", icon: CSSIcon },
    { id: 5, name: "Illustrator", icon: IllustratorIcon },
  ];

  return (
    <div className="bg-black  text-white">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-xl md:text-2xl font-bold text-purple-400 mb-8">
            My Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
            {tools.map((tool) => (
              <div
                key={tool.id}
                className="flex flex-col items-center text-center"
              >
                <div className="relative w-20 h-20 md:w-36 md:h-36  mb-4">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    layout="fill"
                    className="object-contain transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-sm sm:text-base">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyTools;
