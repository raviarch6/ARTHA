import React from "react";
import { MapPin, Award, FileText } from "lucide-react";
import "./About.css";

export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <div className="about__content">
            <p className="section-label">Who We Are</p>
            <h2 className="section-title" id="about-title">
              Karnataka's Leading
              <br />
              Hydroponic Fodder Experts
            </h2>
            <p
              className="section-subtitle"
              style={{ marginBottom: "var(--space-8)" }}
            >
              AR Tech Hydro Agri Automation is a Udyam-registered
              agri-tech company based in Madakaripura, Chitradurga, Karnataka. We design,
              supply Hydrophonics Equipments, and install complete hydroponic fodder systems also we sell agri crop and vegetable seeds— backed by
              professional support for every farm size.
            </p>
            <div className="about__badges">
              <div className="about__badge-item">
                <Award size={18} />
                <div>
                  <div className="about__badge-title">Udyam Registered</div>
                  <div className="about__badge-sub">UDYAM-KR-10-004987</div>
                </div>
              </div>
              <div className="about__badge-item">
                <FileText size={18} />
                <div>
                  <div className="about__badge-title">GST Registered</div>
                  <div className="about__badge-sub">29ALWPR7681R1ZD</div>
                </div>
              </div>
              <div className="about__badge-item">
                <MapPin size={18} />
                <div>
                  <div className="about__badge-title">Based In</div>
                  <div className="about__badge-sub">
                    Chitradurga, Karnataka – 577524
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="about__visual">
            <div className="about__img-block">
              <div className="about__img-placeholder" aria-hidden="true">
                <span className="about__img-emoji">🌿</span>
                <span>Hydroponic Fodder System</span>
              </div>
              <div className="about__img-tag">
                <span>✅</span> Quality Components
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
