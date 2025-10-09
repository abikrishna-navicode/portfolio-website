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
  const [snackbar, setSnackbar] = useState({ message: "", type: "" });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // ✅ Replace with your real backend endpoint or email service API
      const response = await fetch("/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        setSnackbar({
          message: "✅ Message sent successfully!",
          type: "success",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setSnackbar({
        message: "❌ Failed to send message. Try again later.",
        type: "error",
      });
    } finally {
      setStatus("");
      // Hide snackbar after 4 seconds
      setTimeout(() => setSnackbar({ message: "", type: "" }), 4000);
    }
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p className="section-subtitle">Let’s work together or just say hello 👋</p>

      {/* Snackbar */}
      {snackbar.message && (
        <div className={`snackbar ${snackbar.type}`}>{snackbar.message}</div>
      )}

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div
            className="info-item clickable"
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=abikrishna01@gmail.com",
                "_blank"
              )
            }
          >
            <FaEnvelope size={20} className="icon" />
            <p>abikrishna01@gmail.com</p>
          </div>

          <div
            className="info-item clickable"
            onClick={() => {
              navigator.clipboard.writeText("+94771234567");
              window.open("tel:+94771234567");
            }}
          >
            <FaPhone size={20} className="icon" />
            <p>+94 77 123 4567</p>
          </div>

          <div
            className="info-item clickable"
            onClick={() =>
              window.open("https://www.google.com/maps?q=Jaffna,Sri+Lanka", "_blank")
            }
          >
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
            {status || "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
