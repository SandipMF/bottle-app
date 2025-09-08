import Footer from "@/components/footer";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Footer Component", () => {
  test("renders logo and navigation buttons", () => {
    render(<Footer />);

    expect(screen.getByAltText(/botol logo/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /shop/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /contact us/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /jurnal/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /custom/i })).toBeInTheDocument();
  });

  test("renders social media icons", () => {
    render(<Footer />);

    expect(screen.getByAltText(/facebook/i)).toBeInTheDocument();
    expect(screen.getByAltText(/instagram/i)).toBeInTheDocument();
    expect(screen.getByAltText(/twitter/i)).toBeInTheDocument();
  });

  test("renders footer links", () => {
    render(<Footer />);

    expect(screen.getByRole("link", { name: /faq/i })).toHaveAttribute(
      "href",
      "/faq"
    );
    expect(screen.getByRole("link", { name: /returns/i })).toHaveAttribute(
      "href",
      "/returns"
    );
    expect(screen.getByRole("link", { name: /ordering/i })).toHaveAttribute(
      "href",
      "/ordering"
    );
    expect(screen.getByRole("link", { name: /shipping/i })).toHaveAttribute(
      "href",
      "/shipping"
    );
    expect(
      screen.getByRole("link", { name: /personalization policies/i })
    ).toHaveAttribute("href", "/policies");
  });

  test("scrolls to section when nav button is clicked", () => {
    render(<Footer />);
    const scrollIntoViewMock = vi.fn();
    const fakeElement = { scrollIntoView: scrollIntoViewMock };

    vi.spyOn(document, "getElementById").mockReturnValue(
      fakeElement as unknown as HTMLElement
    );

    fireEvent.click(screen.getByRole("button", { name: /shop/i }));

    expect(document.getElementById).toHaveBeenCalledWith("products");
    expect(scrollIntoViewMock).toHaveBeenCalledWith({ behavior: "smooth" });

    vi.restoreAllMocks();
  });

  test("renders copyright text", () => {
    render(<Footer />);
    expect(
      screen.getByText(/copyright © 2023 botol. all rights reserved./i)
    ).toBeInTheDocument();
  });
});
