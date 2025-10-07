import React from "react";
import "../styles/Resume.css";

export default function Resume() {
  const certifications = [
    {
      year: "2025",
      title: "Certified UX Designer",
      place: "Google UX Certification",
      desc: "Specialized in design thinking, wireframes, and usability testing."
    },
    {
      year: "2025",
      title: "B.Se in Software Engineering",
      place: "The Open University of Srilanka",
      desc: "Comprehensive training on Software Engineering for development and designing."
    }
  ];

  return (
    <div className="resume">
      <h2 className="section-title">Education & Certifications</h2><br/>

      <div className="resume-container">
        {certifications.map((item, i) => (
          <div key={i} className="resume-card" style={{ animationDelay: `${i * 0.2}s` }}>
            <span className="resume-year">{item.year}</span>
            <h3>{item.title}</h3>
            <h4>{item.place}</h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
