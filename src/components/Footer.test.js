import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

beforeEach(() => {
  jest.useFakeTimers();
  jest.setSystemTime(new Date("2026-05-27"));
});

afterEach(() => {
  jest.useRealTimers();
});

test("renders footer with logo", () => {
  render(<Footer />);
  expect(screen.getByText("ARTHA")).toBeInTheDocument();
  expect(screen.getByText("Automation")).toBeInTheDocument();
});

test("renders registration details", () => {
  render(<Footer />);
  expect(screen.getByText(/GST/)).toBeInTheDocument();
  expect(screen.getByText(/Udyam/)).toBeInTheDocument();
});

test("renders contact information", () => {
  render(<Footer />);
  expect(screen.getByText(/9071190756/)).toBeInTheDocument();
  expect(screen.getByText(/artechhydroagri/)).toBeInTheDocument();
  expect(screen.getByText(/Chitradurga/)).toBeInTheDocument();
});

test("renders service links", () => {
  render(<Footer />);
  expect(screen.getByText("Hydroponic System Setup")).toBeInTheDocument();
  expect(screen.getByText("Agriculture Automation")).toBeInTheDocument();
  expect(screen.getByText("Solar Irrigation Controllers")).toBeInTheDocument();
  expect(screen.getByText("Polyhouse Installation")).toBeInTheDocument();
  expect(screen.getByText("Equipment Supply")).toBeInTheDocument();
});

test("renders quick links", () => {
  render(<Footer />);
  expect(screen.getByText("About Us")).toBeInTheDocument();
  expect(screen.getByText("How It Works")).toBeInTheDocument();
  expect(screen.getByText("Benefits")).toBeInTheDocument();
  expect(screen.getByText("Pricing")).toBeInTheDocument();
  const contactLinks = screen.getAllByText("Contact");
  expect(contactLinks.length).toBeGreaterThanOrEqual(1);
});

test("renders current year in copyright", () => {
  render(<Footer />);
  expect(screen.getByText(/2026/)).toBeInTheDocument();
});

test("renders built with love message", () => {
  render(<Footer />);
  expect(screen.getByText(/Indian Farmers/)).toBeInTheDocument();
});
