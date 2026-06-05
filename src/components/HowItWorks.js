import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    num: "01",
    title: "Seed Selection",
    desc: "High-quality seeds (maize, barley, wheat) are selected and cleaned for optimal germination in the hydroponic system.",
  },
  {
    num: "02",
    title: "Tray Loading",
    desc: "Seeds are spread uniformly across our 2×1.5 ft hydroponic trays and arranged on PVC pipe or iron stand racks.",
  },
  {
    num: "03",
    title: "Automated Watering",
    desc: "Our smart automation system irrigates and fogs at precise intervals — adjustable from 1 second to several minutes — with no manual effort.",
  },
  {
    num: "04",
    title: "Controlled Growth",
    desc: "Seeds germinate and grow in a temperature-controlled, chemical-free environment for exactly 6–8 days.",
  },
  {
    num: "05",
    title: "Harvest & Feed",
    desc: "Fresh, nutrient-rich green fodder mats are harvested daily and fed directly to livestock — roots, stems, and all.",
  },
];

export default function HowItWorks() {
  return (
    <section
      className="hiw section"
      id="how-it-works"
      aria-labelledby="hiw-title"
    >
      <div className="container">
        <div className="hiw__header">
          <p className="section-label">The Process</p>
          <h2 className="section-title" id="hiw-title">
            How It Works
          </h2>
          <p className="section-subtitle">
            A 6–8 day journey from seed to 100% fresh, nutritious livestock
            feed.
          </p>
        </div>
        <div className="hiw__steps">
          {steps.map((step, i) => (
            <div key={step.num} className="hiw__step">
              <div className="hiw__step-num" aria-hidden="true">
                {step.num}
              </div>
              <div className="hiw__step-line" aria-hidden="true" />
              <div className="hiw__step-content">
                <h3 className="hiw__step-title">{step.title}</h3>
                <p className="hiw__step-desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
