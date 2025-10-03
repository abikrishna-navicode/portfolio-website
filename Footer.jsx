import React from "react";
import "../styles/Footer.css";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Abikrishna. All Rights Reserved.</p>
      <div className="footer-socials">
        <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <FaGithub size={22} />
        </a>
      </div>
    </footer>
  );
}
