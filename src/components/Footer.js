import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-icon">
                <img src="/Logo_HD.png" alt="ARTHA Automation" className="footer__logo-img" />
              </span>
              <span className="footer__logo-text">
                <span className="footer__logo-primary">ARTHA</span>
                <span className="footer__logo-sub">Automation</span>
              </span>
            </div>
            <p className="footer__tagline">
              AR Tech Hydro Agri Automation — Karnataka's trusted hydroponic
              fodder specialists. Empowering Indian farmers with
              water-efficient, nutrient-rich green feed solutions.
            </p>
            <div className="footer__reg">
              <span>📋 GST: 29ALWPR7681R1ZD</span>
              <span>✅ Udyam: UDYAM-KR-10-004987</span>
            </div>
          </div>

          <div className="footer__links">
            <h3 className="footer__heading">Services</h3>
            <ul role="list">
              <li><a href="#services">Hydroponic System Setup</a></li>
              <li><a href="#services">Agriculture Automation</a></li>
              <li><a href="#services">Solar Irrigation Controllers</a></li>
              <li><a href="#services">Polyhouse Installation</a></li>
              <li><a href="#services">Equipment Supply</a></li>
            </ul>
          </div>

          <div className="footer__links">
            <h3 className="footer__heading">Quick Links</h3>
            <ul role="list">
              <li><a href="#about">About Us</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#benefits">Benefits</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__heading">Contact</h3>
            <ul role="list">
              <li>
                <a href="tel:+919071190756" className="footer__contact-item">
                  <Phone size={15} /> +91 9071190756
                </a>
              </li>
              <li>
                <a
                  href="mailto:artechhydroagri@gmail.com"
                  className="footer__contact-item"
                >
                  <Mail size={15} /> artechhydroagri@gmail.com
                </a>
              </li>
              <li className="footer__contact-item">
                <MapPin size={15} /> Chitradurga, Karnataka – 577524
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} ARTHA Automation — AR Tech Hydro Agri Automation. All rights reserved.
          </p>
          <p>
            Built with{" "}
            <span className="footer__bottom-heart" aria-label="love">❤️</span>{" "}
            for Indian Farmers
          </p>
        </div>
      </div>
    </footer>
  );
}
