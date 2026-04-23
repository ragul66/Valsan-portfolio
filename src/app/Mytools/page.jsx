"use client";
import React from "react";
import Image from "next/image";
import useInView from "../hooks/useInView";

import FigmaIcon      from "../../../public/mytools/figma.png";
import PhotoshopIcon  from "../../../public/mytools/photoshop.png";
import Adobexd        from "../../../public/mytools/adobexd.png";
import AdobeIndesign  from "../../../public/mytools/adobeindesign.png";
import IllustratorIcon from "../../../public/mytools/illustrator.png";

const tools = [
  { id: 1, name: "Figma",          icon: FigmaIcon },
  { id: 2, name: "Photoshop",      icon: PhotoshopIcon },
  { id: 3, name: "Adobe XD",       icon: Adobexd },
  { id: 4, name: "Adobe InDesign", icon: AdobeIndesign },
  { id: 5, name: "Illustrator",    icon: IllustratorIcon },
];

const delays = ["delay-100", "delay-200", "delay-300", "delay-400", "delay-500"];

const MyTools = () => {
  const [titleRef, titleIn] = useInView();
  const [gridRef, gridIn]   = useInView(0.1);

  return (
    <div className="bg-black text-white">
      <main className="pt-16 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2
            ref={titleRef}
            className={`text-center text-xl md:text-2xl font-bold text-violet-400 mb-12 anim-fade-down ${titleIn ? "anim-in" : ""}`}
          >
            My Tools
          </h2>

          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10">
            {tools.map((tool, i) => (
              <div
                key={tool.id}
                className={`flex flex-col items-center text-center anim-scale ${delays[i]} ${gridIn ? "anim-in" : ""}`}
              >
                <div className="relative w-20 h-20 md:w-28 md:h-28 mb-4 cursor-pointer">
                  <Image
                    src={tool.icon}
                    alt={tool.name}
                    fill
                    className="object-contain transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.7)]"
                  />
                </div>
                <p className="text-sm sm:text-base font-medium">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MyTools;
