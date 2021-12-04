import React from "react";
import { render, screen } from "@testing-library/react";

import { Navigation } from ".";
import { createMockRouter } from "../../test-utils/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Navigation", () => {
  test("renders a logo", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navigation />
      </RouterContext.Provider>,
    );

    const logo = screen.getByText("🛡");
    expect(logo).toBeTruthy();
  });

  test("renders Home navigation item", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navigation />
      </RouterContext.Provider>,
    );

    const listElement = screen.getByText("Home");
    expect(listElement).toBeTruthy();
  });

  test("renders Home navigation item", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Navigation />
      </RouterContext.Provider>,
    );

    const listElement2 = screen.getByText("Units");
    expect(listElement2).toBeTruthy();
  });
});