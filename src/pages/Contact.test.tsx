import { render, screen } from "@testing-library/react";
import Contact from "./Contact";

describe("testing contact page", () => {
  it("check the heading", () => {
    render(<Contact />);
    
    const ContactPage  = screen.getByTestId("contactPage");
    expect(ContactPage).toMatchSnapshot();

  });
});
