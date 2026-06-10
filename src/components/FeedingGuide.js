import React from "react";
import "./FeedingGuide.css";

const feedData = [
  { animal: "🐄 Dairy Cow", amount: "8–15 kg/day", bar: 80 },
  { animal: "🐃 Buffalo", amount: "10–18 kg/day", bar: 95 },
  { animal: "🐐 Goat", amount: "1–3 kg/day", bar: 20 },
  { animal: "🐑 Sheep", amount: "1–2 kg/day", bar: 15 },
  { animal: "🐖 Pig", amount: "2–5 kg/day", bar: 30 },
  { animal: "🐔 Poultry/Chicks", amount: "0.1–0.2 kg/day", bar: 8 },
];

export default function FeedingGuide() {
  return (
    <section
      className="feeding section"
      id="feeding"
      aria-labelledby="feeding-title"
    >
      <div className="container">
        <div className="feeding__inner">
          <div className="feeding__header">
            <p className="section-label">Livestock Compatibility</p>
            <h2 className="section-title" id="feeding-title">
              Feeding Recommendations
            </h2>
            <p className="section-subtitle">
              Hydroponic fodder suits every type of livestock. Here's the
              recommended daily quantity for optimal health and productivity
              gains.
            </p>
          </div>
          <div
            className="feeding__table"
            role="table"
            aria-label="Feeding recommendations by animal"
          >
            <div className="feeding__thead" role="rowgroup">
              <div className="feeding__row feeding__row--head" role="row">
                <div role="columnheader">Animal Type</div>
                <div role="columnheader">Daily Recommended Amount</div>
                <div role="columnheader" aria-hidden="true">
                  Relative Quantity
                </div>
              </div>
            </div>
            <div className="feeding__tbody" role="rowgroup">
              {feedData.map((f, i) => (
                <div
                  key={f.animal}
                  className="feeding__row"
                  role="row"
                  style={{ animationDelay: `${i * 0.08}s` }}
                >
                  <div role="cell" className="feeding__animal">
                    {f.animal}
                  </div>
                  <div role="cell" className="feeding__amount">
                    {f.amount}
                  </div>
                  <div
                    role="cell"
                    className="feeding__bar-wrap"
                    aria-hidden="true"
                  >
                    <div
                      className="feeding__bar"
                      style={{ "--bar-width": `${f.bar}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
