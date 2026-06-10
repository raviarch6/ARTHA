import React, { useRef, useEffect, useState } from "react";
import "./Stats.css";

const stats = [
  {
    value: 80,
    suffix: "%",
    label: "Water Savings",
    desc: "vs traditional fodder farming",
  },
  {
    value: 8,
    suffix: " Days",
    label: "Growth Cycle",
    desc: "from seed to fresh green fodder",
  },
  {
    value: 110,
    suffix: "kg",
    label: "Feeds 10–12 cows daily",
    desc: "Daily Output from 96-Tray System",
  },
  {
    value: 100,
    suffix: "+",
    label: "Happy Farm Clients",
    desc: "across Karnataka",
  },
];

function CountUp({ target, suffix, active }) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1800;
    const step = () => {
      start += 16;
      const progress = Math.min(start / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [active, target]);
  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setActive(true);
      },
      { threshold: 0.3 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref} aria-label="Key statistics">
      <div className="container">
        <div className="stats__grid">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="stats__item"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="stats__value">
                <CountUp target={s.value} suffix={s.suffix} active={active} />
              </div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
