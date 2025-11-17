"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyOJkV1rTX1atEzwe8MVAB_cKKnx4411r0MMMfTxYifKGZhPW3u42-BvIDRWl88Joc4/exec";

    const formDataToSend = new FormData();
    formDataToSend.append("fullName", formData.fullName);
    formDataToSend.append("company", formData.company);
    formDataToSend.append("industry", formData.industry);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("phone", formData.phone || "Not provided");
    formDataToSend.append("message", formData.message);
    formDataToSend.append("timestamp", new Date().toLocaleString());

    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formDataToSend,
      });

      // Reset form
      setFormData({
        fullName: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        message: "",
      });

      alert("Thank you! Your message has been sent successfully.");
    } catch (error) {
      console.error("Error:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <main className="main">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="hero-title">Contact Us</h1>
      </section>

      {/* Contact Content */}
      <section className="section contact-section">
        <div className="contact-container">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h2 className="contact-section-title">Get In Touch</h2>
            <p className="contact-section-subtitle">
              Ready to explore energy brokerage opportunities? Our team is here
              to discuss your requirements and provide tailored solutions.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="company" className="form-label">
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="industry" className="form-label">
                  Industry *
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Select your industry</option>
                  <option value="energy-production">Energy Production</option>
                  <option value="distribution">Distribution</option>
                  <option value="oil-gas">Oil & Gas</option>
                  <option value="petrochemicals">Petrochemicals</option>
                  <option value="utilities">Utilities</option>
                  <option value="industrial">Industrial Manufacturing</option>
                  <option value="trading">Commodity Trading</option>
                  <option value="shipping">Shipping & Logistics</option>
                  <option value="financial">Financial Services</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  rows={6}
                  placeholder="Tell us about your energy commodity requirements, trading objectives, or any specific questions you may have..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn">
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section">
            <div className="contact-info-card">
              <div className="contact-info-icon">📧</div>
              <div className="contact-info-content">
                <h3>Email</h3>
                <p>contact@intergas.com.au</p>
                <p className="contact-info-note">Response times may vary</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🕒</div>
              <div className="contact-info-content">
                <h3>Business Hours</h3>
                <p>Monday - Friday</p>
                <p>9:00 AM - 6:00 PM AEST</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">📍</div>
              <div className="contact-info-content">
                <h3>Headquarters</h3>
                <p>Sydney, NSW</p>
                <p>Australia</p>
              </div>
            </div>

            <div className="contact-info-card">
              <div className="contact-info-icon">🌐</div>
              <div className="contact-info-content">
                <h3>Follow Us</h3>
                <div className="social-links">
                  <div className="social-icon">
                    <img src="/linkedin.png" alt="LinkedIn" />
                  </div>
                  <div className="social-icon">
                    <img src="/instagram.png" alt="Instagram" />
                  </div>
                  <div className="social-icon">
                    <img src="/x.png" alt="X" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
