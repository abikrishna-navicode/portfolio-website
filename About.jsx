import React from "react";
import "../styles/About.css";
import Resume from "./Resume";
import { FaBriefcase } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="about">
      {/* About Header */}
      <div className="about-header">
        <h2>About Me</h2>
        <p>A unique blend of analytical thinking and creative design expertise</p>
      </div>

      {/* About Content */}
      <div className="about-content">
        {/* LEFT SIDE */}
        <div className="about-left">
          <p>
            I'm a hybrid professional who thrives at the intersection of business
            strategy and user experience design. With a strong foundation in
            Information Systems and specialized training in Human-Computer
            Interaction, I bring a unique perspective to every project.
          </p>
          <p>
            My approach combines data-driven business analysis with empathetic
            user research to create digital products that not only meet business
            objectives but also delight users.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <h3>
            <FaBriefcase className="icon" /> Career Journey
          </h3>
          <div className="career-card">
            <span className="year">2025 - Present</span>
            <h4>Business Analyst & UI/UX Engineer</h4>
            <p>Navicode.cloud</p>
          </div>
        </div>
      </div>

      {/* Resume Section */}
      <Resume />
    </section>
  );
}
