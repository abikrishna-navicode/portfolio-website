import React from "react";
import "./../styles/Hero.css"; 
import heroImg from "../assets/Profile.png"; 
import { FaLinkedin, FaGithub, FaAward } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hello, I’m <span className="hero-name">Abikrishna</span></h1>
        <h2>Business Analyst & UI/UX Engineer</h2>
        <p>I analyze business needs and solve problems while focusing on user research and usability to create effective, user-friendly solutions.</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn-hire">Hire Me</a>
          <a href="#projects" className="btn-projects">See My Projects</a>
        </div>

        <div className="hero-socials">
          <a href="#"><FaLinkedin className="social-icon" /></a>
          <a href="#"><FaGithub className="social-icon" /></a>
        </div>

        <div className="experience">
          <FaAward className="experience-icon" />
          <span>3+ Years Experience</span>
        </div>
      </div>

      <div className="hero-right">
        <div className="profile-frame">
          <img src={heroImg} alt="Abikrishna" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}