import React from "react";
import "../styles/Projects.css";
import cryptoImg from "../assets/cy.jpg";
import weddingImg from "../assets/wd.jpg";
import cryptoAdminImg from "../assets/ap.jpg";

export default function Projects() {
  const projects = [
    {
      img: cryptoImg,
      title: "Crypto Website",
      desc: "Convert loyalty points into cash with wallet integration for seamless transactions.",
      tags: ["React", "Blockchain", "Wallet Integration"],
      link: "#"
    },
    {
      img: weddingImg,
      title: "Wedding Hall Booking Website",
      desc: "A modern booking platform for wedding halls with search, booking, and payment features.",
      tags: ["React", "UI/UX Design", "Tailwind CSS"],
      link: "#"
    },
    {
      img: cryptoAdminImg,
      title: "Crypto Website Admin Panel",
      desc: "Front-end development for admin dashboard to manage users, wallets, and transactions.",
      tags: ["React", "Dashboard", "Admin Panel"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">A showcase of my recent work and creative projects</p>

      <div className="projects-container">
        {projects.map((p, i) => (
          <a key={i} href={p.link} className="project-card" style={{ animationDelay: `${i * 0.2}s` }}>
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <div className="project-tags">
              {p.tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
