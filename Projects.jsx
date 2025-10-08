import React from "react";
import "./../styles/Projects.css";
import cryptoImg from "../assets/cy.jpg"; 
import weddingImg from "../assets/wd.jpg"; 
import adminImg from "../assets/ap.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Crypto Website",
      description:
        "Convert loyalty points into cash with wallet integration for seamless transactions.",
      image: cryptoImg,
      tags: ["React", "Blockchain", "Wallet Integration"],
      link: "/sample-project",
    },
    {
      title: "Wedding Hall Booking Website",
      description:
        "A modern booking platform for wedding halls with search, booking, and payment features.",
      image: weddingImg,
      tags: ["React", "UI/UX Design", "Tailwind CSS"],
      link: "/sample-project",
    },
    {
      title: "Crypto Website Admin Panel",
      description:
        "Front-end development for admin dashboard to manage users, wallets, and transactions.",
      image: adminImg,
      tags: ["React", "Dashboard", "Admin Panel"],
      link: "/sample-project",
    },
  ];

  return (
    <section id="projects" className="projects">
      <div className="projects-inner">
        <h2 className="section-head">Projects</h2>
        <p className="section-sub">
          Selected work with live links, client feedback, and real-world use cases.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="image-container">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="project-btn">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clients Feedback Section */}
        <div className="clients-feedback">
          <h3>Clients Feedback</h3>
          <div className="feedback-grid">
            <div className="feedback-card">
              <p>
                “Working with you was an absolute pleasure! The project exceeded
                expectations in both design and performance.”
              </p>
              <h4>- Client A</h4>
            </div>
            <div className="feedback-card">
              <p>
                “Impressed with the professionalism and timely delivery. Highly
                recommend for any creative web project.”
              </p>
              <h4>- Client B</h4>
            </div>
             {/* Project Contact Section */}
        <div className="project-contact">
          <h3>Interested in Collaborating?</h3>
          <p>
            Let's create something amazing together! Reach out for project
            discussions or collaborations.
          </p>
          <a href="#contact" className="contact-btn">
            Contact Me
          </a>
        </div>
          </div>
        </div>
      </div>
    </section>
  );
}
