import LandingPage from "@/components/landing";
import { render, screen } from "@testing-library/react";

describe("Landing Component", () => {
  test("renders title and subtitle", () => {
    render(<LandingPage />);
    expect(
      screen.getByText("The Ultimate Companion for Hydration")
    ).toBeInTheDocument();
    expect(
      screen.getByText(/we believe in the power of hydration/i)
    ).toBeInTheDocument();
  });

  test("renders inquiry button", () => {
    render(<LandingPage />);
    expect(
      screen.getByRole("button", { name: /inquiry now/i })
    ).toBeInTheDocument();
  });

  test("renders left and right bottles", () => {
    render(<LandingPage />);
    expect(screen.getByAltText("Bottle Left")).toBeInTheDocument();
    expect(screen.getByAltText("Bottle Right")).toBeInTheDocument();
  });
});
