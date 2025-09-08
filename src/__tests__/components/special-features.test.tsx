import SpecialFeatures from "@/components/special-features";
import { render, screen } from "@testing-library/react";

describe("SpecialFeatures", () => {
  test("renders the section with correct id", () => {
    render(<SpecialFeatures />);
    const section = document.querySelector("section#features");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute("id", "features");
  });

  test("renders the main bottle image", () => {
    render(<SpecialFeatures />);
    expect(screen.getByAltText("Bottle")).toBeInTheDocument();
  });

  test("renders all feature items with text and icons", () => {
    render(<SpecialFeatures />);

    expect(screen.getByAltText("Vacuum")).toBeInTheDocument();
    expect(screen.getByText("Vacuum Bottles")).toBeInTheDocument();

    expect(screen.getByAltText("Fridge")).toBeInTheDocument();
    expect(screen.getByText("Fridge Bottles & Jugs")).toBeInTheDocument();

    expect(screen.getByAltText("Borosilicate")).toBeInTheDocument();
    expect(screen.getByText("Borosilicate Bottles")).toBeInTheDocument();

    expect(screen.getByAltText("Kettle")).toBeInTheDocument();
    expect(screen.getByText("Kettles")).toBeInTheDocument();
  });
});
