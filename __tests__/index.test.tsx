import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  it("renders cover image", () => {
    render(<Home />);

    const coverImage = screen.getAllByAltText("cover-image");

    expect(coverImage).toBeTruthy();
  });

  it("renders age of empires image", () => {
    render(<Home />);

    const ageOfEmpiresImage = screen.getAllByAltText("age-of-empires");

    expect(ageOfEmpiresImage).toBeTruthy();
  });
});
