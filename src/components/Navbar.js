import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import "./Navbar.css";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Benefits", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
      role="banner"
    >
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo" aria-label="ARTHA Automation Home">
          <span className="navbar__logo-icon">
            <img
           src={theme === "dark" ? "/Logo_Dark.png" : "/Logo_HD.png"}
          alt="ARTHA Krushi Hydroponic Green Fodder Systems"
          className="navbar__logo-img"
  />
          </span>
          <span className="navbar__logo-text">
            <span className="navbar__logo-sub">ARTHA</span>
            <span className="navbar__logo-primary">Krushi</span>
          </span>
        </a>

        <nav
          className="navbar__links"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <button
            className="navbar__theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="#contact" className="btn btn-primary navbar__cta">
            Get a Quote
          </a>
          <button
            className="navbar__menu-toggle"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="navbar__mobile-menu"
          role="dialog"
          aria-label="Mobile navigation"
        >
          <nav>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn btn-primary navbar__mobile-cta"
              onClick={closeMenu}
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
