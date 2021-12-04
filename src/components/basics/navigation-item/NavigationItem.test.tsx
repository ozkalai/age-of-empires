import React from "react";
import { render, screen } from "@testing-library/react";

import { NavigationItem } from ".";

describe("NavigationItem", () => {
  it("renders a list element", () => {
    render(<NavigationItem />);

    const title = screen.getByTitle("navigation-item");

    expect(title).toBeTruthy();
  });
});
