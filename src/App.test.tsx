import { describe, expect, it } from "vitest";
import { render, screen } from "./test/test-utils";
import App from "./App";

describe("App component", () => {
  it("Content inside the app component", () => {
    render(<App />);

    const appContent = screen.getByTestId("main-app");
    expect(appContent).toMatchSnapshot();
  });
});
