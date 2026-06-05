import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "./Contact";

const openSpy = jest.fn();
beforeEach(() => {
  window.open = openSpy;
});

test("renders contact section with title", () => {
  render(<Contact />);
  expect(screen.getByText("Get In Touch")).toBeInTheDocument();
  expect(screen.getByText(/Build Your/)).toBeInTheDocument();
});

test("renders contact details", () => {
  render(<Contact />);
  expect(screen.getByText(/9071190756/)).toBeInTheDocument();
  expect(screen.getByText(/artechhydroagri/)).toBeInTheDocument();
  expect(screen.getByText(/Chitradurga/)).toBeInTheDocument();
});

test("renders contact form", () => {
  render(<Contact />);
  expect(screen.getByText("Request a Free Quote")).toBeInTheDocument();
  expect(screen.getByLabelText(/Your Name/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Phone Number/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Farm Type/)).toBeInTheDocument();
  expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
});

test("form submit opens WhatsApp and shows success", () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/Your Name/), {
    target: { value: "Test Farmer" },
  });
  fireEvent.change(screen.getByLabelText(/Phone Number/), {
    target: { value: "9876543210" },
  });
  fireEvent.click(screen.getByText("Send Enquiry"));
  expect(window.open).toHaveBeenCalledWith(
    expect.stringContaining("wa.me/919071190756"),
    "_blank",
  );
  expect(screen.getByText(/Thank you/)).toBeInTheDocument();
  expect(screen.getByText(/Test Farmer/)).toBeInTheDocument();
});

test("success screen shows WhatsApp message", () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/Your Name/), {
    target: { value: "Raj" },
  });
  fireEvent.change(screen.getByLabelText(/Phone Number/), {
    target: { value: "1234567890" },
  });
  fireEvent.click(screen.getByText("Send Enquiry"));
  expect(screen.getByText(/WhatsApp chat/)).toBeInTheDocument();
});

test("success screen has send another button", () => {
  render(<Contact />);
  fireEvent.change(screen.getByLabelText(/Your Name/), {
    target: { value: "Raj" },
  });
  fireEvent.change(screen.getByLabelText(/Phone Number/), {
    target: { value: "1234567890" },
  });
  fireEvent.click(screen.getByText("Send Enquiry"));
  fireEvent.click(screen.getByText("Send Another"));
  expect(screen.getByText("Request a Free Quote")).toBeInTheDocument();
});
