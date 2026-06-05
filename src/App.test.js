import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  document.documentElement.removeAttribute("data-theme");
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
});

test("renders the app without crashing", () => {
  render(<App />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
  expect(screen.getByRole("contentinfo")).toBeInTheDocument();
});

test("renders skip link", () => {
  render(<App />);
  const skip = screen.getByText("Skip to main content");
  expect(skip).toBeInTheDocument();
  expect(skip).toHaveClass("skip-link");
});

test("renders all major sections", () => {
  render(<App />);
  expect(screen.getByRole("region", { name: "Hero section" })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: "Key statistics" })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Karnataka's Leading/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Complete Hydroponic/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /^How It Works$/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Benefits That Transform/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Feeding Recommendations/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Hydroponic System Packages/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /The ARTHA Advantage/i })).toBeInTheDocument();
  expect(screen.getByRole("region", { name: /Let's Build/i })).toBeInTheDocument();
});

test("navbar has navigation links", () => {
  render(<App />);
  const nav = screen.getByLabelText("Main navigation");
  expect(nav).toBeInTheDocument();
  expect(nav.children.length).toBeGreaterThan(0);
});

test("footer renders company info", () => {
  render(<App />);
  const arthaMatches = screen.getAllByText(/ARTHA/);
  expect(arthaMatches.length).toBeGreaterThanOrEqual(1);
  const gstMatches = screen.getAllByText(/GST/);
  expect(gstMatches.length).toBeGreaterThanOrEqual(1);
  const udyamMatches = screen.getAllByText(/Udyam/);
  expect(udyamMatches.length).toBeGreaterThanOrEqual(1);
});

test("sets light theme by default in test environment", () => {
  render(<App />);
  expect(document.documentElement.getAttribute("data-theme")).toBe("light");
});

test("sets dark theme when system prefers dark", () => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query === "(prefers-color-scheme: dark)" ? true : false,
    media: query,
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));

  render(<App />);
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
});

test("theme toggle switches to dark and back", () => {
  render(<App />);
  const btn = screen.getByLabelText(/Switch to dark mode/i);
  fireEvent.click(btn);
  expect(document.documentElement.getAttribute("data-theme")).toBe("dark");
  expect(screen.getByLabelText(/Switch to light mode/i)).toBeInTheDocument();
  fireEvent.click(screen.getByLabelText(/Switch to light mode/i));
  expect(document.documentElement.getAttribute("data-theme")).toBe("light");
});
