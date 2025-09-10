import React from "react";
import Navbar from "@/components/navbar";
import { fireEvent, render, screen } from "@testing-library/react";
describe("Navbar Component", () => {
  test("renders logo", () => {
    render(<Navbar />);
    expect(screen.getByAltText("BOTOL Logo")).toBeInTheDocument();
  });

  test("renders navigation buttons", () => {
    render(<Navbar />);
    const buttons = ["Shop", "Contact us", "About", "Journal", "Custom"];
    buttons.forEach((label) => {
      expect(screen.getByRole("button", { name: label })).toBeInTheDocument();
    });
  });

  test("renders inquiry button", () => {
    render(<Navbar />);
    expect(
      screen.getByRole("button", { name: "Inquiry Now" })
    ).toBeInTheDocument();
  });

  test("calls scrollToSectionById when a nav button is clicked", () => {
    // mock scrollIntoView
    const mockScrollIntoView = vi.fn();

    // create a fake HTMLElement that includes scrollIntoView
    const fakeElement = {
      scrollIntoView: mockScrollIntoView,
    } as unknown as HTMLElement;

    vi.spyOn(document, "getElementById").mockReturnValue(fakeElement);

    render(<Navbar />);
    fireEvent.click(screen.getByRole("button", { name: /shop/i }));

    expect(mockScrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    vi.restoreAllMocks();
  });
});
