import React from "react";
import FAQ from "@/components/faq";
import { fireEvent, render, screen } from "@testing-library/react";

describe("FAQ Component", () => {
  test("renders all FAQ items", () => {
    render(<FAQ />);
    const questions = screen.getAllByText(/where can i watch\?/i);
    expect(questions).toHaveLength(4);
  });

  test("first FAQ item should be active by default", () => {
    render(<FAQ />);
    const firstItem = screen
      .getAllByText(/where can i watch\?/i)[0]
      .closest(".faq-item");
    expect(firstItem).toHaveClass("active");
  });

  test("toggles FAQ item when clicked", () => {
    render(<FAQ />);
    const secondQuestion = screen.getAllByText(/where can i watch\?/i)[1];

    // Initially not active
    const secondItem = secondQuestion.closest(".faq-item");
    expect(secondItem).not.toHaveClass("active");

    // Click to activate
    fireEvent.click(secondQuestion);
    expect(secondItem).toHaveClass("active");

    // Click again to deactivate
    fireEvent.click(secondQuestion);
    expect(secondItem).not.toHaveClass("active");
  });
});
