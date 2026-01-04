import React from "react";
import Navbar from "../components/Navbar";
import { GraduationCap, Brain } from "lucide-react";

const EducationExperience = () => {
  const education = [
    {
      year: "2020 - 2024",
      degree: "B.TECH",
      field: "Computer Science and Business Systems",
      institution: "Sethu Institute Of Technology",
    },
  ];

  const experience = [
    {
      date: "JUL 2024- FEB 2025",
      company: "Qredit (Bangalore)",
      role: "Operational Executive (Website Manager)",
    },
    {
      date: "FEB 2025 - Present",
      company: "Identiti design (Bangalore)",
      role: "Visual Designer",
    },
  ];

  return (
    <div className="bg-gradient-to-tr from-black via-black to-purple-900  text-white">
      <Navbar />
      <main className="pt-24 pb-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Education Section */}
            <div>
              <h2 className="text-xl font-bold text-purple-400 flex items-center gap-2 mb-6">
                <GraduationCap className="w-6 h-6" />
                My Education
              </h2>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-6 shadow-lg"
                  >
                    <p className="text-sm text-gray-400">{edu.year}</p>
                    <p className="text-lg font-semibold text-white">
                      {edu.degree}{" "}
                      <span className="text-gray-400">{edu.field}</span>
                    </p>
                    <p className="text-purple-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-xl font-bold text-purple-400 flex items-center gap-2 mb-6">
                <Brain className="w-6 h-6" />
                My Experience
              </h2>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div
                    key={index}
                    className="bg-gray-900 rounded-lg p-6 shadow-lg"
                  >
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    <p className="text-purple-400">{exp.company}</p>
                    <p className="text-lg font-semibold text-white">
                      {exp.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default EducationExperience;
