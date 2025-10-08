import React from "react";
import "../styles/About.css";
import Resume from "./Resume";
import { FaBriefcase } from "react-icons/fa";

export default function About() {
  const timelineData = [
    {
      year: "2022 - 2024",
      title: "Freelance UI/UX Designer",
      desc: "Worked with startups to build consistent design systems and brand identities.",
    },
    {
      year: "2025",
      title: "UI/UX Intern",
      desc: "Conducted user research and created personas and journey maps for enterprise apps.",
    },
    {
      year: "2025",
      title: "Business Analyst & UI/UX Engineer",
      desc: "Currently at Navicode.cloud, bridging business goals with user experience design.",
    },
  ];

  return (
    <section id="about" className="about">
      {/* Header */}
      <div className="about-header">
        <h2>About Me</h2>
        <p>A unique blend of analytical thinking and creative design expertise</p>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section">
        <h3 className="timeline-title">
          <FaBriefcase className="icon" /> Career Timeline
        </h3>
        <div className="timeline-container">
          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-year">{item.year}</div>
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resume Section */}
      <Resume />
    </section>
  );
}
