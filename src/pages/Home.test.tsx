import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("renders learn react link", () => {
  it("testing heading", () => {
    render(<Home />);
    const HomePage = screen.getByTestId("homePage");
    expect(HomePage).toMatchSnapshot();
  });
});
