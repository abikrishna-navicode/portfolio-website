import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Data-driven insights meet thoughtful design</p>

      <div className="about-container">
        {/* Left Side */}
        <div className="about-left">
          <p>
            Hi, I’m Abikrishna 👋 A passionate Business Analyst and UI/UX Engineer.  
            I focus on bridging business needs with intuitive design solutions.
          </p>

          <div className="job-role">
            <h4>💼 Job Role</h4>
            <p>Business Analyst & UI/UX Engineer</p>
          </div>

          <div className="skills-details">
            <h4>🛠 Core Skills</h4>
            <ul>
              <li>Requirement Analysis & Documentation</li>
              <li>User Research & Wireframing</li>
              <li>Prototyping & Usability Testing</li>
              <li>Frontend Development (React, HTML, CSS)</li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h4>🚀 Career Journey</h4>
          <div className="career-card">
            <p>
              With 3+ years of experience, I’ve collaborated with cross-functional teams,
              turning complex business requirements into engaging, user-friendly applications.  
              My approach combines analytics, research, and design thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
