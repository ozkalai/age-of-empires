import React from "react";
import { render, screen } from "@testing-library/react";

import { Layout } from ".";

describe("Layout", () => {
  it("renders a logo", () => {
    render(<Layout />);

    const logo = screen.getByText("🛡");
    expect(logo).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(<Layout />);

    const listElement = screen.getByText("Home");
    expect(listElement).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(<Layout />);

    const listElement2 = screen.getByText("Units");
    expect(listElement2).toBeTruthy();
  });
});
