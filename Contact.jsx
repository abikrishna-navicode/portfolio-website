import React, { useState } from "react";
import "../styles/Contact.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Send email using Mailtrap's Email Sending API (example)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://sandbox.api.mailtrap.io/api/send/12345", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer YOUR_API_TOKEN", // replace with your Mailtrap token
        },
        body: JSON.stringify({
          from: { email: formData.email, name: formData.name },
          to: [{ email: "abikrishna01@gmail.com" }], // your email
          subject: "New Message from Portfolio Contact Form",
          text: formData.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    }
  };

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
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
          {status && <p className="status-message">{status}</p>}
        </form>
      </div>
    </section>
  );
}
