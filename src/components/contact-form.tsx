"use client";
import React, { useState } from "react";
import Image from "next/image";
import "../styles/contact-form.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Left Image */}
        <div className="contact-image">
          <Image
            src="/images/contact-section-bg.png"
            alt="Water Bottle"
            width={500}
            height={600}
            priority
          />
        </div>

        {/* Right Form */}
        <div className="contact-form-wrapper">
          <h2 className="contact-title">Get in touch with us</h2>
          <p className="contact-subtitle">
            Hi, I’m Amanda. Need help? Use the form below or email me at{" "}
            <a href="mailto:hello@xyz.com">hello@xyz.com</a>
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Rachel Joe"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Rachel@domain.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your query here....."
              value={formData.message}
              onChange={handleChange}
              rows={4}
              required
            />

            <button type="submit" className="submit-btn">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
