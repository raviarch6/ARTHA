import React from "react";
import "./Benefits.css";

const benefits = [
  {
    emoji: "💧",
    title: "Saves 80–90% Water",
    desc: "Closed-loop irrigation drastically reduces water consumption compared to field-grown fodder.",
  },
  {
    emoji: "⚡",
    title: "Faster Growth Cycle",
    desc: "From seed to feed-ready green fodder in just 6–8 days — year-round, rain or shine.",
  },
  {
    emoji: "🥛",
    title: "Boosts Milk Production",
    desc: "Highly digestible nutrients improve animal health, resulting in measurable increases in milk yield.",
  },
  {
    emoji: "💰",
    title: "Reduces Feed Costs",
    desc: "Eliminates transportation, storage, and labour costs associated with conventional fodder procurement.",
  },
  {
    emoji: "🌍",
    title: "Minimal Land Required",
    desc: "Produces large quantities of fodder in a fraction of the space needed for traditional cultivation.",
  },
  {
    emoji: "🚫",
    title: "Chemical-Free Feed",
    desc: "No pesticides, no herbicides. Pure, fresh, living feed that improves livestock health naturally.",
  },
];

export default function Benefits() {
  return (
    <section
      className="benefits section"
      id="benefits"
      aria-labelledby="benefits-title"
    >
      <div className="container">
        <div className="benefits__header">
          <p className="section-label">Why Hydroponic Fodder</p>
          <h2 className="section-title" id="benefits-title">
            Benefits That Transform Your Farm
          </h2>
          <p className="section-subtitle">
            Every ARTHA system delivers measurable, proven advantages for your
            livestock and your bottom line.
          </p>
        </div>
        <div className="benefits__grid">
          {benefits.map((b, i) => (
            <div key={b.title} className="benefits__card">
              <div className="benefits__emoji" aria-hidden="true">
                {b.emoji}
              </div>
              <h3 className="benefits__title">{b.title}</h3>
              <p className="benefits__desc">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
