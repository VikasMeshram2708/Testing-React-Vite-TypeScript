import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("testing contact page", () => {
  it("check the heading", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("Contact Page");
  });
});
