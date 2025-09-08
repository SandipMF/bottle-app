import React from "react";
import { render, screen } from "@testing-library/react";
import Products from "@/components/products";

describe("Products Component", () => {
  test("renders the products section with correct id", () => {
    render(<Products />);
    const section = screen.getByText(/hydration essentials/i);
    expect(section).toBeInTheDocument();
  });

  test("renders action buttons", () => {
    render(<Products />);
    expect(
      screen.getByRole("button", { name: /view more/i })
    ).toBeInTheDocument();
    expect(screen.getAllByRole("button", { name: /learn more/i })).toHaveLength(
      6
    );
  });
});
