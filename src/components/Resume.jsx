import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  const certifications = [
    {
      year: "2025",
      title: "LinkedIn Learning – UI/UX Design Certificate",
      place: "LinkedIn Learning",
      desc: "Completed advanced training in UI/UX design principles, wireframing, and user research.",
    },
    {
      year: "2025",
      title: "B.Sc in Software Engineering",
      place: "The Open University of Sri Lanka",
      desc: "Comprehensive training in software development and user-centered design.",
    },
  ];

  return (
    <section id="resume" className="resume">
      <div className="resume-header">
        <h2>Education & Certifications</h2>
        <p>Continuous learning to improve my skills and expertise</p>
      </div>

      <div className="resume-container">
        {certifications.map((item, index) => (
          <div key={index} className="resume-card">
            <span className="resume-year">{item.year}</span>
            <h3>{item.title}</h3>
            <h4>{item.place}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
