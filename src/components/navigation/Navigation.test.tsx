import React from "react";
import { render, screen } from "@testing-library/react";

import { Navigation } from ".";

describe("Navigation", () => {
  it("renders a logo", () => {
    render(<Navigation />);

    const logo = screen.getByText("🛡");
    expect(logo).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(<Navigation />);

    const listElement = screen.getByText("Home");
    expect(listElement).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(<Navigation />);

    const listElement2 = screen.getByText("Units");
    expect(listElement2).toBeTruthy();
  });
});
