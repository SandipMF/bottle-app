import ContactForm from "@/components/contact-form";
import { fireEvent, render, screen } from "@testing-library/react";

describe("ContactForm Component", () => {
  test("renders the contact form with all fields", () => {
    render(<ContactForm />);

    expect(
      screen.getByRole("heading", { name: /get in touch with us/i })
    ).toBeInTheDocument();

    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  test("updates input values when typing", () => {
    render(<ContactForm />);

    const nameInput = screen.getByLabelText(/name/i) as HTMLInputElement;
    const emailInput = screen.getByLabelText(/email/i) as HTMLInputElement;
    const messageInput = screen.getByLabelText(
      /message/i
    ) as HTMLTextAreaElement;

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Hello there!" } });

    expect(nameInput.value).toBe("John Doe");
    expect(emailInput.value).toBe("john@example.com");
    expect(messageInput.value).toBe("Hello there!");
  });

  test("submits the form and logs form data", () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});
    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), {
      target: { value: "Jane Smith" },
    });
    fireEvent.change(screen.getByLabelText(/email/i), {
      target: { value: "jane@example.com" },
    });
    fireEvent.change(screen.getByLabelText(/message/i), {
      target: { value: "Need some help!" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /submit/i }));

    expect(logSpy).toHaveBeenCalledWith("Form submitted:", {
      name: "Jane Smith",
      email: "jane@example.com",
      message: "Need some help!",
    });

    logSpy.mockRestore();
  });
});
