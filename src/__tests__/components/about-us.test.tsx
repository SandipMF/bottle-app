import React from "react";
import AboutUs from "@/components/about-us";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

describe("AboutUs Component", () => {
  it("renders the about section with correct id and heading", () => {
    render(<AboutUs />);
    const section = screen.getByRole("region", { name: /about us/i });
    expect(section).toBeInTheDocument();

    const heading = screen.getByRole("heading", { name: /about us/i });
    expect(heading).toBeInTheDocument();
  });

  it("renders all feature texts", () => {
    render(<AboutUs />);
    expect(screen.getByText(/Wide Mouth Bottles To Clean Easily./i)).toBeInTheDocument();
    expect(screen.getByText(/Insulated Bottles For Hot And Cold Technology/i)).toBeInTheDocument();
    expect(screen.getByText(/Variation In Sizes, Styles, And Material/i)).toBeInTheDocument();
    expect(screen.getByText(/Made In India To Serve Authenticity/i)).toBeInTheDocument();
  });
});
