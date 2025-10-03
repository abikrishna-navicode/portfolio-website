import React from "react";
import "../styles/Hero.css";
import { FaLinkedin, FaGithub, FaStar } from "react-icons/fa";
import profileImg from "../assets/Profile.png"; // add your image here

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-left">
        <h1>Hello, I’m <span>Abikrishna</span></h1>
        <h3>Business Analyst & UI/UX Engineer</h3>
        <p>
          I analyze business needs and solve problems, focusing on design,
          research, and usability to create intuitive solutions.
        </p>
        <div className="hero-buttons">
          <a href="#about" className="btn-primary">Get Started</a>
          <a href="/download" className="btn-secondary">Watch Intro</a>
        </div>
        <div className="hero-socials">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaGithub /></a>
          <span className="experience"><FaStar /> 3+ Years Experience</span>
        </div>
      </div>
      <div className="hero-right">
        <img src={profileImg} alt="Abikrishna" />
      </div>
    </section>
  );
}
