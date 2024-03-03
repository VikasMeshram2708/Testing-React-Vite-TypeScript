import { render, screen } from "@testing-library/react";
import About from "./About";

describe("testing about page", () => {
  it("check the heading", () => {
    render(<About />);
    const heading = screen.getByRole("heading");
    expect(heading).toHaveTextContent("About Page");
  });
});
