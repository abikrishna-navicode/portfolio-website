import React, { useState, useEffect, useRef } from "react";
import "../styles/Header.css";

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const cvButtonRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((section) => observer.observe(section));

    const cvObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.5 }
    );
    if (cvButtonRef.current) cvObserver.observe(cvButtonRef.current);

    const handleScroll = () => {
      const header = document.querySelector(".header");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      if (cvButtonRef.current) cvObserver.unobserve(cvButtonRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Abikrishna</div>
        <nav className={`nav ${menuOpen ? "open" : ""}`} ref={navRef}>
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === "home" ? "active" : ""}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className={activeSection === "about" ? "active" : ""}
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className={activeSection === "skills" ? "active" : ""}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className={activeSection === "projects" ? "active" : ""}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={activeSection === "contact" ? "active" : ""}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Download CV Button */}
          <a href="/cv.pdf" className="btn-download" ref={cvButtonRef}>
            Download CV
          </a>
        </nav>
      </div>
      
{/* Hamburger Menu */}
      <div className={`menu-toggle ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
}