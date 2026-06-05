import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, CheckCircle } from "lucide-react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    farm: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hi ARTHA! I'm interested in your hydroponic fodder systems.\n\n*Name:* ${form.name}\n*Phone:* ${form.phone}${form.farm ? `\n*Farm Type:* ${form.farm}` : ""}${form.message ? `\n*Message:* ${form.message}` : ""}\n\nPlease share a customized quotation. Thank you!`,
    );
    window.open(`https://wa.me/919071190756?text=${text}`, "_blank");
    setSubmitted(true);
  };

  return (
    <section
      className="contact section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title" id="contact-title">
              Let's Build Your
              <br />
              Fodder System
            </h2>
            <p
              className="section-subtitle"
              style={{ marginBottom: "var(--space-10)" }}
            >
              Ready to transform your farm with fresh, automated hydroponic
              fodder? Contact us for a free consultation and customized
              quotation.
            </p>
            <div className="contact__details">
              <a href="tel:+919071190756" className="contact__detail">
                <div className="contact__detail-icon">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="contact__detail-label">Phone</div>
                  <div className="contact__detail-value">+91 9071190756</div>
                </div>
              </a>
              <a
                href="mailto:artechhydroagri@gmail.com"
                className="contact__detail"
              >
                <div className="contact__detail-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="contact__detail-label">Email</div>
                  <div className="contact__detail-value">
                    artechhydroagri@gmail.com
                  </div>
                </div>
              </a>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="contact__detail-label">Location</div>
                  <div className="contact__detail-value">
                    Chitradurga, Karnataka – 577524
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <CheckCircle size={48} />
                <h3>Thank you, {form.name}!</h3>
                <p>
                  We've opened a WhatsApp chat with your enquiry details. Send
                  the message and we'll respond shortly.
                </p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setSubmitted(false)}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form
                className="contact__form"
                onSubmit={handleSubmit}
                aria-label="Contact form"
                noValidate
              >
                <h3 className="contact__form-title">Request a Free Quote</h3>
                <div className="form-group">
                  <label htmlFor="name">
                    Your Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Raju Kumar"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    autoComplete="tel"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="farm">Farm Type</label>
                  <select
                    id="farm"
                    name="farm"
                    value={form.farm}
                    onChange={handleChange}
                  >
                    <option value="">Select farm type...</option>
                    <option value="dairy">Dairy Farm</option>
                    <option value="cattle">Cattle Farm</option>
                    <option value="goat">Goat / Sheep Farm</option>
                    <option value="buffalo">Buffalo Farm</option>
                    <option value="poultry">Poultry Farm</option>
                    <option value="mixed">Mixed Livestock</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message / Requirements</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Tell us about your farm size and daily fodder requirements..."
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary contact__submit"
                >
                  <Send size={16} /> Send Enquiry
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
