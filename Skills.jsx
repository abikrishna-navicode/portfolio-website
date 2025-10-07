import React from "react";
import "../styles/Skills.css";
import { FaPencilRuler, FaPalette, FaCode } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaPencilRuler size={60} />,
      title: "UX Design",
      subtitle: "Wireframing & Prototyping",
      description:
        "I create intuitive user experiences using modern design tools and usability-focused workflows.",
      progress: 90
    },
    {
      icon: <FaPalette size={60} />,
      title: "Visual Design",
      subtitle: "Figma, Photoshop",
      description:
        "Crafting visually stunning layouts, color systems, and typography to bring ideas to life.",
      progress: 85
    },
    {
      icon: <FaCode size={60} />,
      title: "Development",
      subtitle: "HTML / CSS / JavaScript",
      description:
        "Turning designs into responsive and performant interfaces with clean, maintainable code.",
      progress: 80
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <br />
      <div className="skills-container">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <h4>{skill.subtitle}</h4>
            <p className="skill-desc">{skill.description}</p>

            <div className="progress-group">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.progress}%` }}
                ></div>
              </div>
              <span className="progress-text">{skill.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
