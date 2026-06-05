import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Navbar from "./Navbar";

const defaultProps = {
  theme: "light",
  toggleTheme: jest.fn(),
};

test("renders the logo and brand name", () => {
  render(<Navbar {...defaultProps} />);
  expect(screen.getByText("ARTHA")).toBeInTheDocument();
  expect(screen.getByText("Automation")).toBeInTheDocument();
});

test("renders all navigation links", () => {
  render(<Navbar {...defaultProps} />);
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Services")).toBeInTheDocument();
  expect(screen.getByText("How It Works")).toBeInTheDocument();
  expect(screen.getByText("Benefits")).toBeInTheDocument();
  expect(screen.getByText("Pricing")).toBeInTheDocument();
  expect(screen.getByText("Contact")).toBeInTheDocument();
});

test("renders theme toggle button", () => {
  render(<Navbar {...defaultProps} />);
  expect(screen.getByLabelText(/Switch to dark mode/i)).toBeInTheDocument();
});

test("calls toggleTheme on button click", () => {
  const toggleTheme = jest.fn();
  render(<Navbar {...defaultProps} toggleTheme={toggleTheme} />);
  fireEvent.click(screen.getByLabelText(/Switch to dark mode/i));
  expect(toggleTheme).toHaveBeenCalledTimes(1);
});

test("shows correct toggle label in dark mode", () => {
  render(<Navbar {...defaultProps} theme="dark" />);
  expect(screen.getByLabelText(/Switch to light mode/i)).toBeInTheDocument();
});

test("renders mobile menu toggle", () => {
  render(<Navbar {...defaultProps} />);
  expect(screen.getByLabelText(/Open menu/i)).toBeInTheDocument();
});

test("mobile menu opens and closes", () => {
  render(<Navbar {...defaultProps} />);
  const menuBtn = screen.getByLabelText(/Open menu/i);
  fireEvent.click(menuBtn);
  expect(screen.getByLabelText("Mobile navigation")).toBeInTheDocument();
  expect(screen.getByLabelText(/Close menu/i)).toBeInTheDocument();
});

test("mobile menu shows all links", () => {
  render(<Navbar {...defaultProps} />);
  fireEvent.click(screen.getByLabelText(/Open menu/i));
  expect(screen.getAllByText("About").length).toBeGreaterThanOrEqual(2);
  expect(screen.getAllByText("Services").length).toBeGreaterThanOrEqual(2);
});
