import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Pricing from "./Pricing";

test("renders pricing section header", () => {
  render(<Pricing />);
  expect(screen.getByText("Transparent Pricing")).toBeInTheDocument();
  expect(screen.getByText("Hydroponic System Packages")).toBeInTheDocument();
});

test("renders both tabs", () => {
  render(<Pricing />);
  expect(screen.getByText(/PVC Pipe System/)).toBeInTheDocument();
  expect(screen.getByText(/Iron Stand System/)).toBeInTheDocument();
});

test("PVC tab is active by default", () => {
  render(<Pricing />);
  const pvcTab = screen.getByText(/PVC Pipe System/);
  expect(pvcTab).toHaveAttribute("aria-selected", "true");
});

test("switching tabs changes visible content", () => {
  render(<Pricing />);
  expect(screen.getByText("12 Trays")).toBeInTheDocument();
  const ironTab = screen.getByText(/Iron Stand System/);
  fireEvent.click(ironTab);
  expect(ironTab).toHaveAttribute("aria-selected", "true");
});

test("shows popular badge on most popular model", () => {
  render(<Pricing />);
  const badges = screen.getAllByText("Most Popular");
  expect(badges.length).toBeGreaterThanOrEqual(1);
});

test('pricing cards show "Get Quote" links', () => {
  render(<Pricing />);
  const quotes = screen.getAllByText("Get Quote");
  expect(quotes.length).toBeGreaterThanOrEqual(1);
});
