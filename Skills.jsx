import React from "react";
import "../styles/Skills.css";
import {
  FaFigma,
  FaAdobe,
  FaRegLightbulb,
  FaDraftingCompass,
  FaLaptopCode,
} from "react-icons/fa";
import processImg from "../assets/ui.jpg";
export default function Skills() {
  const skills = [
    {
      icon: <FaFigma size={60} />,
      title: "UI/UX Tools",
      subtitle: "Figma | Adobe XD | Photoshop | Illustrator",
      description:
        "I craft user-centered interfaces using leading industry tools for wireframing, prototyping, and visual design—balancing creativity and precision to deliver engaging digital experiences.",
      progress: 95,
    },
    {
      icon: <FaDraftingCompass size={60} />,
      title: "Product UI Design",
      subtitle: "Design Systems | Component Libraries | Scalability",
      description:
        "I design intuitive and scalable product interfaces that prioritize accessibility, responsiveness, and a cohesive brand experience across platforms.",
      progress: 90,
    },
    {
      icon: <FaRegLightbulb size={60} />,
      title: "Design Thinking & Strategy",
      subtitle: "Empathize | Ideate | Prototype | Test",
      description:
        "My workflow follows a user-focused design process that emphasizes problem-solving, research, and iteration to create solutions that truly connect with users.",
      progress: 85,
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-header">
        <h2>My UI/UX Skills</h2>
        <p>Blending creativity and strategy to design meaningful user experiences</p>
      </div>

      <div className="skills-container">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            style={{ animationDelay: `${i * 0.2}s` }}
          >
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

      <div className="workflow-section">
        <div className="workflow-content">
          <h3>My Working Style in UI/UX Design</h3>
          <p>
            I follow a collaborative and research-driven workflow — starting from
            user insights, transforming them into prototypes, and iterating based on
            feedback. Every design decision is backed by usability testing and
            data-driven insights.
          </p>
          <ul>
            <li>🔍 Research & Empathy – Understanding user pain points</li>
            <li>✏️ Ideation & Wireframing – Transforming ideas into low-fidelity mockups</li>
            <li>🎨 Prototyping & Visual Design – Bringing concepts to life with Figma</li>
            <li>🧪 Testing & Iteration – Refining interfaces through feedback loops</li>
          </ul>
        </div>

        <div className="workflow-image">
          <img src={processImg} alt="UI/UX Workflow" />
        </div>
      </div>
    </section>
  );
}
