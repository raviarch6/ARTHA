import React from "react";
import { Droplets, Cpu, Sun, Home, Package, Sprout } from "lucide-react";
import "./Services.css";

const services = [
  {
    icon: <Droplets size={28} />,
    title: "Hydroponic System Setup",
    desc: "Complete PVC pipe or iron stand hydroponic fodder systems tailored to your farm size and output requirement.",
  },
  {
    icon: <Cpu size={28} />,
    title: "Agriculture Automation",
    desc: "Smart automation controllers with timer settings from 1 second to several minutes for irrigation and fogging.",
  },
  {
    icon: <Sun size={28} />,
    title: "Solar Powered Irrigation",
    desc: "Eco-friendly solar-powered irrigation controllers to cut electricity costs while ensuring reliable watering.",
  },
  {
    icon: <Home size={28} />,
    title: "Polyhouse & Grow Systems",
    desc: "Complete polyhouse construction and grow system installation for year-round protected cultivation.",
  },
  {
    icon: <Package size={28} />,
    title: "Trays & Equipment Supply",
    desc: "High-quality hydroponic trays, net/mesh, foggers, sprinklers and all growing accessories supplied directly.",
  },
  {
    icon: <Sprout size={28} />,
    title: "Seeds & Accessories",
    desc: "Quality seeds and growing media specifically selected for optimal hydroponic fodder yield.",
  },
];

export default function Services() {
  return (
    <section
      className="services section"
      id="services"
      aria-labelledby="services-title"
    >
      <div className="container">
        <div className="services__header">
          <p className="section-label">What We Offer</p>
          <h2 className="section-title" id="services-title">
            Complete Hydroponic Solutions
          </h2>
          <p className="section-subtitle">
            From system design to installation and ongoing technical support —
            we handle everything so you can focus on running your farm
            profitably.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="services__card card"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="services__icon" aria-hidden="true">
                {s.icon}
              </div>
              <h3 className="services__title">{s.title}</h3>
              <p className="services__desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
