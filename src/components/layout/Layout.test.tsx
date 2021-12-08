import React from "react";
import { render, screen } from "@testing-library/react";

import { Layout } from ".";
import { createMockRouter } from "../../../__mocks__/createMockRouter";
import { RouterContext } from "next/dist/shared/lib/router-context";

describe("Layout", () => {
  it("renders navigation ", () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Layout />
      </RouterContext.Provider>,
    );

    const navigation = screen.getByTestId("navigation");
    expect(navigation).toBeTruthy();
  });
});
