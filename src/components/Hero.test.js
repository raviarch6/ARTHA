import React from "react";
import { render, screen } from "@testing-library/react";
import Hero from "./Hero";

test("renders the hero title and description", () => {
  render(<Hero />);
  expect(screen.getByText(/Fresh Green Fodder/i)).toBeInTheDocument();
  expect(screen.getByText(/Every Single Day/i)).toBeInTheDocument();
});

test("renders highlight items", () => {
  render(<Hero />);
  expect(screen.getByText("No Soil Required")).toBeInTheDocument();
  expect(screen.getByText("80–90% Water Saving")).toBeInTheDocument();
  expect(screen.getByText("Ready in 6–8 Days")).toBeInTheDocument();
});

test("renders CTA buttons", () => {
  render(<Hero />);
  expect(screen.getByText("View Pricing")).toBeInTheDocument();
  expect(screen.getByText("Call Us Now")).toBeInTheDocument();
});

test("renders stat pills on desktop", () => {
  render(<Hero />);
  expect(screen.getByText("Less Water")).toBeInTheDocument();
  expect(screen.getByText("Days Growth")).toBeInTheDocument();
  expect(screen.getByText("Max Daily Output")).toBeInTheDocument();
});
