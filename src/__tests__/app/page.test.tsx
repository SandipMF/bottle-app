import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home Page", () => {
  test("renders without crashing", () => {
    render(<Home />);
    expect(screen.getByRole("main")).toBeInTheDocument();
  });

  test("renders Footer", () => {
    render(<Home />);
    expect(screen.getAllByRole("navigation")[0]).toBeInTheDocument(); // Navbar
    expect(
      screen.getByText(/The Ultimate Companion for Hydration/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Get in touch with us/i)).toBeInTheDocument();
    expect(screen.getByText(/©|copyright/i)).toBeInTheDocument();
  });
});
