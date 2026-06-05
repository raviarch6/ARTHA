import React from "react";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";
import "./Hero.css";

const highlights = [
  "No Soil Required",
  "80–90% Water Saving",
  "Ready in 6–8 Days",
];

export default function Hero() {
  return (
    <section className="hero" aria-label="Hero section">
      <div className="hero__bg-pattern" aria-hidden="true" />
      <div className="container hero__inner">
        <div className="hero__content">
          <div
            className="badge hero__badge"
            style={{ animationDelay: "0s", animation: "fadeUp 0.6s both" }}
          >
            🌱 Karnataka's Trusted Hydroponic Experts
          </div>
          <h1
            className="hero__title"
            style={{ animation: "fadeUp 0.6s 0.15s both" }}
          >
            Fresh Green Fodder
            <br />
            <em className="hero__title-em">Every Single Day</em>
          </h1>
          <p
            className="hero__desc"
            style={{ animation: "fadeUp 0.6s 0.28s both" }}
          >
            ARTHA Automation delivers professional hydroponic fodder systems for
            dairy farms, cattle farms, goat farms, and all livestock businesses
            across Karnataka. Grow 100+ kg of nutritious feed daily — no soil,
            minimal water, maximum results.
          </p>
          <ul
            className="hero__highlights"
            role="list"
            style={{ animation: "fadeUp 0.6s 0.38s both" }}
          >
            {highlights.map((h) => (
              <li key={h} className="hero__highlight">
                <CheckCircle size={15} />
                {h}
              </li>
            ))}
          </ul>
          <div
            className="hero__actions"
            style={{ animation: "fadeUp 0.6s 0.48s both" }}
          >
            <a href="#pricing" className="btn btn-primary hero__btn-primary">
              View Pricing <ArrowRight size={16} />
            </a>
            <a href="tel:+919071190756" className="btn btn-secondary">
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </div>

        <div
          className="hero__visual"
          style={{ animation: "fadeIn 0.8s 0.3s both" }}
        >
          <div className="hero__card-stack">
            <div className="hero__visual-card hero__visual-card--main">
              <div className="hero__plant-icon" aria-hidden="true">
                🌾
              </div>
              <div>
                <div className="hero__visual-title">Hydroponic Fodder</div>
                <div className="hero__visual-sub">
                  Fresh • Nutritious • Daily
                </div>
              </div>
            </div>
            <div className="hero__stat-pill hero__stat-pill--1">
              <span className="hero__stat-num">80%</span>
              <span className="hero__stat-label">Less Water</span>
            </div>
            <div className="hero__stat-pill hero__stat-pill--2">
              <span className="hero__stat-num">6–8</span>
              <span className="hero__stat-label">Days Growth</span>
            </div>
            <div className="hero__stat-pill hero__stat-pill--3">
              <span className="hero__stat-num">110kg</span>
              <span className="hero__stat-label">Max Daily Output</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
