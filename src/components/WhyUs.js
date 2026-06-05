import React from "react";
import "./WhyUs.css";

const reasons = [
  {
    icon: "🏆",
    title: "Professional Setup",
    desc: "Expert installation by trained technicians for systems of all sizes.",
  },
  {
    icon: "🔧",
    title: "Technical Support",
    desc: "Ongoing guidance and after-sales support so your system performs optimally.",
  },
  {
    icon: "📐",
    title: "Customized Systems",
    desc: "Bespoke solutions designed around your farm's specific size and requirements.",
  },
  {
    icon: "⏱️",
    title: "Flexible Automation",
    desc: "Timer control configurable from 1 second to several minutes for irrigation and fogging.",
  },
  {
    icon: "💧",
    title: "Water Saving Design",
    desc: "Our systems are engineered to minimize water wastage while maximizing green fodder output.",
  },
  {
    icon: "💎",
    title: "High-Quality Materials",
    desc: "Only food-grade, durable components used — built to last years in farm environments.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="whyus section"
      id="why-us"
      aria-labelledby="whyus-title"
    >
      <div className="container">
        <div className="whyus__header">
          <p className="section-label">Why Choose ARTHA</p>
          <h2 className="section-title" id="whyus-title">
            The ARTHA Advantage
          </h2>
          <p className="section-subtitle">
            We don't just sell equipment — we deliver complete, supported
            solutions that keep working for your farm year after year.
          </p>
        </div>
        <div className="whyus__grid">
          {reasons.map((r) => (
            <div key={r.title} className="whyus__item">
              <div className="whyus__item-icon" aria-hidden="true">
                {r.icon}
              </div>
              <div>
                <h3 className="whyus__item-title">{r.title}</h3>
                <p className="whyus__item-desc">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
