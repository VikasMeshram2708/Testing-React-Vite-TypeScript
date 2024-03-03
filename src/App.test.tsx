import { describe, expect, it } from "vitest";
import App from "./App";
import { render, screen } from "./utils/test-utils";

describe("App Component", () => {
  it("validate the heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading");
    expect(heading.textContent).toBe("Hello,World!");
  });
});
