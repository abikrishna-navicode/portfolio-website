import React from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let’s work together or just say hello 👋</p>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-item">
            <FaEnvelope size={20} className="icon" />
            <p>abikrishna01@gmail.com</p>
          </div>
          <div className="info-item">
            <FaPhone size={20} className="icon" />
            <p>+94 77 123 4567</p>
          </div>
          <div className="info-item">
            <FaMapMarkerAlt size={20} className="icon" />
            <p>Jaffna, Sri Lanka</p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
