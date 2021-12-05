import React from "react";
import { render, screen } from "@testing-library/react";

import { Layout } from ".";
import { createMockRouter } from "../../../__mocks__/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Layout", () => {
  it("renders a logo", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Layout />
      </RouterContext.Provider>,
    );

    const logo = screen.getByText("🛡");
    expect(logo).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Layout />
      </RouterContext.Provider>,
    );

    const listElement = screen.getByText("Home");
    expect(listElement).toBeTruthy();
  });

  it("renders Home navigation item", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Layout />
      </RouterContext.Provider>,
    );

    const listElement2 = screen.getByText("Units");
    expect(listElement2).toBeTruthy();
  });
});
