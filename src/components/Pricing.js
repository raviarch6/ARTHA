import React, { useState } from "react";
import { Check } from "lucide-react";
import "./Pricing.css";

const pvcModels = [
  { trays: 12, output: "15–20", area: "4×3", price: 21800 },
  { trays: 16, output: "22–25", area: "2×6", price: 28400 },
  { trays: 24, output: "25–30", area: "4×6", price: 41600 },
  { trays: 32, output: "30–35", area: "4×9", price: 52800 },
  { trays: 48, output: "55–65", area: "4×12", price: 79200, popular: true },
  { trays: 72, output: "80–85", area: "4×18", price: 118800 },
  { trays: 96, output: "100–110", area: "4×24", price: 158400 },
];

const ironModels = [
  { trays: 12, output: "15–20", area: "4×3", price: 27200 },
  { trays: 18, output: "22–25", area: "4×6", price: 39800 },
  { trays: 24, output: "25–30", area: "4×9", price: 52400 },
  { trays: 32, output: "30–35", area: "4×9", price: 67200, popular: true },
  { trays: 48, output: "55–65", area: "4×12", price: 100800 },
];

function formatINR(n) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Pricing() {
  const [tab, setTab] = useState("pvc");
  const models = tab === "pvc" ? pvcModels : ironModels;

  return (
    <section
      className="pricing section"
      id="pricing"
      aria-labelledby="pricing-title"
    >
      <div className="container">
        <div className="pricing__header">
          <p className="section-label">Transparent Pricing</p>
          <h2 className="section-title" id="pricing-title">
            Hydroponic System Packages
          </h2>
          <p className="section-subtitle">
            Choose from PVC Pipe or Iron Stand systems based on your farm's
            needs. All prices exclude transportation. Valid for 10 days from
            quote date.
          </p>
        </div>

        <div className="pricing__tabs" role="tablist" aria-label="System type">
          <button
            className={`pricing__tab${tab === "pvc" ? " pricing__tab--active" : ""}`}
            onClick={() => setTab("pvc")}
            role="tab"
            aria-selected={tab === "pvc"}
          >
            🟢 PVC Pipe System
          </button>
          <button
            className={`pricing__tab${tab === "iron" ? " pricing__tab--active" : ""}`}
            onClick={() => setTab("iron")}
            role="tab"
            aria-selected={tab === "iron"}
          >
            🔵 Iron Stand System
          </button>
        </div>

        <div className="pricing__grid" role="tabpanel">
          {models.map((m) => (
            <div
              key={`${tab}-${m.trays}`}
              className={`pricing__card card${m.popular ? " pricing__card--popular" : ""}`}
            >
              {m.popular && (
                <div className="pricing__popular-badge">Most Popular</div>
              )}
              <div className="pricing__trays">{m.trays} Trays</div>
              <div className="pricing__price">{formatINR(m.price)}</div>
              <div className="pricing__note">excl. transport</div>
              <ul className="pricing__features" role="list">
                <li>
                  <Check size={14} /> Output: <strong>{m.output} kg/day</strong>
                </li>
                <li>
                  <Check size={14} /> Area: <strong>{m.area} Feet</strong>
                </li>
                <li>
                  <Check size={14} /> Auto irrigation machine
                </li>
                <li>
                  <Check size={14} /> Trays, net/mesh & foggers
                </li>
              </ul>
              <a
                href="#contact"
                className={`btn ${m.popular ? "btn-primary" : "btn-secondary"} pricing__cta`}
              >
                Get Quote
              </a>
            </div>
          ))}
        </div>

        <div className="pricing__note-box">
          <strong>Note:</strong> Quotation includes hydroponic setup table,
          net/mesh, trays, automatic machine, and foggers/sprinklers.
          Transportation charged separately.
        </div>
      </div>
    </section>
  );
}
