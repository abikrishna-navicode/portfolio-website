import React from "react";
import "../styles/Skills.css";
import { FaPencilRuler, FaPalette, FaCode } from "react-icons/fa";

export default function Skills() {
  const skills = [
    {
      icon: <FaPencilRuler size={40} />,
      title: "Designing Experiences",
      subtitle: "Prototyping, Wireframing & Flows",
      description:
        "The foundation of UX design lies in creating wireframes, prototypes, mockups, and user flows to visualize ideas. These tools help map user journeys, test concepts, and shape intuitive digital experiences.",
      subskills: [
        { name: "Wireframing", progress: 90 },
        { name: "Prototyping", progress: 85 },
        { name: "User Flows", progress: 80 }
      ]
    },
    {
      icon: <FaPalette size={40} />,
      title: "Crafting Visual Impact",
      subtitle: "Design & Software Mastery",
      description:
        "Strong visual design skills combined with tools like Figma, Sketch, Photoshop, and Illustrator bring products to life. Knowledge of typography, color theory, and layout ensures designs are both functional and visually appealing.",
      subskills: [
        { name: "Figma", progress: 90 },
        { name: "Photoshop", progress: 85 },
        { name: "Typography", progress: 80 }
      ]
    },
    {
      icon: <FaCode size={40} />,
      title: "Bridging Design & Development",
      subtitle: "Application Knowledge",
      description:
        "Understanding HTML, CSS, and JavaScript empowers UX designers to collaborate effectively with developers, set realistic expectations, and adapt to startup environments. This technical edge also opens pathways into UX engineering and UI development.",
      subskills: [
        { name: "HTML/CSS", progress: 90 },
        { name: "JavaScript", progress: 80 },
        { name: "UI Development", progress: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">
        Combining design thinking, problem-solving, and technical expertise
      </p>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div key={i} className="skill-card" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <h4>{skill.subtitle}</h4>
            <p>{skill.description}</p>

            {skill.subskills.map((sub, index) => (
              <div key={index} className="progress-group">
                <span className="progress-name">{sub.name}</span>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${sub.progress}%` }}></div>
                </div>
                <span className="progress-text">{sub.progress}%</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
