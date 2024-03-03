import { render, screen } from "@testing-library/react";
import Home from "./Home";

test("renders learn react link", () => {
  render(<Home />);
  const heading = screen.getByRole("heading");
  expect(heading).toHaveTextContent('Home Page');
});
