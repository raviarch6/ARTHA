import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import About from "./components/About";
import Services from "./components/Services";
import HowItWorks from "./components/HowItWorks";
import Benefits from "./components/Benefits";
import FeedingGuide from "./components/FeedingGuide";
import Pricing from "./components/Pricing";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() =>
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light",
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="app">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Services />
        <HowItWorks />
        <Benefits />
        <FeedingGuide />
        <Pricing />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
